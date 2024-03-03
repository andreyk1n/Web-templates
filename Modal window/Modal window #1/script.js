document.getElementById('openModal').addEventListener('click', function() {
    document.getElementById('myModal').style.display = 'block';
  });
  
  document.querySelector('.close').addEventListener('click', function() {
    document.getElementById('myModal').style.display = 'none';
  });
  
  window.addEventListener('click', function(event) {
    var modal = document.getElementById('myModal');
    if (event.target == modal) {
      modal.style.display = 'none';
    }
  });
  