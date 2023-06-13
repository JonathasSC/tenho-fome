document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('.form');
    form.addEventListener('submit', function(event) {
      event.preventDefault();
      alert('The data has been received');
    });
  });