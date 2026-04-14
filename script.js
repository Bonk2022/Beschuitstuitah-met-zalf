const hotspotsData = [
    {
        id: 1, y: 677, x: 1289, title: "De grafheuvel",
        text: "Dit is een immense grafheuvel uit de prehistorie! In plaats van een gewone begraafplaats, bouwden de eerste boeren deze enorme aarden heuvels als veilige, zichtbare rustplaats voor hun overleden voorouders.",
        extraText: "Deze heuvels vielen extreem goed op in het uitgestrekte landschap, zodat andere stammen direct wisten dat hier een belangrijke familie leefde. Er werden vaak in en rondom zo'n heuvel prachtige offers gebracht en rituelen gehouden. Wist je dat grafheuvels soms wel honderden jaren lang werden hergebruikt voor nieuwe begrafenissen van generaties van dezelfde familie?",
        hasGame: false, image: 'https://image.pollinations.ai/prompt/bronze%20age%20burial%20mound%20in%20a%20grassy%20field%20prehistoric%20landscape%20watercolor%20digital%20illustration%20educational%20comic%20style?width=800&height=600&nologo=true&seed=1'
    },
    {
        id: 2, y: 788, x: 1452, title: "Grafrituelen",
        text: "Een begrafenis was een heilig moment waarop de hele stam. Zoals je kunt zien, verzamelde de hele familie zich vol emotie rond een indrukwekkend groot de begrafenis.",
        extraText: "Overledenen werden vaak eerst met veel respect gecremeerd op een grote brandstapel. De overgebleven botresten werden ritueel in de grafheuvel begraven en afgeschermd. Zo’n ritueel was een ontzettend beladen gebeurtenis; belangrijke sprekers hielden toespraken en er werden offergaven achtergelaten om de dode te eren en een succesvolle reis naar het schimmenrijk of hiernamaals toe te wensen.",
        hasGame: false, image: 'assets/grafrituelen.jpg' // Locally cached
    },
    {
        id: 3, y: 459, x: 583, title: "Kleding",
        text: "Mensen in de bronstijd maakten hun kleding helemaal zelf! Een enorm karwei. Ze gebruikten daarvoor warme, goed isolerende dierenhuiden en sponnen draden van dierenwol of de ijzersterke vezels van planten.",
        extraText: "Van deze draden konden ze uiteindelijk échte kleurrijke stoffen weven, wat ontzettend veel geduld en vakmanschap vergde. Kleding was absoluut levensreddend en bood niet alleen bescherming tegen de kou en gevaarlijke struiken op de heide; speciale weefpatronen, prachtige kleuren of unieke kledingstukken lieten ook direct zien hoeveel aanzien en rijkdom iemand had binnen de kleine, hechte gemeenschap.",
        hasGame: false, image: 'assets/kleding.jpg' // Locally cached
    },
    {
        id: 4, y: 907, x: 1612, title: "Sieraden",
        text: "Bijzondere sieraden waren waanzinnig waardevol. Sieraden in de prehistorie bestonden vaak uit kettingen en kralen handgemaakt van zeldzaam oranje barnsteen, imposante berenbotten, of zelfs blinkend koper!",
        extraText: "Barnsteen spoelde soms aan via de woeste golven van de zee en was ongekend exclusief en magisch bevonden. Koper daarentegen kwam via oeroude handelsnetwerken helemaal uit andere werelddelen naar de Veluwe! Wie accessoires zoals koperen haarringen of lange barnsteen-kettingen droeg, wilde duidelijk maken aan de rest van het dorp of vijandige stammen dat zijn of haar familie groot, succesvol en buitengewoon belangrijk was.",
        hasGame: false, image: 'assets/sieraden.jpg' // Locally cached
    },
    {
        id: 5, y: 611, x: 819, title: "Stoomkuilen",
        text: "Zie je de stoom walmen? Dit doen de machtige stoomkuilen! Vroeger kenden ze geen normale fornuizen. Om ingrediënten hygiënisch te koken, gebruikten de bewoners hete stenen als warmtebron.",
        extraText: "Ze groeven massale kuilen en verhitten zware stenen in een knetterend haardvuur totdat ze roodgloeiend waren. Daarna stopten ze de stenen tegelijk met verpakt voedsel of ruw aardewerk in de kuil, sloten deze direct af, en goten er mogelijk water bij. Dat veroorzaakte zo\'n extreme hitte-schok dat de stenen knalden en barstten! De allesverzengende stoom die vast zat onder de aarde kookte het eten perfect en ontzettend gezond.",
        hasGame: false, image: 'assets/stoomkuilen.jpg' // Locally cached
    },
    {
        id: 6, y: 956, x: 576, title: "De Veluwse klokbeker",
        text: "Een klokbeker is niet zomaar de eerste de beste beker: het is een bijzondere en rijk versierde beker van gebakken klei. Ze danken hun naam aan de omgekeerde klokvorm!",
        extraText: "Deze zeer spectaculaire en waardevolle bekers werden op de Veluwe heel regelmatig gebruikt voor grote ceremonies, maar werden met name speciaal gemaakt als grafgift! Opgravingen hebben aangetoond dat belangrijke stam-leiders zo'n prachtige, met visgraat- en streepjespatronen versierde Veluwse klokbeker vol mochten leggen in hun graf. Vermoedelijk gevuld met offers of speciale geneeskrachtige kruidendranken om hun krachten te behouden op weg naar de prehistorische goden of voorouders.",
        hasGame: true, gameId: 'klokbeker', image: 'https://image.pollinations.ai/prompt/ancient%20prehistoric%20bell%20beaker%20pottery%20pot%20detailed%20watercolor%20digital%20illustration%20educational%20comic%20style?width=800&height=600&nologo=true&seed=6'
    },
    {
        id: 7, y: 426, x: 251, title: "Het zwaard van Bergsham",
        text: "Kijk eens naar deze imposante man die statig en waakzaam rondloopt. Hij heeft een onverwoestbaar, gevaarlijk massief bronzen zwaard (rapier) in zijn grote oer-vuisten omklonken!",
        extraText: "Gereedschappen gaven aanzien! Het metaal brons was een magisch nieuwtje in onze streken en extreem kostbaar! Waar boeren op het land normaliter makkelijk en vreedzaam werkten met vuurstenen bijltjes, trokken krijgers die zo\'n glimmend, enorm lang pronk-zwaard (bekend van vondsten zoals uit Bergsham) droegen gigantisch veel respect. Zo'n wapen diende als ontzagwekkende beschermer voor bewoners en tevens als symbool voor onbetwist, koninklijk en dodelijk leiderschap in chaotische en ruwe jaren.",
        hasGame: true, gameId: 'opgraving', image: 'https://image.pollinations.ai/prompt/bronze%20age%20sword%20bone%20and%20flint%20arrowhead%20in%20dirt%20detailed%20watercolor%20digital%20illustration%20comic%20style?width=800&height=600&nologo=true&seed=7'
    },
    {
        id: 8, y: 858, x: 867, title: "Het landschap",
        text: "Dromerige bossen stonden vol! Heel de wilde en weidse Veluwe was vroeger compleet dichtgegroeid en bedekt met eeuwenoude, zware, eiken-, linden- en ondoordringbare dennenbossen.",
        extraText: "Dat beeld veranderde radicaal doordat er op een moment in de tijd steeds massaler agrarische boeren de regio introkken! Om ruimte te scheppen voor enorme weilanden om paarden, runderen en duizenden makke schapen te laten grazen, begonnen de groepen keihard duizenden flinke bomen te kappen en te verbanden. Dit kappen legde de basis van het heidige landschap met zandverstuivingen en open vergezichten zoals wij die op de Veluwe gelukkig tot de dag van vandaag nog stééds kennen! ",
        hasGame: false, image: 'assets/landschap.jpg' // Locally cached
    },
    {
        id: 9, y: 299, x: 1556, title: "De dieren",
        text: "Wilde gevaarlijke beesten liepen gewoon pal over de erf-grens! Een jager of een spelend kind kon plotseling oog in oog staan in het bos met een gigantische, woeste oeros.",
        extraText: "Prehistorische en soms bloeddorstige of majestueuze dieren, zoals bruine beren, agressieve wilde zwijnen, edelherten, gif-adders en grote arenden leefden hier prachtig samen, al werd daar niet elke dag aan afgeleid. Dierenhuid diende immers ook voor het overleven. Ze gaven veel krachten, voedzaam en ijzerrijk vlees in extreem koude winters. Maar ook weefden stammen de botten, gigantische slagtanden, of botte naalden tot magische kettingen en nuttige kledingspelden voor ritulen en eerbetoon. Neem met de speur-route zelf een kijkje over heel dit landschap!",
        hasGame: true, gameId: 'dieren', image: 'https://image.pollinations.ai/prompt/prehistoric%20wild%20boar%20and%20eagle%20in%20an%20oak%20forest%20detailed%20watercolor%20digital%20illustration%20educational%20comic%20style?width=800&height=600&nologo=true&seed=9'
    },
    {
        id: 10, y: 691, x: 1647, title: "Omgaan met de dood",
        text: "Dood was een cruciaal spiritueel onderdeel van hun levensgevoel! Je ziet een verdrietige familie innig bij elkaar geklonken staan, om hun rouw met elkaar te delen vlakbij de indrukwekkende en vurige afscheidsceremonie.",
        extraText: "Echt bewust en intens gemeenschappelijk en teder afscheid nemen stond bij onze indrukwekkende vroege prehistorische families al hoog aangeschreven. De sterke volwassenen en breekbare achterblijvende kinderen rouwden massaal mee en kozen er heel frequent voor om kostbare offers, kruidige dranken uit prachtige schalen of symbolische gereedscahppen (grafgiften) te verbranden en te bedelven als ode! Dit laat haarfijn zien met hoeveel ongekende passie en diep onbegrensd respect ze over hun overledenen dachten om ze zo krachtig de dood of het nieuwe beloofde koninkrijk in te sturen.",
        hasGame: false, image: 'https://image.pollinations.ai/prompt/prehistoric%20bronze%20age%20family%20grieving%20comforting%20each%20other%20detailed%20watercolor%20digital%20illustration%20educational%20comic%20style?width=800&height=600&nologo=true&seed=10'
    }
];

