function initKlokbekerGame() {
    const title = document.createElement('h2');
    title.className = 'minigame-title h2 d-inline-block me-3';
    title.innerText = 'Repareer de Klokbeker (Veeg de stukjes!)';
    minigameContent.appendChild(title);
    
    // Leerzame info button
    const infoBtn = document.createElement('button');
    infoBtn.className = 'btn btn-info btn-sm rounded-circle fw-bold mb-2';
    infoBtn.innerText = 'ℹ️';
    infoBtn.onclick = () => {
        alert("Klokbekers werden vroeger met de hand van speciale klei gemaakt en versierd met touwen of spatels. Belangrijke personen kregen deze bekers vaak mee in het graf voor bescherming. Jouw taak is om te helpen als een echte archeoloog: schuif de de scherven terug op de juiste plek en maak de omgevallen beker weer helemaal heel!");
    };
    minigameContent.appendChild(infoBtn);

    const puzzleArea = document.createElement('div');
    puzzleArea.id = 'puzzle-area';
    puzzleArea.style.width = '420px'; // 3 * 140
    puzzleArea.style.height = '420px';
    puzzleArea.style.position = 'relative';
    puzzleArea.style.border = '5px solid var(--primary-brown)';
    puzzleArea.style.borderRadius = '8px';
    puzzleArea.style.backgroundColor = '#fdfbf7';
    puzzleArea.style.margin = '0 auto';
    puzzleArea.style.boxShadow = '0 10px 20px rgba(0,0,0,0.3)';
    // Prevent default touch actions like browser back swipe etc
    puzzleArea.style.touchAction = 'none';
    minigameContent.appendChild(puzzleArea);

    const PUZZLE_SIZE = 3;
    const PIECE_SIZE = 420 / PUZZLE_SIZE;

    const imgUrl = 'assets/beaker2.png';

    let solvedGrid = [0, 1, 2, 3, 4, 5, 6, 7, 8];
    // Start with a simpler shuffle so it's always solvable without math bugs
    let currentGrid = [...solvedGrid];

    // Simulate 20 random valid slides to shuffle it perfectly valid
    for (let i = 0; i < 20; i++) {
        let emptyIdx = currentGrid.indexOf(8);
        let validMoves = [];
        let r = Math.floor(emptyIdx / PUZZLE_SIZE);
        let c = emptyIdx % PUZZLE_SIZE;
        if (r > 0) validMoves.push(emptyIdx - PUZZLE_SIZE); // Up
        if (r < PUZZLE_SIZE - 1) validMoves.push(emptyIdx + PUZZLE_SIZE); // Down
        if (c > 0) validMoves.push(emptyIdx - 1); // Left
        if (c < PUZZLE_SIZE - 1) validMoves.push(emptyIdx + 1); // Right

        let randomMove = validMoves[Math.floor(Math.random() * validMoves.length)];
        // Swap
        currentGrid[emptyIdx] = currentGrid[randomMove];
        currentGrid[randomMove] = 8;
    }

    function isSolved(arr) {
        for (let i = 0; i < arr.length; i++) {
            if (arr[i] !== solvedGrid[i]) return false;
        }
        return true;
    }

    // Keep DOM elements persistent instead of rebuilding, just changing their left/top!
    // This allows CSS transitions.
    const tiles = [];

    for (let i = 0; i < 9; i++) {
        if (i === 8) {
            // empty tile, keep null
            tiles.push(null);
            continue;
        }
        const tileNumber = i; // Represents the visual part
        const tile = document.createElement('div');
        tile.style.width = PIECE_SIZE + 'px';
        tile.style.height = PIECE_SIZE + 'px';
        tile.style.position = 'absolute';
        tile.style.backgroundImage = `url(${imgUrl})`;
        tile.style.backgroundSize = '420px 420px';

        const correctR = Math.floor(tileNumber / PUZZLE_SIZE);
        const correctC = tileNumber % PUZZLE_SIZE;
        tile.style.backgroundPosition = `-${correctC * PIECE_SIZE}px -${correctR * PIECE_SIZE}px`;

        tile.style.border = '1px solid #fff';
        tile.style.borderRadius = '5px';
        tile.style.transition = 'top 0.15s ease-out, left 0.15s ease-out';
        tile.style.cursor = 'pointer';

        // Add direct click support for PC
        tile.addEventListener('click', () => {
            const currentIndex = currentGrid.indexOf(tileNumber);
            handleTileSlideByClick(currentIndex);
        });

        puzzleArea.appendChild(tile);
        tiles.push(tile); // stored at index = tileNumber
    }

    function renderGridPositions() {
        for (let idx = 0; idx < 9; idx++) {
            const tileNumber = currentGrid[idx];
            if (tileNumber === 8) continue;

            const r = Math.floor(idx / PUZZLE_SIZE);
            const c = idx % PUZZLE_SIZE;

            const domEl = tiles[tileNumber];
            if (domEl) {
                domEl.style.left = (c * PIECE_SIZE) + 'px';
                domEl.style.top = (r * PIECE_SIZE) + 'px';
            }
        }
    }

    renderGridPositions();

    // Interaction Handle
    function handleTileSlideByClick(tileIndex) {
        const emptyIndex = currentGrid.indexOf(8);
        const r1 = Math.floor(tileIndex / PUZZLE_SIZE);
        const c1 = tileIndex % PUZZLE_SIZE;
        const r2 = Math.floor(emptyIndex / PUZZLE_SIZE);
        const c2 = emptyIndex % PUZZLE_SIZE;

        if ((Math.abs(r1 - r2) === 1 && c1 === c2) || (Math.abs(c1 - c2) === 1 && r1 === r2)) {
            swap(tileIndex, emptyIndex);
        }
    }

    function swap(idx1, idx2) {
        let temp = currentGrid[idx1];
        currentGrid[idx1] = currentGrid[idx2];
        currentGrid[idx2] = temp;

        renderGridPositions();

        if (isSolved(currentGrid)) {
            setTimeout(winGame, 300);
        }
    }

    // SWIPE LOGIC
    let touchStartX = 0;
    let touchStartY = 0;

    puzzleArea.addEventListener('touchstart', e => {
        touchStartX = e.changedTouches[0].screenX;
        touchStartY = e.changedTouches[0].screenY;
    }, { passive: true });

    puzzleArea.addEventListener('touchend', e => {
        let touchEndX = e.changedTouches[0].screenX;
        let touchEndY = e.changedTouches[0].screenY;
        handleSwipe(touchStartX, touchStartY, touchEndX, touchEndY);
    }, { passive: true });

    // Also add drag/swipe with mouse for PC testing
    let mouseDown = false;
    puzzleArea.addEventListener('mousedown', e => {
        mouseDown = true;
        touchStartX = e.screenX;
        touchStartY = e.screenY;
    });
    puzzleArea.addEventListener('mouseup', e => {
        if (!mouseDown) return;
        mouseDown = false;
        handleSwipe(touchStartX, touchStartY, e.screenX, e.screenY);
    });

    function handleSwipe(startX, startY, endX, endY) {
        const dx = endX - startX;
        const dy = endY - startY;
        if (Math.abs(dx) < 30 && Math.abs(dy) < 30) return; // Too short to be a swipe

        const emptyIndex = currentGrid.indexOf(8);
        const r = Math.floor(emptyIndex / PUZZLE_SIZE);
        const c = emptyIndex % PUZZLE_SIZE;

        let targetIndex = -1;

        if (Math.abs(dx) > Math.abs(dy)) {
            // Horizontal swipe
            if (dx > 0) {
                // Swiped Right -> Tile left of empty moves into empty (rightwards)
                if (c > 0) targetIndex = emptyIndex - 1;
            } else {
                // Swiped Left -> Tile right of empty moves into empty (leftwards)
                if (c < PUZZLE_SIZE - 1) targetIndex = emptyIndex + 1;
            }
        } else {
            // Vertical swipe
            if (dy > 0) {
                // Swiped Down -> Tile above empty moves down
                if (r > 0) targetIndex = emptyIndex - PUZZLE_SIZE;
            } else {
                // Swiped Up -> Tile below empty moves up
                if (r < PUZZLE_SIZE - 1) targetIndex = emptyIndex + PUZZLE_SIZE;
            }
        }

        if (targetIndex !== -1) {
            swap(targetIndex, emptyIndex);
        }
    }

    function winGame() {
        // Fill the empty square
        const fill = document.createElement('div');
        fill.style.width = PIECE_SIZE + 'px';
        fill.style.height = PIECE_SIZE + 'px';
        fill.style.position = 'absolute';

        // At this point it's solved, so empty is at index 8
        const r2 = Math.floor(8 / PUZZLE_SIZE);
        const c2 = 8 % PUZZLE_SIZE;

        fill.style.left = (c2 * PIECE_SIZE) + 'px';
        fill.style.top = (r2 * PIECE_SIZE) + 'px';
        fill.style.backgroundImage = `url(${imgUrl})`;
        fill.style.backgroundSize = '420px 420px';
        fill.style.backgroundPosition = `-${c2 * PIECE_SIZE}px -${r2 * PIECE_SIZE}px`;
        puzzleArea.appendChild(fill);

        puzzleArea.style.border = '5px solid var(--gold-yellow)';

        setTimeout(() => {
            finishMinigame();
        }, 500);
    }
    
    // Skip/Solve button for difficult puzzles
    const skipBtn = document.createElement('button');
    skipBtn.className = 'btn btn-outline-danger d-block mx-auto mt-4';
    skipBtn.innerText = '💡 Te lastig? Sla over en los op!';
    skipBtn.onclick = () => {
        // Auto solve
        currentGrid = [...solvedGrid];
        renderGridPositions();
        setTimeout(winGame, 300);
        skipBtn.remove();
    };
    minigameContent.appendChild(skipBtn);
}
