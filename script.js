document.addEventListener('DOMContentLoaded', function () {
    const cards = document.querySelectorAll('.card');

    cards.forEach((card) => {
        card.addEventListener('click', function () {
            const text = this.getAttribute('data-text');

            if (this.classList.contains('flipped')) {
                this.innerHTML = `<img src="${this.getAttribute('data-image')}" alt="Tarot Card Image">`;
                this.classList.remove('flipped');
            } else {
                this.innerHTML = text;
                this.classList.add('flipped');
            }
        });

        // Store the card image source in a data attribute
        card.setAttribute('data-image', card.querySelector('img').src);
    });
});