let minigamesCompleted = 0;
const totalMinigames = 3;

// Status hotspots
let foundCount = 0;
const totalCount = hotspotsData.length;
const foundHotspots = new Set(); // Slaat de id's op van ontdekte locaties

// Image definitions
const imgWidth = 1920;
const imgHeight = 1357;
const imageBounds = [[0, 0], [imgHeight, imgWidth]];

// Leaflet initialisatie
const map = L.map('map', {
    crs: L.CRS.Simple,
    minZoom: -0.55,
    maxZoom: 2,
    zoomDelta: 0.5,
    zoomSnap: 0.5,
    attributionControl: false,
    maxBounds: imageBounds,
    maxBoundsViscosity: 1.0
});

// Verplaats de zoomknoppen naar rechts onder
map.zoomControl.setPosition('bottomright');

// Voeg de hoge-resolutie afbeeldings-overlay toe
const backgroundLayer = L.imageOverlay('kleur_MBRONS_4K.jpg', imageBounds).addTo(map);
map.fitBounds(imageBounds);

// Dom elementen
const offcanvasElement = document.getElementById('infoPanel');
const infoPanel = new bootstrap.Offcanvas(offcanvasElement);
const infoTitle = document.getElementById('infoPanelLabel');
const infoText = document.getElementById('infoText');
const progressText = document.getElementById('progress-text');
const progressBar = document.getElementById('progress-bar');
const resetBtn = document.getElementById('reset-zoom');
const particleContainer = document.getElementById('particle-container');

