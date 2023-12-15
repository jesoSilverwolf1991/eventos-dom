
$(document).ready(function(){
    $('#galeria').carousel();
  });
  
  
  document.addEventListener('DOMContentLoaded', function () {
    const galeria = document.getElementById('galeria');
  
    document.querySelector('.carousel-control-prev').addEventListener('click', function() {
      galeria.carousel('prev');
    });
  
    document.querySelector('.carousel-control-next').addEventListener('click', function() {
      galeria.carousel('next');
    });
  });
  