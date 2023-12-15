document.addEventListener("DOMContentLoaded", function() {
    const timerElement = document.getElementById('timer');
  
   
    let seconds = 10;
  
    function updateTimer() {
      timerElement.textContent = formatTime(seconds);
      if (seconds === 0) {
        
        alert("¡Tiempo agotado!");
        clearInterval(timerInterval);
      } else {
        seconds--;
      }
    }
  
    function formatTime(seconds) {
     
      const minutes = Math.floor(seconds / 60);
      const remainingSeconds = seconds % 60;
      return `${String(minutes).padStart(2, '0')}:${String(remainingSeconds).padStart(2, '0')}`;
    }
  
    
    const timerInterval = setInterval(updateTimer, 1000);
  });
  