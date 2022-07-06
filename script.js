const btnMobile = document.getElementById('btnMobile')
const nav = document.getElementById('navigation')

function toggleMenu(event) {
    if(event.type === 'touchstart'){
        event.preventDefault();
    }
    nav.classList.toggle('active');
}

btnMobile.addEventListener('click', toggleMenu);
btnMobile.addEventListener('touchstart', toggleMenu);