// Hotspots data
hotspotsData.forEach(data => {
    const icon = L.divIcon({
        className: 'custom-hotspot',
        html: `<div class="hotspot-icon" id="marker-icon-${data.id}"></div>`,
        iconSize: [48, 48],
        iconAnchor: [24, 24] // Zorgt dat het midden van de div op het coördinaat staat
    });

    const marker = L.marker([data.y, data.x], { icon: icon }).addTo(map);

    // Event gebeurt als user op een hotspot klikt
    marker.on('click', (e) => {
        handleHotspotClick(data, e.originalEvent);
        map.flyTo([data.y, data.x], 1.5, {
            duration: 1.2,
            easeLinearity: 0.25
        });
    });
});

// Easter Egg! Verborgen schat op de neus van de vos (x: 1486, y: 384)
const easterEggIcon = L.divIcon({
    className: 'easter-egg-marker',
    html: `<div style="width: 60px; height: 60px; cursor: pointer; border-radius: 50%;"></div>`, // Onzichtbaar hotspotje (groter raakvlak)
    iconSize: [60, 60],
    iconAnchor: [30, 30]
});
let easterEggFound = false;
// Note: Leaflet coordinates are [y, x]
const easterEggMarker = L.marker([384, 1486], { icon: easterEggIcon }).addTo(map);

