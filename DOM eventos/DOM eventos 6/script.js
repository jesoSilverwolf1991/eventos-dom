document.addEventListener('DOMContentLoaded', function () {
  const draggableElement = document.getElementById('draggableElement');

  draggableElement.addEventListener('dragstart', function (e) {
    e.dataTransfer.setData('text/plain', ''); 
    draggableElement.classList.add('dragging');
  });

  draggableElement.addEventListener('dragend', function () {
    draggableElement.classList.remove('dragging');
  });

  document.body.addEventListener('dragover', function (e) {
    e.preventDefault(); 
  });

  document.body.addEventListener('drop', function (e) {
    e.preventDefault();

    const dropX = e.clientX;
    const dropY = e.clientY;

    draggableElement.style.left = `${dropX - draggableElement.offsetWidth / 2}px`;
    draggableElement.style.top = `${dropY - draggableElement.offsetHeight / 2}px`;
  });
});
