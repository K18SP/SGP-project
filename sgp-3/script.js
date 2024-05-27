function rate(element) {
    var stars = element.parentNode.getElementsByClassName('star');  
    var index = Array.prototype.indexOf.call(stars, element);
    for (var i = 0; i <= index; i++) {
        stars[i].classList.add('active');
    }
    for (var j = index + 1; j < stars.length; j++) {
        stars[j].classList.remove('active');
    }
  }

  document.querySelectorAll('.explore-btn').forEach(button => {
    button.addEventListener('click', () => {
      // Redirect to the root URL of your React application
      window.location.href = 'http://localhost:3000/sgp';
    });
  });