function initOpgravingGame() {
    const title = document.createElement('h2');
    title.className = 'minigame-title h2 d-inline-block me-3';
    title.innerText = 'Opgraving: Blijf graven! Er zijn 3 lagen zand verborgen boven de objecten!';
    minigameContent.appendChild(title);

    // Leerzame info button
    const infoBtn = document.createElement('button');
    infoBtn.className = 'btn btn-info btn-sm rounded-circle fw-bold mb-2';
    infoBtn.innerText = 'ℹ️';
    infoBtn.onclick = () => {
        alert("Archeologen vinden niet zomaar alles los op de grond. Door de jaren in de bronstijd stroomde er zand, afgevallen bladeren en stof overheen! Archeologen graven dit héél voorzichtig weg, laagje voor laagje, om het bronzen zwaard en andere eeuwenoude wapens bloot te leggen. Veeg het zand weg totdat je alles hebt gevonden!");
    };
    minigameContent.appendChild(infoBtn);

    const container = document.createElement('div');
    container.style.position = 'relative';
    container.style.width = '600px';
    container.style.height = '600px';
    container.style.maxWidth = '90vw';
    container.style.maxHeight = '50vh';
    container.style.margin = '0 auto';
    container.style.borderRadius = '10px';
    container.style.overflow = 'hidden';
    container.style.boxShadow = '0 10px 20px rgba(0,0,0,0.3)';
    container.style.border = '5px solid var(--primary-brown)';
    container.style.backgroundColor = '#d1bfae';
    minigameContent.appendChild(container);

    // The treasures layer
    const bgImg = document.createElement('img');
    bgImg.src = 'assets/items.png'; // Features 3 items!
    bgImg.style.position = 'absolute';
    bgImg.style.top = '0';
    bgImg.style.left = '0';
    bgImg.style.width = '100%';
    bgImg.style.height = '100%';
    bgImg.style.objectFit = 'cover';
    container.appendChild(bgImg);

    // Create 3 layers of sand
    const layers = [];
    const TOTAL_LAYERS = 3;

    for (let i = 0; i < TOTAL_LAYERS; i++) {
        const canvas = document.createElement('canvas');
        canvas.style.position = 'absolute';
        canvas.style.top = '0';
        canvas.style.left = '0';
        canvas.style.width = '100%';
        canvas.style.height = '100%';
        canvas.style.transition = 'opacity 0.5s';
        container.appendChild(canvas);

        const ctx = canvas.getContext('2d', { willReadFrequently: true });
        layers.push({
            canvas: canvas,
            ctx: ctx,
            cleared: false,
            layerDomIndex: i, // 0 = Bottom (Darkest), 2 = Top (Lightest)
            erasedArea: new Set(),
            targetWipes: 0
        });
    }

    let activeLayerIndex = TOTAL_LAYERS - 1; // Start wiping the top-most canvas in the DOM array
    let isDrawing = false;
    let sandImg = new Image();
    sandImg.src = 'assets/sand.png';

    function resizeCanvas() {
        layers.forEach(layer => {
            layer.canvas.width = container.clientWidth;
            layer.canvas.height = container.clientHeight;
        });
        if (sandImg.complete) {
            drawSandAll();
        }
    }

    function drawSandAll() {
        layers.forEach((layer, i) => {
            layer.ctx.globalCompositeOperation = 'source-over';
            layer.ctx.globalAlpha = 1.0;
            try {
                const pattern = layer.ctx.createPattern(sandImg, 'repeat');
                if (pattern) layer.ctx.fillStyle = pattern;
                else layer.ctx.fillStyle = '#C2B280';
            } catch (e) {
                // Tainted canvas local fallback
                layer.ctx.fillStyle = '#C2B280';
            }
            layer.ctx.fillRect(0, 0, layer.canvas.width, layer.canvas.height);

            // Overlay gradient to make them visibly lighter to darker
            layer.ctx.globalCompositeOperation = 'source-atop';
            if (i === 2) {
                // Top layer -> Lichte zand
                layer.ctx.fillStyle = 'rgba(255,255,255, 0.3)';
            } else if (i === 1) {
                // Middle layer -> Iets donkerder
                layer.ctx.fillStyle = 'rgba(0,0,0, 0.15)';
            } else if (i === 0) {
                // Bottom layer -> Donker zand
                layer.ctx.fillStyle = 'rgba(0,0,0, 0.35)';
            }
            layer.ctx.fillRect(0, 0, layer.canvas.width, layer.canvas.height);

            // reset composite operation for erasing later
            layer.ctx.globalCompositeOperation = 'source-over';
        });
    }

    sandImg.onload = () => resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    function startErase(x, y) {
        if (activeLayerIndex < 0) return;
        isDrawing = true;
        erase(x, y);
    }

    function erase(x, y) {
        if (!isDrawing || activeLayerIndex < 0) return;

        const activeLayer = layers[activeLayerIndex];
        const ctx = activeLayer.ctx;
        const canvas = activeLayer.canvas;

        ctx.globalCompositeOperation = 'destination-out';
        ctx.beginPath();
        // Smaller brush for more effort
        ctx.arc(x, y, 20, 0, Math.PI * 2, false);
        ctx.fillStyle = '#000';
        ctx.fill();

        // Track erased area on a 20x20 grid
        const gridX = Math.floor(x / 20);
        const gridY = Math.floor(y / 20);

        // Add adjacent cells as well to match the radius of the brush roughly
        activeLayer.erasedArea.add(`${gridX},${gridY}`);
        activeLayer.erasedArea.add(`${gridX + 1},${gridY}`);
        activeLayer.erasedArea.add(`${gridX},${gridY + 1}`);
        activeLayer.erasedArea.add(`${gridX - 1},${gridY}`);
        activeLayer.erasedArea.add(`${gridX},${gridY - 1}`);

        if (activeLayer.targetWipes === 0) {
            // Rough estimation of how many blocks it takes to clear 65% of screen
            // screen dimensions / 20px grid
            const cols = canvas.clientWidth / 20;
            const rows = canvas.clientHeight / 20;
            const totalCells = cols * rows;
            activeLayer.targetWipes = totalCells * 0.4; // Require swiping ~40% of the screen
        }
    }

    function stopErase() {
        isDrawing = false;
        checkWin();
    }

    function getMousePos(evt) {
        const topCanvas = layers[0].canvas; // bounding client rect applies to all identically
        const rect = topCanvas.getBoundingClientRect();
        return {
            x: (evt.clientX || (evt.touches && evt.touches[0].clientX)) - rect.left,
            y: (evt.clientY || (evt.touches && evt.touches[0].clientY)) - rect.top
        };
    }

    // Attach events to the container so it catches them even if canvases vanish
    container.addEventListener('mousedown', (e) => {
        const pos = getMousePos(e);
        startErase(pos.x, pos.y);
    });
    container.addEventListener('mousemove', (e) => {
        // Only if mouse down
        if (e.buttons !== 1) return;
        const pos = getMousePos(e);
        erase(pos.x, pos.y);
    });
    container.addEventListener('mouseup', stopErase);
    container.addEventListener('mouseleave', stopErase);

    container.addEventListener('touchstart', (e) => {
        e.preventDefault();
        const pos = getMousePos(e);
        startErase(pos.x, pos.y);
    }, { passive: false });
    container.addEventListener('touchmove', (e) => {
        e.preventDefault();
        const pos = getMousePos(e);
        erase(pos.x, pos.y);
    }, { passive: false });
    container.addEventListener('touchend', stopErase);

    let checkInterval = null;

    function checkWin() {
        if (activeLayerIndex < 0) return;

        const activeLayer = layers[activeLayerIndex];
        const canvas = activeLayer.canvas;

        if (canvas.width === 0 || activeLayer.targetWipes === 0) return;

        // Compare Set size to target wipes without using tainted getImageData!
        if (activeLayer.erasedArea.size > activeLayer.targetWipes) {
            // Layer cleared!
            activeLayer.cleared = true;
            activeLayer.canvas.style.opacity = '0'; // fade out the remaining specs
            activeLayerIndex--; // Move to next layer underneath!

            if (activeLayerIndex >= 0) {
                title.innerText = `Goed zo! Nog ${activeLayerIndex + 1} zandlaag te gaan!`;
            } else {
                title.innerText = `Je hebt de vondst opgegraven!`;
                // Complete win
                setTimeout(() => {
                    finishMinigame();
                }, 800);
            }
        }
    }
}
