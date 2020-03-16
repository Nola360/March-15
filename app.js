function animatedForm() {
  const arrows = document.querySelectorAll('.fa-arrow-down');

  arrows.forEach(arrow => {
    arrow.addEventListener('click', () => {
      const input = arrow.previousElementSibling;
      const parent = arrow.parentElement;
      const nextForm = parent.nextElementSibling;

      //Check for validation
      if (input.type === 'text' && validateUser(input)) {
        nextSlide(parent, nextForm);
      } else if (input.type === 'email' && validateEmail(input)) {
        nextSlide(parent, nextForm);
      } else if (input.type === 'password' && validateUser(input)) {
        nextSlide(parent, nextForm);
      } else {
        parent.style.animation = 'shake 0.5s ease';
      }

      //Get rid of animation
      parent.addEventListener('animationend', () => {
        parent.style.animation = '';
      })
    })
  })
}

//this function takes in a user input
function validateUser(user) {
  if (user.value.length < 6) {
    console.log('Not enough info');
    error('rgb(189,87,87)');
  } else {
    error('rgb 87. 189, 130');
    return true;
  }
}

function validateEmail(email) {
  const validation = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; /*regex*/
  if (validation.test(email.value)) {
    error('rgb 87. 189, 130');
    return true;
  } else {
    error('rgb(189,87,87)');
  }
}

function nextSlide(parent, nextForm) {
  parent.classList.add('inactive');
  parent.classList.remove('active');
  nextForm.classList.add('active'); /* Next form transitions in*/

}

function error(color) {
  document.body.style.backgroundColor = color;
}


animatedForm();
