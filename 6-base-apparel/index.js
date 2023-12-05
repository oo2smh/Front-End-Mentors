const emailInput = document.querySelector(".input--email");
const errorMessage = document.querySelector(".error-message")
const iconError = document.querySelector(".icon-error");
const submitBtn = document.querySelector('.btn--submit');

submitBtn.addEventListener('click', (e) => {

  if(!emailInput.value.match(/^[A-Za-z\._\-0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/) || emailInput.value === 'null' || emailInput.value === '') {
    errorMessage.classList.remove('hidden');
    iconError.classList.remove('hidden');
    emailInput.classList.toggle('invalid');
    e.preventDefault();
  } else {
    alert('Your email has been submitted');
  }

})