easterEggMarker.on('click', (e) => {
    if (easterEggFound) return;
    easterEggFound = true;

    // Mega particle blast in multiple waves
    for (let i = 0; i < 5; i++) {
        setTimeout(() => createParticles(window.innerWidth / 2, window.innerHeight / 2), i * 300);
    }

    if (typeof confetti === 'function') {
        const duration = 5 * 1000; // 5 seconds of madness
        const end = Date.now() + duration;

        (function frame() {
            confetti({
                particleCount: 15,
                angle: 60,
                spread: 100,
                origin: { x: 0, y: 1 },
                colors: ['#ff0000', '#00ff00', '#0000ff', '#ffff00', '#ff00ff', '#ffffff']
            });
            confetti({
                particleCount: 15,
                angle: 120,
                spread: 100,
                origin: { x: 1, y: 1 },
                colors: ['#ff0000', '#00ff00', '#0000ff', '#ffff00', '#ff00ff', '#ffffff']
            });

            if (Date.now() < end) {
                requestAnimationFrame(frame);
            }
        }());
    }

    infoTitle.innerText = "🚨 GEHEIME TIJDCAPSULE ONTDEKT! 🚨";
    infoText.innerText = "WAANZINNIG! Je hebt stiekem op de neus van de vos geklikt! Hiermee heb je de onzichtbare tijdcapsule van duizenden jaren geleden gevonden! 🎉";

    const infoImage = document.getElementById('infoImage');
    const infoMediaContainer = document.getElementById('infoMediaContainer');

    if (infoImage) {
        infoImage.src = "https://image.pollinations.ai/prompt/ancient%20mysterious%20glowing%20bronze%20age%20time%20capsule%20artifact%20detailed%20watercolor%20digital%20illustration%20comic%20style?width=800&height=600&nologo=true&seed=99";
        infoMediaContainer.style.display = 'block';
    }

    const startGameBtn = document.getElementById('startGameBtn');
    if (startGameBtn) startGameBtn.classList.add('d-none');

    infoPanel.show();
});


// Hotspot logica
let activeGameHotspotId = null;

function markHotspotAsDiscovered(id, originalEvent) {
    if (!foundHotspots.has(id)) {
        foundHotspots.add(id);
        foundCount++;
        updateProgress();
        const iconDiv = document.getElementById(`marker-icon-${id}`);
        if (iconDiv) {
            iconDiv.classList.add('found');
        }

        // Speciaal effectje
        if (originalEvent) {
            let clientX = originalEvent.clientX;
            let clientY = originalEvent.clientY;
            if (originalEvent.touches && originalEvent.touches.length > 0) {
                clientX = originalEvent.touches[0].clientX;
                clientY = originalEvent.touches[0].clientY;
            }
            createParticles(clientX, clientY);
        } else {
            createParticles(window.innerWidth / 2, window.innerHeight / 2);
        }
    }
}

