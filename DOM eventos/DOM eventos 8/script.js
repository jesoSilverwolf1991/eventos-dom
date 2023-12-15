document.addEventListener("DOMContentLoaded", function() {
    const taskList = document.getElementById('taskList');
  
    taskList.addEventListener('change', function(event) {
      if (event.target.type === 'checkbox') {
        const listItem = event.target.closest('li');
        listItem.classList.toggle('completed');
      }
    });
  });