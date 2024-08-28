document.addEventListener('DOMContentLoaded', function () {
    const cards = document.querySelectorAll('.card');

    cards.forEach((card) => {
        const cardInner = document.createElement('div');
        cardInner.className = 'card-inner';

        const cardFront = document.createElement('div');
        cardFront.className = 'card-front';
        cardFront.innerHTML = `<img src="${card.querySelector('img').src}" alt="Tarot Card Image">`;

        const cardBack = document.createElement('div');
        cardBack.className = 'card-back';
        cardBack.textContent = card.getAttribute('data-text');

        cardInner.appendChild(cardFront);
        cardInner.appendChild(cardBack);
        card.innerHTML = ''; // Clear the original content
        card.appendChild(cardInner);

        card.addEventListener('click', function () {
            this.classList.toggle('flipped');
        });
    });
});
