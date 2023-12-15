document.addEventListener("DOMContentLoaded", function() {
    const body = document.body;
  
    document.addEventListener('keydown', function(event) {
      handleKeyPress(event.key);
    });
  
    document.addEventListener('keyup', function() {
      resetBackgroundColor();
    });
  
    function handleKeyPress(key) {
      switch (key.toLowerCase()) {
        case 'a':
          changeBackgroundColor('#117A65 '); 
          break;
        case 'b':
          changeBackgroundColor('#1F618D'); 
          break;
        case 'c':
          changeBackgroundColor('#6C3483'); 
          break;
        default:
          break;
      }
    }
  
    function changeBackgroundColor(color) {
      body.style.backgroundColor = color;
    }
  
    function resetBackgroundColor() {
      body.style.backgroundColor = '';
    }
  });
  