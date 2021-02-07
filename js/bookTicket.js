/**
 * Checks if tickets count has been initialized
 * If there are no tickets left then disable book now button
 */
window.addEventListener('load', () => {
	if(sessionStorage.getItem('ticketCount') === null) {
		sessionStorage.setItem('ticketCount', '3');
	} else {
		let ticketCount = parseInt(sessionStorage.getItem('ticketCount'), 10);
		if(ticketCount === 0 ) disableBookButton();
	}
});


/**
 * Disables book now button if tickets are sold out
 */
function disableBookButton(){
	const bookingBtn = document.getElementById('bookTicketButton');
	bookingBtn.innerText  = 'SOLD OUT';
	bookingBtn.disabled = true;
}