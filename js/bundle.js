(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
var elem = document.querySelector('.tabs');
var options = {};
var instance = M.Tabs.init(elem, options);

// For Form selects
document.addEventListener('DOMContentLoaded', function () {
  var elems = document.querySelectorAll('select');
  M.FormSelect.init(elems, options);
});

const form = document.getElementById('payment-form');

form.addEventListener("submit", submit);
document.getElementById('cancel').addEventListener("click", returnHome);


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
  window.open('../index.html', "_self");
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


/**
 * Show and hide COVID-19 precautions
 */
// Get the modal and banner
const modal = document.getElementById("modal-content");
const banner = document.getElementById("covid-19-banner");

const readMore = document.getElementById("btn-read-more");

const closeBanner = document.getElementsByClassName("close-banner")[0];
const exitModal = document.getElementsByClassName("close-modal")[0];

// show modal
readMore.onclick = function() {
  modal.style.display = "block";
}

// close the modal
exitModal.onclick = function() {
  modal.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

// hide COVID banner
closeBanner.onclick = function() {
  banner.style.display = "none";
}
},{}]},{},[1]);
