document.addEventListener('DOMContentLoaded', function () {

    var miElemento = document.getElementById('miElemento');

   
    miElemento.addEventListener('click', function () {
        
        miElemento.classList.toggle('clickeado');
    });
});