/* Function to check email validity */

function emailIsValid(email) {
  const validFormat = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  if (!validFormat) {
    alert('Please enter a valid email.');
    return false;
  }
  return true;
}

console.log(emailIsValid('megan@l.com'));

/* Function to check card validity */
const acceptedCards = {
  amEx: /^(?:3[47][0-9]{13})$/,
  visa: /^(?:4[0-9]{12}(?:[0-9]{3})?)$/,
  masterCard: /^(?:5[1-5][0-9]{14})$/,
  jcb: /^(?:(?:2131|1800|35\d{3})\d{11})$/,
};

let userCardType;

function cardIsValid(cardNum) {
  // eslint-disable-next-line no-restricted-syntax
  for (const cardType in acceptedCards) {
    if (cardNum.search(cardType) !== -1) {
      userCardType = acceptedCards.keys(cardType).find((key) => cardType[key] === value);
      console.log(userCardType);
      return true;
    }
  }
}
// cardIsValid(371612019985236);

/* Function to check expiry date validity */

function expDateIsValid(date) {
  // receives 'MM / YY' input
  const expMM = parseInt(date.split('/')[0], 10) - 1;
  const expYYYY = parseInt(`20${date.split('/')[1]}`, 10);
  const today = new Date();
  const expDate = new Date(expYYYY, expMM);
  if (expDate < today) {
    alert('Please enter a valid expiry date');
    return false;
  }
  return true;
}

/* Function to check CVV validity */
