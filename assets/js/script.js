let navbar = document.querySelector('#navbar');
let hamburger = document.querySelector('#hamburger');

let main = document.querySelector('main');
let navbarheigth = navbar.getBoundingClientRect().height;//obtengo altura de barra de navegación
let breakpoint = main.offsetTop - navbarheigth; //el tope de main arriba - la altura de la barra de navegacion (cuanto el main alcanza el tope de la pagina)
let windowPos;
let isFixed = false;



//Mostrar y ocultar barra de navegacion con la hamburger
hamburger.addEventListener('click', () => {
    navbar.classList.toggle('open');
})



//Fijar barra de navegación arriba 
function uptdatePos() {
    windowPos = window.scrollY;//monitorea posicion de la ventana
}

function onScroll() {
    uptdatePos();

    if (windowPos >= breakpoint) {
        navbar.classList.remove('open');

        navbar.classList.add('navbar-fixed');
        main.style.cssText = 'margin-top: ' + navbarheigth + 'px;';
    } else if (windowPos < breakpoint) {
        navbar.classList.remove('navbar-fixed');
        main.style.cssText = 'margin-top: ' + 0;
    }
    console.log(windowPos, breakpoint, main.offsetTop, navbarheigth);
}
document.addEventListener('scroll', onScroll);

