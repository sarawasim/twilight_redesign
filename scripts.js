const { validate } = require('postal-codes-js');

var elem = document.querySelector('.tabs');
var options = {};
var instance = M.Tabs.init(elem, options);

// For Form selects
document.addEventListener('DOMContentLoaded', function () {
  var elems = document.querySelectorAll('select');
  var instances = M.FormSelect.init(elems, options);
});

/**
 * @Megan - You can do form validation here
 */

const email = document.getElementById('email');
const cardNumber = document.getElementById('card-number');
const expiry = document.getElementById('expiry');
const CVC = document.getElementById('cvc');
const countryCode = document.getElementById('country');
const postalCode = document.getElementById('postal-code');

const form = document.getElementById('payment-form');
form.onsubmit = submit;

function submit(e) {
  e.preventDefault();
  console.log('Submitted Form ✔️');
}