function handleHotspotClick(data, originalEvent) {
    const isNewDiscover = !foundHotspots.has(data.id);

    if (data.hasGame) {
        // Do NOT mark as discovered, just remember we are playing it!
        activeGameHotspotId = data.id;
    } else if (isNewDiscover) {
        // Direct nieuwe hotspot
        markHotspotAsDiscovered(data.id, originalEvent);
    }

    infoTitle.innerText = data.title;
    infoText.innerText = data.text;
    
    // UI logic for "Lees Meer..."
    if (data.extraText) {
        document.querySelectorAll('.btn-lees-meer').forEach(b => b.remove());
        const extraParagraph = document.createElement('p');
        extraParagraph.innerText = data.extraText;
        extraParagraph.style.display = 'none';
        extraParagraph.style.borderTop = '2px dashed var(--gold-yellow)';
        extraParagraph.style.paddingTop = '10px';
        extraParagraph.style.marginTop = '10px';
        extraParagraph.className = 'fw-lighter fst-italic';
        
        const btnLeesMeer = document.createElement('button');
        btnLeesMeer.className = 'btn btn-outline-dark btn-sm fw-bold w-100 mb-3 btn-lees-meer';
        btnLeesMeer.innerText = "📖 Lees Meer Detail Info...";
        btnLeesMeer.onclick = () => {
            if (extraParagraph.style.display === 'none') {
                extraParagraph.style.display = 'block';
                btnLeesMeer.innerText = "📖 Inklappen";
            } else {
                extraParagraph.style.display = 'none';
                btnLeesMeer.innerText = "📖 Lees Meer Detail Info...";
            }
        };
        
        // We append them below infoText by inserting near startGameBtn but preserving structure safely!
        infoText.parentNode.insertBefore(extraParagraph, infoText.nextSibling);
        infoText.parentNode.insertBefore(btnLeesMeer, infoText.nextSibling);
    } else {
        document.querySelectorAll('.btn-lees-meer').forEach(b => b.remove());
    }

    const infoImage = document.getElementById('infoImage');
    const infoMediaContainer = document.getElementById('infoMediaContainer');

    if (data.image && infoImage && infoMediaContainer) {
        infoImage.src = data.image;
        infoMediaContainer.style.display = 'block';
    } else if (infoMediaContainer) {
        infoMediaContainer.style.display = 'none';
    }

    const startGameBtn = document.getElementById('startGameBtn');
    if (data.hasGame && startGameBtn) {
        startGameBtn.classList.remove('d-none');
        startGameBtn.onclick = () => {
            infoPanel.hide();
            startMinigame(data.gameId);
        };
    } else if (startGameBtn) {
        startGameBtn.classList.add('d-none');
    }

    infoPanel.show();
}

