const starsContainer = document.querySelector('.stars');
for (let i = 0; i < 200; i++) { // Liczba gwiazd
    const star = document.createElement('div');
    star.classList.add('star');
    star.style.top = Math.random() * 100 + '%'; // Losowa pozycja
    star.style.left = Math.random() * 100 + '%';
    star.style.animationDelay = Math.random() * 2 + 's'; // Losowy czas opóźnienia
    starsContainer.appendChild(star);
}
