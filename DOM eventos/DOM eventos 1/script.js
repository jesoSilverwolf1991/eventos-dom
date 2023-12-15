document.addEventListener('DOMContentLoaded', function () {
    const cambiarColorBtn = document.getElementById('cambiarColorBtn');
    const elementoCambiante = document.getElementById('elementoCambiante');
  
    cambiarColorBtn.addEventListener('click', function () {
     
      const nuevoColor = '#' + Math.floor(Math.random()*16777215).toString(16);
  
      
      elementoCambiante.style.backgroundColor = nuevoColor;
    });
  });
  