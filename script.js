const hotspotsData = [
    {  
        id: 1,
        y: 450,
        x: 280,
        title: "Het Zwaard van Bergsham",
        text: "Tijdens de prehistorie werden bijzondere voorwerpen, zoals dit stenen of bronzen zwaard, meegegeven in het graf. Dit was bedoeld als offer voor de goden of om de doden te beschermen in het hiernamaals. Kun jij je voorstellen hoe zwaar het was om zoiets te maken?"
    },
    {
        id: 2,
        y: 860,
        x: 1450,
        title: "De Klokbeker",
        text: "Kijk goed naar deze pot! Hij heeft de vorm van een omgekeerde klok. Deze prachtige bekers van klei werden versierd met patronen. Ze werden gedronken tijdens belangrijke feesten of met veel respect in het graf geplaatst bij bijzondere mensen."
    },
    {
        id: 3,
        y: 613,
        x: 759,
        title: "Stoomkuilen",
        text: "Wat gebeurde hier in het zand? In deze ondiepe kuilen werden gloeiend hete stenen gelegd waar ze water overheen gooiden. De hete stoom die daarvan af kwam werd gebruikt voor spirituele reiniging, een soort prehistorische sauna voor rituelen!"
    },
    {
        id: 4,
        y: 894,
        x: 941,
        title: "Het Vroege Landschap",
        text: "Kijk eens om de grafheuvel heen. De Veluwe zag er duizenden jaren geleden heel anders uit! Er waren veel open plekken en paars bloeiende heidevelden, doordat de eerste boeren en hun dieren het woud langzaam openmaakten."
    },
    {
        id: 5,
        y: 500,
        x: 1450,
        title: "Samen Bouwen",
        text: "Een grafheuvel werd niet in je eentje gebouwd. Het was een reusachtig project! De hele familie en soms wel het hele dorp hielp mee. Ze stapelden manden vol zand en heideplaggen (stukken grond met gras) netjes op elkaar."
    },
    {
        id: 6,
        y: 450,
        x: 550,
        title: "Kleding van Toen",
        text: "Mensen in de prehistorie konden niet naar de winkel. Ze maakten hun eigen kleding van dierenhuiden of geweven schapenwol. De kleding moest niet alleen warm zijn, maar ook heel stevig zodat ze niet scheurden tijdens het jagen of werken."
    },
    {
        id: 7,
        y: 920,
        x: 520,
        title: "Vuur Maken",
        text: "Vuur was van levensbelang! Het werd gebruikt om eten te koken, warm te blijven, en om enge, wilde dieren op afstand te houden in de donkere nacht. Vuur maakten de mensen door stenen tegen elkaar te slaan en vonkjes op te vangen."
    },
    {
        id: 8,
        y: 1000,
        x: 1500,
        title: "Het Begrafenisritueel",
        text: "Tijdens het begraven van de doden was er waarschijnlijk muziek en dans. Mensen voerden speciale, magische rituelen uit om afscheid te nemen en de goden of geesten goed te stemmen. Zang en het offeren van eten speelden een grote rol."
    },
    {
        id: 9,
        y: 700,
        x: 450,
        title: "Vuursteen Bewerking",
        text: "Lang voordat mensen brons of ijzer ontdekten, maakten ze gereedschap van vuursteen. Met veel geduld sloegen ze de stenen kapot totdat er vlijmscherpe randjes ontstonden. Zo kregen ze messen, pijlen en schrapers voor dierenhuiden."
    },
    {
        id: 10,
        y: 350,
        x: 1100,
        title: "Sporen in het Zand",
        text: "Hoe weten archeologen dít allemaal? Ze vinden deze grafheuvels terug door heel goed te kijken naar de kleuren in het zand. Waar vroeger houten palen in de grond stonden die daarna wegrotten, ziet het zand er nu een stuk donkerder uit!"
    }
   
];

// Status hotspots
let foundCount = 0;
const totalCount = hotspotsData.length;
const foundHotspots = new Set(); // Slaat de id's op van ontdekte locaties

// Leaflet initialisatie
const map = L.map('map', {
    crs: L.CRS.Simple,
    minZoom: -1.5,    
    maxZoom: 2,      
    zoomDelta: 0.5,   
    zoomSnap: 0.5,
    attributionControl: false 
});

// Verplaats de zoomknoppen naar rechts onder
map.zoomControl.setPosition('bottomright');

const imgWidth = 1920;
const imgHeight = 1357;
const imageBounds = [[0, 0], [imgHeight, imgWidth]];

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


// Hotspot logica
function handleHotspotClick(data, originalEvent) {
    const isNewDiscover = !foundHotspots.has(data.id);

    // Nieuwe hotspot
    if (isNewDiscover) {
        foundHotspots.add(data.id);
        foundCount++;
        updateProgress();
        const iconDiv = document.getElementById(`marker-icon-${data.id}`);
        if (iconDiv) {
            iconDiv.classList.add('found');
        }

        // Speciaal effectje
        let clientX = originalEvent.clientX;
        let clientY = originalEvent.clientY;
        if (originalEvent.touches && originalEvent.touches.length > 0) {
            clientX = originalEvent.touches[0].clientX;
            clientY = originalEvent.touches[0].clientY;
        }
        createParticles(clientX, clientY);
    }

    infoTitle.innerText = data.title;
    infoText.innerText = data.text;

    infoPanel.show();
}

// UI voortgang
function updateProgress() {
    progressText.innerText = `${foundCount} van de ${totalCount} ontdekkingen gevonden`;

    const percentage = (foundCount / totalCount) * 100;
    progressBar.style.width = `${percentage}%`;
    progressBar.setAttribute('aria-valuenow', foundCount);

    if (foundCount === totalCount) {
        progressText.innerText = `🎉 Je hebt alles ontdekt! Geweldig!`;
        progressText.classList.add('text-success');
        progressBar.classList.remove('bg-warning');
        progressBar.classList.add('bg-success');
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

map.on('click', function (e) {
    console.log(`💡 Coördinaten gevonden! x: ${Math.round(e.latlng.lng)}, y: ${Math.round(e.latlng.lat)}`);
});

function resetGame() {
    foundCount = 0;
    foundHotspots.clear();
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