// UI voortgang
function updateProgress() {
    progressText.innerText = `${foundCount} van de ${totalCount} ontdekkingen gevonden`;

    const percentage = (foundCount / totalCount) * 100;
    progressBar.style.width = `${percentage}%`;
    progressBar.setAttribute('aria-valuenow', foundCount);

    if (foundCount === totalCount) {
        progressText.innerText = `🙌 ALLE GEHEIMEN ONTRAFELD! 🙌`;
        progressText.classList.add('text-success');
        progressBar.classList.remove('bg-warning');
        progressBar.classList.add('bg-success');

        // Setup Extreme CSS Glow effect dynamically
        const extraStyle = document.createElement('style');
        extraStyle.innerHTML = `
            @keyframes extremeRainbowGlow {
                0% { box-shadow: 0 0 20px #ff0000, 0 0 40px #ff0000; filter: hue-rotate(0deg); }
                100% { box-shadow: 0 0 20px #ff0000, 0 0 40px #ff0000; filter: hue-rotate(360deg); }
            }
            @keyframes extremeTextBounce {
                0% { transform: scale(1); color: #fff; text-shadow: 0 0 10px #ff0000; }
                50% { transform: scale(1.15) rotate(2deg); color: #ffeb3b; text-shadow: 0 0 20px #fff, 0 0 40px #ffeb3b; }
                100% { transform: scale(1); color: #fff; text-shadow: 0 0 10px #ff0000; }
            }
            .glow-party-bar {
                animation: extremeRainbowGlow 3s infinite linear !important;
                border: 3px solid #fff !important;
            }
            .glow-party-text {
                animation: extremeTextBounce 1.5s infinite ease-in-out !important;
                display: inline-block;
                padding: 5px;
            }
        `;
        document.head.appendChild(extraStyle);

        // Easter Egg: Pulsing glowing progress bar party mode!
        progressBar.classList.add('glow-party-bar');
        progressText.classList.add('glow-party-text');
    }
}

// Reset overzicht
resetBtn.addEventListener('click', () => {
    infoPanel.hide();

    map.flyToBounds(imageBounds, {
        duration: 1.5,
        easeLinearity: 0.25
    });
});


function createParticles(x, y) {
    const numParticles = 25;
    const colors = ['#e6b325', '#ffda79', '#cc8e35', '#ffffff'];

    for (let i = 0; i < numParticles; i++) {
        const particle = document.createElement('div');
        particle.classList.add('particle');

        particle.style.left = `${x}px`;
        particle.style.top = `${y}px`;

        const angle = Math.random() * Math.PI * 2;
        const velocity = 60 + Math.random() * 120;
        const tx = Math.cos(angle) * velocity;
        const ty = Math.sin(angle) * velocity;

        particle.style.setProperty('--tx', `${tx}px`);
        particle.style.setProperty('--ty', `${ty}px`);

        particle.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];

        const size = Math.random() * 8 + 4;
        particle.style.width = `${size}px`;
        particle.style.height = `${size}px`;

        particleContainer.appendChild(particle);

        setTimeout(() => {
            if (particleContainer.contains(particle)) {
                particle.remove();
            }
        }, 1000);
    }
}

let mapClickCount = 0;
let mapClickTimer = null;

map.on('click', function (e) {
    // Coördinaten click finder
    // console.log(`💡 Coördinaten gevonden! x: ${Math.round(e.latlng.lng)}, y: ${Math.round(e.latlng.lat)}`);

    // Easter Egg 2: Spamming clicks to spawn prehistoric birds!
    mapClickCount++;
    clearTimeout(mapClickTimer);

    if (mapClickCount >= 5) {
        spawnBirds();
        mapClickCount = 0;
    } else {
        mapClickTimer = setTimeout(() => { mapClickCount = 0; }, 2000);
    }
});

function spawnBirds() {
    for (let i = 0; i < 8; i++) {
        setTimeout(() => {
            const bird = document.createElement('div');
            bird.innerText = '🦅';
            bird.style.position = 'fixed';
            bird.style.fontSize = '3rem';
            bird.style.zIndex = '4000';
            bird.style.left = '-100px';
            bird.style.top = `${Math.random() * 80 + 10}vh`; // 10% to 90% top
            bird.style.transition = 'left 4s linear, top 4s linear';
            bird.style.pointerEvents = 'none';
            document.body.appendChild(bird);

            // Start flight
            setTimeout(() => {
                bird.style.left = '120vw';
                bird.style.top = `${Math.random() * 80 + 10}vh`;
            }, 50);

            setTimeout(() => bird.remove(), 4500);
        }, i * 300);
    }
}

