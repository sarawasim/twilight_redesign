var elem = document.querySelector('.tabs');
var options = {};
var instance = M.Tabs.init(elem, options);

// For Form selects .....
document.addEventListener('DOMContentLoaded', function () {
	var elems = document.querySelectorAll('select');
	M.FormSelect.init(elems, options);
});

const form = document.getElementById('payment-form');

form.addEventListener('submit', submit);
document.getElementById('cancel').addEventListener('click', returnHome);


/**
 * Resets the payment form on submission and redirects user to main page
 * @param {event} e - form event
 */
function submit(e) {
	e.preventDefault();
	var toastHTML = '<span>Ticket Booked! Please check your email for ticket confirmation.</span>';
	form.reset();
	M.updateTextFields();
	M.toast({ html: toastHTML, displayLength: 2000, completeCallback: returnHome });
}

/**
 * Returns user to home page
 */
function returnHome(){
	window.open('../index.html', '_self');
}


/**
 * @Megan - You can do form validation here
 */
const email = document.getElementById('email');
const cardNumber = document.getElementById('card-number');
const expiry = document.getElementById('expiry');
const CVC = document.getElementById('cvc');
const countryCode = document.getElementById('country');
const postalCode = document.getElementById('postal-code');


