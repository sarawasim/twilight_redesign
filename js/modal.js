/**
 * Handles displaying anf hiding COVID-19 related precautions
 */


// Get the modal and banner
const modal = document.querySelector('.modal');
const banner = document.getElementById('covid-19-banner');

const readMoreBtn = document.getElementById('btn-read-more');

const closeBanner = document.getElementsByClassName('close-banner')[0];
const exitModal = document.getElementsByClassName('close-modal')[0];


/**
 * Shows the COVID-19 modal
 */
readMoreBtn.onclick = function () {
	modal.style.display = 'block';
};

/**
 * Closes the COVID-19 modal
 */
exitModal.onclick = function () {
	modal.style.display = 'none';
};

/**
 * Closes modal when user clicks anywhere outside modal, excluding the 'Read More' button.
 * @param {event} event - action or occurrence 
 */
window.onclick = function (event) {
	if (event.target == modal) {
		modal.style.display = 'none';
	}
};

/**
 * Closes the COVID-19 banner
 */
closeBanner.onclick = function () {
	banner.style.display = 'none';
};