function resetGame() {
    foundCount = 0;
    foundHotspots.clear();

    // Reset alle easter eggs en minigame variables
    easterEggFound = false;
    mapClickCount = 0;
    activeGameHotspotId = null;
    minigamesCompleted = 0;

    // Haal de wilde Glow Party classes weg bij progress text/bar
    progressBar.classList.remove('glow-party-bar', 'bg-success');
    progressBar.classList.add('bg-warning');
    progressText.classList.remove('text-success', 'glow-party-text');

    updateProgress();

    infoPanel.hide();

    document.querySelectorAll('.hotspot-icon').forEach(icon => {
        icon.classList.remove('found');
    });

    map.flyToBounds(imageBounds, {
        duration: 1.5,
        easeLinearity: 0.25
    });
}
// resetknop
const hardResetBtn = document.getElementById('hard-reset-btn');
if (hardResetBtn) {
    hardResetBtn.addEventListener('click', () => {
        resetGame();
        hardResetBtn.style.transform = "rotate(-180deg)";
        hardResetBtn.style.transition = "transform 0.5s ease";
        setTimeout(() => { hardResetBtn.style.transform = "none"; }, 500);
    });
}

// auto reset na timer
let inactivityTimer;
const INACTIVITY_LIMIT = 2 * 60 * 1000;

function resetInactivityTimer() {
    clearTimeout(inactivityTimer);
    inactivityTimer = setTimeout(() => {
        console.log("2 minuten geen interactie. Spel wordt gereset voor volgende leerling/gebruiker.");
        resetGame();
    }, INACTIVITY_LIMIT);
}

['touchstart', 'click', 'mousemove', 'keypress', 'scroll', 'wheel'].forEach(evt => {
    document.addEventListener(evt, resetInactivityTimer, { passive: true });
});

resetInactivityTimer();

// =========================================================================
// Minigame Logic
// =========================================================================
const minigameContainer = document.getElementById('minigame-container');
const minigameContent = document.getElementById('minigame-content');
const closeMinigameBtn = document.getElementById('close-minigame-btn');

if (closeMinigameBtn) {
    closeMinigameBtn.addEventListener('click', closeMinigame);
}

function startMinigame(gameId) {
    minigameContainer.classList.remove('d-none');
    minigameContent.innerHTML = ''; // Clear previous

    if (gameId === 'opgraving') {
        initOpgravingGame();
    } else if (gameId === 'klokbeker') {
        initKlokbekerGame();
    } else if (gameId === 'dieren') {
        initDierenGame();
    }
}

function closeMinigame() {
    minigameContainer.classList.add('d-none');
    minigameContent.innerHTML = '';
}

function finishMinigame() {
    // Check if the user beat an active game hotspot
    if (activeGameHotspotId) {
        markHotspotAsDiscovered(activeGameHotspotId, null);
        activeGameHotspotId = null; // Clear so we don't spam it
    }

    minigamesCompleted++;
    if (typeof confetti === 'function') {
        confetti({
            particleCount: 150,
            spread: 90,
            origin: { y: 0.6 }
        });
    }

    // Create an overlay celebration message
    const celeb = document.createElement('div');
    celeb.style.position = 'fixed';
    celeb.style.top = '50%';
    celeb.style.left = '50%';
    celeb.style.transform = 'translate(-50%, -50%)';
    celeb.style.backgroundColor = 'var(--gold-yellow)';
    celeb.style.color = '#fff';
    celeb.style.padding = '2rem';
    celeb.style.borderRadius = '20px';
    celeb.style.fontSize = '2rem';
    celeb.style.fontWeight = '900';
    celeb.style.boxShadow = '0 10px 30px rgba(0,0,0,0.5)';
    celeb.style.zIndex = '3000';
    celeb.style.textAlign = 'center';
    celeb.innerHTML = `🎉 Gefeliciteerd! 🎉<br><span style="font-size:1.5rem">Je hebt ${minigamesCompleted} van de ${totalMinigames} minigames voltooid!</span>`;

    document.body.appendChild(celeb);

    setTimeout(() => {
        celeb.remove();
        closeMinigame();
    }, 4000);
}

