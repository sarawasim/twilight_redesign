/* Initialize parameters */
let options = {};
let ticketCount = 2;
const elem = document.querySelector('.tabs');
const instance = M.Tabs.init(elem, options);
const form = document.getElementById('payment-form');
const cancelBtn = document.getElementById('cancel');

/* Event Listeners */
form.addEventListener('submit', submit);
cancelBtn.addEventListener('click', returnHome);
document.addEventListener('DOMContentLoaded', initialize);


/**
 * Initializes bookings page to use materialize
 */
function initialize () {
	const elems = document.querySelectorAll('select');
	M.FormSelect.init(elems, options);
}


/**
 * Resets the payment form on submission and redirects user to main page
 * @param {event} e - form event
 */
function submit(e) {
	e.preventDefault();
	let toastHTML = '<span>Ticket Booked! Please check your email for ticket confirmation.</span>';
	form.reset();
	M.updateTextFields();
	M.toast({ html: toastHTML, displayLength: 2000, completeCallback: returnHome });
}

/**
 * Returns user to home page
 */
function returnHome() {
	window.open('../index.html', '_self');
}

function verifyTicketCount(){

}














/**
 * @Megan - You can do form validation here
 */
// const email = document.getElementById('email');
// const cardNumber = document.getElementById('card-number');
// const expiry = document.getElementById('expiry');
// const CVC = document.getElementById('cvc');
// const countryCode = document.getElementById('country');
// const postalCode = document.getElementById('postal-code');

