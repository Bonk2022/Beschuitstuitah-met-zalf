function initDierenGame() {
    // Hide the standard minigame container because we will play this on the map itself
    minigameContainer.classList.add('d-none');

    // We create a floating UI for the Map Tour
    const tourDiv = document.createElement('div');
    tourDiv.id = 'dieren-tour-ui';
    tourDiv.style.position = 'fixed';
    tourDiv.style.bottom = '20px';
    tourDiv.style.left = '50%';
    tourDiv.style.transform = 'translateX(-50%)';
    tourDiv.style.backgroundColor = 'var(--primary-brown)';
    tourDiv.style.color = '#fff';
    tourDiv.style.padding = '15px 30px';
    tourDiv.style.borderRadius = '30px';
    tourDiv.style.display = 'flex';
    tourDiv.style.alignItems = 'center';
    tourDiv.style.gap = '20px';
    tourDiv.style.boxShadow = '0 10px 30px rgba(0,0,0,0.5)';
    tourDiv.style.zIndex = '3000';
    tourDiv.style.border = '4px solid var(--gold-yellow)';

    // Animal locations on the 4K map
    // Eekhoorn: y: 951, x: 194
    // Vos: y: 335, x: 1563
    // Egeltjes: y: 235, x: 890
    // Adder: y: 546, x: 1272
    // Schapen: y: 1003, x: 1026
    const animalLocations = [
        { name: "Eekhoorn (In de eikenboom)", lat: 951, lng: 194 },
        { name: "Vos (Voorgrond struiken)", lat: 335, lng: 1563 },
        { name: "Egeltjes (Tussen de paddestoelen)", lat: 235, lng: 890 },
        { name: "Adder (Bij de kinderen)", lat: 546, lng: 1272 },
        { name: "Schapen (In de verte)", lat: 1003, lng: 1026 }
    ];

    let currentIndex = 0;

    const prevBtn = document.createElement('button');
    prevBtn.innerHTML = '⬅️ Vorige';
    prevBtn.className = 'btn btn-light fw-bold rounded-pill';

    const nextBtn = document.createElement('button');
    nextBtn.innerHTML = 'Volgende ➡️';
    nextBtn.className = 'btn btn-light fw-bold rounded-pill';

    const closeTourBtn = document.createElement('button');
    closeTourBtn.innerHTML = 'Sluiten ✖';
    closeTourBtn.className = 'btn btn-danger fw-bold rounded-pill shadow';
    closeTourBtn.style.position = 'fixed';
    closeTourBtn.style.top = '20px';
    closeTourBtn.style.right = '20px';
    closeTourBtn.style.zIndex = '3000';

    const infoText = document.createElement('div');
    infoText.className = 'fs-5 fw-bold';
    infoText.innerText = `Dier 1 van 5: ${animalLocations[0].name}`;

    const infoBtn = document.createElement('button');
    infoBtn.className = 'btn btn-info btn-sm rounded-circle fw-bold ms-2';
    infoBtn.innerText = 'ℹ️';
    infoBtn.onclick = () => {
        alert("De natuur op de Veluwe was in de bronstijd echt ontzettend wild rond de grafheuvels en boerderijen! De jagers beschermden het land voor wilde beren en zwijnen. Reis mee over de paden en zoek waar de wilde dieren zich schuil hielden in deze grote speurtocht.");
    };

    tourDiv.appendChild(prevBtn);
    tourDiv.appendChild(infoText);
    tourDiv.appendChild(infoBtn);
    tourDiv.appendChild(nextBtn);

    document.body.appendChild(tourDiv);
    document.body.appendChild(closeTourBtn);

    function flyToCurrentAnimal() {
        infoText.innerText = `Dier ${currentIndex + 1} van ${animalLocations.length}: ${animalLocations[currentIndex].name}`;

        // Use the global 'map' object from script.js
        if (typeof map !== 'undefined') {
            map.flyTo([animalLocations[currentIndex].lat, animalLocations[currentIndex].lng], 1.5, {
                duration: 1.5,
                easeLinearity: 0.25
            });
        }
    }

    // Touch swiping logic on the tourDiv
    let touchStartX = 0;
    let touchEndX = 0;

    tourDiv.addEventListener('touchstart', e => {
        touchStartX = e.changedTouches[0].screenX;
    }, { passive: true });

    tourDiv.addEventListener('touchend', e => {
        touchEndX = e.changedTouches[0].screenX;
        handleSwipe();
    }, { passive: true });

    function handleSwipe() {
        if (touchEndX < touchStartX - 50) {
            // Swiped left - next
            goNext();
        }
        if (touchEndX > touchStartX + 50) {
            // Swiped right - prev
            goPrev();
        }
    }

    function goNext() {
        if (currentIndex < animalLocations.length - 1) {
            currentIndex++;
            flyToCurrentAnimal();
        } else {
            // Reached the end!
            endTour();
        }
    }

    function goPrev() {
        if (currentIndex > 0) {
            currentIndex--;
            flyToCurrentAnimal();
        }
    }

    prevBtn.addEventListener('click', goPrev);
    nextBtn.addEventListener('click', goNext);

    closeTourBtn.addEventListener('click', () => {
        tourDiv.remove();
        closeTourBtn.remove();
        // zoom back to bounds
        map.flyToBounds([[0, 0], [1357, 1920]], { duration: 1.5 });
    });

    function endTour() {
        tourDiv.remove();
        closeTourBtn.remove();
        map.flyToBounds([[0, 0], [1357, 1920]], { duration: 1.5 });
        setTimeout(() => {
            finishMinigame(); // the global win function
        }, 1500);
    }

    // Start tour
    flyToCurrentAnimal();
}
