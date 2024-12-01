const starsContainer = document.querySelector('.stars');
for (let i = 0; i < 200; i++) { 
    const star = document.createElement('div');
    star.classList.add('star');
    star.style.top = Math.random() * 100 + '%'; 
    star.style.left = Math.random() * 100 + '%';
    star.style.animationDelay = Math.random() * 2 + 's'; 
    starsContainer.appendChild(star);
}
