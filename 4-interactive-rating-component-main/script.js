const rating = document.querySelector('.rating');
const confirmation = document.querySelector('.confirmation');
const submitButton = document.querySelector('.btn-submit')
const userRating = document.querySelector('.user-rating');
const rateButtons = document.querySelectorAll('.rating-scale button')

rateButtons.forEach((rateButton) => {
  rateButton.addEventListener('click', () => {
    let rate = rateButton.innerHTML;
    userRating.innerHTML = rate;
  })
})


function showConfirmation() {
  let ratingVisible = rating.getAttribute('data-visible');
  let confirmationVisible = rating.getAttribute('data-visible');
  if(ratingVisible === 'true') {
    rating.setAttribute('data-visible', false);
    confirmation.setAttribute('data-visible', true);
  } else {
    rating.setAttribute('data-visible', true);
    confirmation.setAttribute('data-visible', false);
  }
}




submitButton.addEventListener('click', showConfirmation);

