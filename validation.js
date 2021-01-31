/* Function to check email validity */

function validateEmail(email) {
  const validFormat = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  if (!validFormat) {
    // alert('Please enter a valid email');
    return false;
  }
  return true;
}

// console.log(validateEmail('meganl.com'));

/* Function to check card validity */

const acceptedCreditCards = {
  visa: /^4[0-9]{12}(?:[0-9]{3})?$/,
  mastercard: /^5[1-5][0-9]{14}$|^2(?:2(?:2[1-9]|[3-9][0-9])|[3-6][0-9][0-9]|7(?:[01][0-9]|20))[0-9]{12}$/,
  amex: /^3[47][0-9]{13}$/,
  discover: /^65[4-9][0-9]{13}|64[4-9][0-9]{13}|6011[0-9]{12}|(622(?:12[6-9]|1[3-9][0-9]|[2-8][0-9][0-9]|9[01][0-9]|92[0-5])[0-9]{10})$/,
  diners_club: /^3(?:0[0-5]|[68][0-9])[0-9]{11}$/,
  jcb: /^(?:2131|1800|35[0-9]{3})[0-9]{11}$/,
};

function validateCard(value) {
  // remove all non digit characters
  const valueNoSpace = value.replace(/\D/g, '');
  let sum = 0;
  let shouldDouble = false;
  // loop through values starting at the rightmost side
  for (let i = valueNoSpace.length - 1; i >= 0; i--) {
    let digit = parseInt(valueNoSpace.charAt(i), 10);

    if (shouldDouble) {
      if ((digit *= 2) > 9) digit -= 9;
    }

    sum += digit;
    shouldDouble = !shouldDouble;
  }

  const valid = sum % 10 === 0;
  let accepted = false;

  // loop through the keys (visa, mastercard, amex, etc.)
  Object.keys(acceptedCreditCards).forEach((key) => {
    const regex = acceptedCreditCards[key];
    if (regex.test(value)) {
      accepted = true;
    }
  });
  if (!accepted || !valid) {
    alert('Please enter a valid credit card number');
  }
  return valid && accepted;
}
// console.log(validateCard('371612019985236')); // return true
// console.log(validateCard('371612013434536')); // return false

/* Function to check expiry date validity */

function validateExpiry(date) {
  // receives 'MM/YY' input
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

// console.log(validateExpiry('02/21'));

/* Function to check CVV validity */

function validateCVV(creditCard, cvv) {
  // remove all non digit characters
  const creditCardNoSpace = creditCard.replace(/\D/g, '');
  const cvvNoSpace = cvv.replace(/\D/g, '');
  // american express and cvv is 4 digits
  if (acceptedCreditCards.amex.test(creditCardNoSpace)) {
    if (/^\d{4}$/.test(cvvNoSpace)) return true;
  } else if (/^\d{3}$/.test(cvvNoSpace)) {
    // other card & cvv is 3 digits
    return true;
  }
  alert('Please enter a valid CVC or CVV');
  return false;
}

// console.log(validateCVV('371612013434536', '221'));
