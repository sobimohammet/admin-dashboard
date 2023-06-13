document.addEventListener('DOMContentLoaded', init);
let menuIcon = document.querySelector('.search');
let nav = document.querySelector('.nav');
let close = document.querySelector('.close');

function init() {
    let query = window.matchMedia("(max-width:500px)");

    if (query.matches) {
        menuIcon.addEventListener('click', () => {
            if (nav.style.display == 'none') {
                nav.style.display = 'block';
                menuIcon.style.color = 'white';
            } else {
                nav.style.display = 'none';
                menuIcon.style.color = 'black';
            }
        })
    }
}