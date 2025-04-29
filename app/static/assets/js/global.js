const bsOffcanvas = new bootstrap.Offcanvas('#offcanvas');
const menu = document.getElementById('menu');

function menuClicked() {
    bsOffcanvas.toggle();
    if (menu.classList.contains('active')) {
        menu.classList.remove('active');
    }
    else {
        menu.classList.add('active');
    }
}