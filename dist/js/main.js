// deux constantes pour le menu
const humberger = document.querySelector('.menu-btn__burger');
const btn = document.querySelector('.menu-btn__burger__btn');
// constante pour le checkbox
const btnNavCheck = document.querySelector('#nav-checked');

// variables contenant les liens du navbar
let nav_links = document.querySelectorAll('nav a');


nav_links.forEach(element => {
    element.addEventListener('click', show_menu);
});

humberger.addEventListener('click', show_menu);

function show_menu() {

    console.log(window.innerWidth);
    if (window.innerWidth < 1200) {
        btn.classList.toggle('open');
        if (btnNavCheck.checked) {
            btnNavCheck.checked = false;
        } else {
            btnNavCheck.checked = true;
        }
        console.log(btnNavCheck.checked)
    }
}

// var pour le hover du bouton envoyer
/* const btnEnvoyer = document.querySelector('.button');

btnEnvoyer.onmousemove = function (e) {
    const x = e.clientX - btnEnvoyer.offsetLeft;
    const y = e.clientY - btnEnvoyer.offsetTop;

    document.body.style.setProperty('--x', x + 'px');
    document.body.style.setProperty('--y', y + 'px');
} */

const btnTheme = document.getElementById('theme');

btnTheme.addEventListener('click', function (event) {
    var icon = btnTheme.children[0];
    icon.classList.toggle("fa-moon");
    icon.classList.toggle("fa-sun");

    //var lamp = document.getElementById('lamp');
    var texte = document.querySelectorAll('.temoinage_texte');
    var image = document.getElementById('looking');

    var style = document.documentElement.style;
    if (icon.classList.contains('fa-sun')) {
        //image.src = "dist/img/scope-dark.png";
        //lamp.src = "dist/img/Lamp-dark.png";
        texte.forEach(element => element.style.color = "#FFFFFF");
        style.setProperty('--light-first', '#457B9D');
        style.setProperty('--light-second', '#42A1DC');
        style.setProperty('--light-third', '#0C486F');
        style.setProperty('--dark-first', '#F1FAEE');
        style.setProperty('--dark-second', '#FCFCFC');
        style.setProperty('--dark-third', '#FFFFFF');
        document.querySelector('body').classList.toggle('dark');
    } else {

        document.querySelector('body').classList.toggle('dark');
        // image.src = "dist/img/scope-light.png";
        texte.forEach(element => element.style.color = "#595260");
        //lamp.src = "dist/img/Lamp-light.png";
        style.setProperty('--light-first', '#F1FAEE');
        style.setProperty('--light-second', '#FCFCFC');
        style.setProperty('--light-third', '#FFFFFF');
        style.setProperty('--dark-first', '#457B9D');
        style.setProperty('--dark-second', '#42A1DC');
        style.setProperty('--dark-third', '#0C486F');
    }


});