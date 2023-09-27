const btn = document.getElementById('btn-hamburguer');
const toggleMenu = document.getElementById('hamburguer');
const menu = document.getElementById('nav');

function showMenu() {
    btn.classList.toggle('active');
    toggleMenu.classList.toggle('active');
    menu.classList.toggle('active');
}

btn.addEventListener('click', showMenu);