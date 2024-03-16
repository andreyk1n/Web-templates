function openModal() {
  document.getElementById('myModal').style.display = 'block';
}


function openModalAfter30Seconds() {
  setTimeout(openModal, 30000); // 30 seconds
}


function openModalAfter300Seconds() {
  setInterval(openModal, 300000); // 300 seconds - repeated modal
}


document.getElementById('openModal').addEventListener('click', openModal);


document.querySelector('.close').addEventListener('click', function() {
  document.getElementById('myModal').style.display = 'none';
});


window.addEventListener('click', function(event) {
  var modal = document.getElementById('myModal');
  if (event.target == modal) {
    modal.style.display = 'none';
  }
});


openModalAfter30Seconds();
openModalAfter300Seconds();
