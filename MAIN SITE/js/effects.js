
/* -----------------------------------------------
/* Author : Oscar Omegna
/* ----------------------------------------------- */


var overlay = document.getElementById('overlay');
var closeMenu = document.getElementById('close-menu');

document.getElementById('open-menu').addEventListener('click', function () {
    overlay.classList.add('show-menu')

});

document.getElementById('close-menu').addEventListener('click', function () {
    overlay.classList.remove('show-menu')

});