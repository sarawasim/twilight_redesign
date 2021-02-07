/**
 * Show and hide COVID-19 precautions
 */
// Get the modal and banner
const modal = document.getElementById('modal-content');
const banner = document.getElementById('covid-19-banner');

const readMoreBtn = document.getElementById('btn-read-more');

const closeBanner = document.getElementsByClassName('close-banner')[0];
const exitModal = document.getElementsByClassName('close-modal')[0];

// show modal
readMoreBtn.onclick = function () {
  modal.style.display = 'block';
  console.log('Clicked!!');
};

// readMoreBtn.addEventListener('click');

// close the modal
exitModal.onclick = function () {
  modal.style.display = 'none';
};

window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = 'none';
  }
};

// hide COVID banner
closeBanner.onclick = function () {
  banner.style.display = 'none';
};
