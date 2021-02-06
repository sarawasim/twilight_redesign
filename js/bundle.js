(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
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

},{"postal-codes-js":71}],2:[function(require,module,exports){
module.exports = false;


},{}],3:[function(require,module,exports){
(function (__dirname){(function (){
'use strict';

const path = require('path');

module.exports = function getFormat(postalCodeFormat) {
    //use eval(require) to workaround webpack which can't require dynamic path
    return eval('require')(path.join(__dirname, 'formats', postalCodeFormat));
};
}).call(this)}).call(this,"/../../../../../node_modules/postal-codes-js")
},{"path":72}],4:[function(require,module,exports){
'use strict';

const formats = {};

formats["10Digits.json"] = require("./formats/10Digits.json");
formats["2Digits.json"] = require("./formats/2Digits.json");
formats["3Digits.json"] = require("./formats/3Digits.json");
formats["4Digits.json"] = require("./formats/4Digits.json");
formats["5Digits.json"] = require("./formats/5Digits.json");
formats["6Digits.json"] = require("./formats/6Digits.json");
formats["7Digits.json"] = require("./formats/7Digits.json");
formats["8Digits.json"] = require("./formats/8Digits.json");
formats["AD.json"] = require("./formats/AD.json");
formats["AI.json"] = require("./formats/AI.json");
formats["AQ.json"] = require("./formats/AQ.json");
formats["AX.json"] = require("./formats/AX.json");
formats["AZ.json"] = require("./formats/AZ.json");
formats["BB.json"] = require("./formats/BB.json");
formats["BH.json"] = require("./formats/BH.json");
formats["BL.json"] = require("./formats/BL.json");
formats["BN.json"] = require("./formats/BN.json");
formats["CA.json"] = require("./formats/CA.json");
formats["DK.json"] = require("./formats/DK.json");
formats["FK.json"] = require("./formats/FK.json");
formats["GB.json"] = require("./formats/GB.json");
formats["GF.json"] = require("./formats/GF.json");
formats["GG.json"] = require("./formats/GG.json");
formats["GI.json"] = require("./formats/GI.json");
formats["GP.json"] = require("./formats/GP.json");
formats["GS.json"] = require("./formats/GS.json");
formats["HN.json"] = require("./formats/HN.json");
formats["IE.json"] = require("./formats/IE.json");
formats["IM.json"] = require("./formats/IM.json");
formats["IO.json"] = require("./formats/IO.json");
formats["JE.json"] = require("./formats/JE.json");
formats["KY.json"] = require("./formats/KY.json");
formats["LB.json"] = require("./formats/LB.json");
formats["LC.json"] = require("./formats/LC.json");
formats["LT.json"] = require("./formats/LT.json");
formats["LU.json"] = require("./formats/LU.json");
formats["LV.json"] = require("./formats/LV.json");
formats["MC.json"] = require("./formats/MC.json");
formats["MD.json"] = require("./formats/MD.json");
formats["MF.json"] = require("./formats/MF.json");
formats["MS.json"] = require("./formats/MS.json");
formats["MT.json"] = require("./formats/MT.json");
formats["NC.json"] = require("./formats/NC.json");
formats["NL.json"] = require("./formats/NL.json");
formats["PF.json"] = require("./formats/PF.json");
formats["PL.json"] = require("./formats/PL.json");
formats["PM.json"] = require("./formats/PM.json");
formats["PN.json"] = require("./formats/PN.json");
formats["PT.json"] = require("./formats/PT.json");
formats["RE.json"] = require("./formats/RE.json");
formats["RU.json"] = require("./formats/RU.json");
formats["SH.json"] = require("./formats/SH.json");
formats["SM.json"] = require("./formats/SM.json");
formats["SO.json"] = require("./formats/SO.json");
formats["SZ.json"] = require("./formats/SZ.json");
formats["TC.json"] = require("./formats/TC.json");
formats["TW.json"] = require("./formats/TW.json");
formats["US.json"] = require("./formats/US.json");
formats["VA.json"] = require("./formats/VA.json");
formats["VC.json"] = require("./formats/VC.json");
formats["VE.json"] = require("./formats/VE.json");
formats["VG.json"] = require("./formats/VG.json");
formats["WF.json"] = require("./formats/WF.json");
formats["WS.json"] = require("./formats/WS.json");


module.exports = function getFormat(postalCodeFormat) {
    return formats[postalCodeFormat];
};
},{"./formats/10Digits.json":5,"./formats/2Digits.json":6,"./formats/3Digits.json":7,"./formats/4Digits.json":8,"./formats/5Digits.json":9,"./formats/6Digits.json":10,"./formats/7Digits.json":11,"./formats/8Digits.json":12,"./formats/AD.json":13,"./formats/AI.json":14,"./formats/AQ.json":15,"./formats/AX.json":16,"./formats/AZ.json":17,"./formats/BB.json":18,"./formats/BH.json":19,"./formats/BL.json":20,"./formats/BN.json":21,"./formats/CA.json":22,"./formats/DK.json":23,"./formats/FK.json":24,"./formats/GB.json":25,"./formats/GF.json":26,"./formats/GG.json":27,"./formats/GI.json":28,"./formats/GP.json":29,"./formats/GS.json":30,"./formats/HN.json":31,"./formats/IE.json":32,"./formats/IM.json":33,"./formats/IO.json":34,"./formats/JE.json":35,"./formats/KY.json":36,"./formats/LB.json":37,"./formats/LC.json":38,"./formats/LT.json":39,"./formats/LU.json":40,"./formats/LV.json":41,"./formats/MC.json":42,"./formats/MD.json":43,"./formats/MF.json":44,"./formats/MS.json":45,"./formats/MT.json":46,"./formats/NC.json":47,"./formats/NL.json":48,"./formats/PF.json":49,"./formats/PL.json":50,"./formats/PM.json":51,"./formats/PN.json":52,"./formats/PT.json":53,"./formats/RE.json":54,"./formats/RU.json":55,"./formats/SH.json":56,"./formats/SM.json":57,"./formats/SO.json":58,"./formats/SZ.json":59,"./formats/TC.json":60,"./formats/TW.json":61,"./formats/US.json":62,"./formats/VA.json":63,"./formats/VC.json":64,"./formats/VE.json":65,"./formats/VG.json":66,"./formats/WF.json":67,"./formats/WS.json":68}],5:[function(require,module,exports){
module.exports={
  "Description": "10-Digits - NNNNNNNNNN",
  "RedundantCharacters": " -",
  "ValidationRegex": "^[0-9]{10}$",
  "TestData": {
    "Valid": [
      "1234567890",
      "5678567833"
    ],
    "Invalid": [
      "12334545698",
      "123s33s12",
      "123456789"
    ]
  }
}

},{}],6:[function(require,module,exports){
module.exports={
  "Description": "2-Digits - NN",
  "RedundantCharacters": " -",
  "ValidationRegex": "^[0-9]{2}$",
  "TestData": {
    "Valid": [
      "12",
      "56"
    ],
    "Invalid": [
      "012",
      "1s",
      "1",
      "x3"
    ]
  }
}

},{}],7:[function(require,module,exports){
module.exports={
  "Description": "3-Digits - NNN",
  "RedundantCharacters": " -",
  "ValidationRegex": "^[0-9]{3}$",
  "TestData": {
    "Valid": [
      "123",
      "567"
    ],
    "Invalid": [
      "1234",
      "13s",
      "1x3"
    ]
  }
}

},{}],8:[function(require,module,exports){
module.exports={
  "Description": "4-Digits - NNNN",
  "RedundantCharacters": " -",
  "ValidationRegex": "^[0-9]{4}$",
  "TestData": {
    "Valid": [
      "1234",
      "5678"
    ],
    "Invalid": [
      "12345",
      "123s",
      "12x3"
    ]
  }
}

},{}],9:[function(require,module,exports){
module.exports={
  "Description": "5-Digits - NNNNN",
  "RedundantCharacters": " -",
  "ValidationRegex": "^[0-9]{5}$",
  "TestData": {
    "Valid": [
      "12345",
      "56785"
    ],
    "Invalid": [
      "123456",
      "1233s",
      "123x3"
    ]
  }
}

},{}],10:[function(require,module,exports){
module.exports={
  "Description": "6-Digits - NNNNNN",
  "RedundantCharacters": " -",
  "ValidationRegex": "^[0-9]{6}$",
  "TestData": {
    "Valid": [
      "123456",
      "567856"
    ],
    "Invalid": [
      "1233456",
      "123s3s",
      "1s23x3"
    ]
  }
}

},{}],11:[function(require,module,exports){
module.exports={
  "Description": "7-Digits - NNNNNNN",
  "RedundantCharacters": " -",
  "ValidationRegex": "^[0-9]{7}$",
  "TestData": {
    "Valid": [
      "1234567",
      "5678567"
    ],
    "Invalid": [
      "123345456",
      "123s33s",
      "1s23x3"
    ]
  }
}

},{}],12:[function(require,module,exports){
module.exports={
  "Description": "8-Digits - NNNNNNNN",
  "RedundantCharacters": " -",
  "ValidationRegex": "^[0-9]{8}$",
  "TestData": {
    "Valid": [
      "12345678",
      "56785678"
    ],
    "Invalid": [
      "123345456",
      "123s33s",
      "1s23x3"
    ]
  }
}

},{}],13:[function(require,module,exports){
module.exports={
  "Description": "AD : CCNNN",
  "RedundantCharacters": " -",
  "ValidationRegex": "^AD[0-9]{3}$",
  "TestData": {
    "Valid": [
      "AD123",
      "AD001"
    ],
    "Invalid": [
      "A1234",
      "AD12",
	  "AD1234"
    ]
  }
}
},{}],14:[function(require,module,exports){
module.exports={
  "Description": "AI : CC2640",
  "RedundantCharacters": " -",
  "ValidationRegex": "^AI2640$",
  "TestData": {
    "Valid": [
      "AI2640",
      "AI-2640"
    ],
    "Invalid": [
      "A2640",
      "AI02640",
	  "AI-02640"
    ]
  }
}
},{}],15:[function(require,module,exports){
module.exports={
  "Description": "AQ : BIQQ 1ZZ",
  "RedundantCharacters": " -",
  "ValidationRegex": "^BIQQ1ZZ$",
  "TestData": {
    "Valid": [
      "BIQQ 1ZZ",
      "BIQQ1ZZ"
    ],
    "Invalid": [
      "BIQQ1Z",
      "BIQQ01ZZ"
    ]
  }
}
},{}],16:[function(require,module,exports){
module.exports={
  "Description": "AX : NNNNN, CC-NNNNN",
  "RedundantCharacters": " -",
  "ValidationRegex": "^(AX)?[0-9]{5}$",
  "TestData": {
    "Valid": [
      "12345",
      "AX-12345",
      "AX12345"
    ],
    "Invalid": [
      "AX123",
      "A1234",
      "AX-1234"
    ]
  }
}
},{}],17:[function(require,module,exports){
module.exports={
  "Description": "AZ : CCNNNNN",
  "RedundantCharacters": " -",
  "ValidationRegex": "^AZ[0-9]{4}$",
  "TestData": {
    "Valid": [
      "AZ1234",
	  "AZ-1234"
    ],
    "Invalid": [
      "AZ123",
      "A1234",
	  "AZ-12345"
    ]
  }
}
},{}],18:[function(require,module,exports){
module.exports={
  "Description": "BB : CCNNNNN",
  "RedundantCharacters": " -",
  "ValidationRegex": "^(BB)?[0-9]{5}$",
  "TestData": {
    "Valid": [
      "BB12345",
      "12345"
    ],
    "Invalid": [
      "x1231s",
      "1231sd"
    ]
  }
}
},{}],19:[function(require,module,exports){
module.exports={
  "Description": "BH : NNN, NNNN",
  "RedundantCharacters": " -",
  "ValidationRegex": "^[0-9]{3,4}$",
  "TestData": {
    "Valid": [
      "123",
      "1234"
    ],
    "Invalid": [
      "12",
      "12345"
    ]
  }
}
},{}],20:[function(require,module,exports){
module.exports={
  "Description": "BL : 97133",
  "RedundantCharacters": " -",
  "ValidationRegex": "^97133$",
  "TestData": {
    "Valid": [
      "97133"
    ],
    "Invalid": [
      "971330",
      "9713"
    ]
  }
}
},{}],21:[function(require,module,exports){
module.exports={
  "Description": "BN : LLNNNN",
  "RedundantCharacters": " -",
  "ValidationRegex": "^[a-zA-Z]{2}[0-9]{4}$",
  "TestData": {
    "Valid": [
      "AB1234",
      "tK0987"
    ],
    "Invalid": [
      "abc123",
      "a12345",
	  "at123",
	  "BH12345"
    ]
  }
}
},{}],22:[function(require,module,exports){
module.exports={
  "Description": "CA : A0A 0A0",
  "RedundantCharacters": " -",
  "ValidationRegex": "^[ABCEGHJKLMNPRSTVXY]\\d[ABCEGHJ-NPRSTV-Z][\\s\\-]?\\d[ABCEGHJ-NPRSTV-Z]\\d$",
  "TestData": {
    "Valid": [
      "A4B5X5",
      "A4B5A5"
    ],
    "Invalid": [
      "123AAA",
      "12A5AA"
    ]
  }
}
},{}],23:[function(require,module,exports){
module.exports={
  "Description": "DK",
  "RedundantCharacters": " -",
  "ValidationRegex": "^(DK){0,1}\\d{4}$",
  "TestData": {
    "Valid": [
      "1124",
      "DK1054",
      "DK-1120",
      "DK1120",
      "DK 1125",
      "DK - 1234",
      "dk-1123"
    ],
    "Invalid": [
      "1125DK",
      "DK12345",
      "DK123",
      "123",
      ""
    ]
  }
}
},{}],24:[function(require,module,exports){
module.exports={
  "Description": "FK : FIQQ 1ZZ",
  "RedundantCharacters": " -",
  "ValidationRegex": "^FIQQ1ZZ$",
  "TestData": {
    "Valid": [
      "FIQQ 1ZZ",
      "FIQQ1ZZ"
    ],
    "Invalid": [
      "FIQQ01ZZ",
      "FIQQ1ZZZ"
    ]
  }
}
},{}],25:[function(require,module,exports){
module.exports={
  "Description": "GB",
  "RedundantCharacters": " -",
  "ValidationRegex": "((([A-Za-z][0-9]{1,2})|(([A-Za-z][A-Ha-hJ-Yj-y][0-9]{1,2})|(([AZa-z][0-9][A-Za-z])|([A-Za-z][A-Ha-hJ-Yj-y][0-9]?[A-Za-z]))))[0-9][A-Za-z]{2})|GIR0AA",
  "ValidationRegex.DOC": "https://www.gov.uk/government/uploads/system/uploads/attachment_data/file/488478/Bulk_Data_Transfer_-_additional_validation_valid_from_12_November_2015.pdf",
  "TestData": {
    "Valid": [
      "CW3 9SS",
      "SE5 0EG",
      "SE50EG",
      "WC2H 7LT",
      "se5 0eg",
      "Z29ZZ",
      "Z699ZZ",
      "ZX99ZZ",
      "ZC999ZZ",
      "EC1A 1BB",
      "W1A 0AX",
      "M1 1AE",
      "B33 8TH",
      "CR2 6XH",
      "DN55 1PT",
      "GIR 0AA",
      "W1U 1BW",
      "SK8 7NA"
    ],
    "Invalid": [
      "WC2H 7LTa",
      "WC2H"
    ]
  }
}
},{}],26:[function(require,module,exports){
module.exports={
  "Description": "GF : 973NN",
  "RedundantCharacters": " -",
  "ValidationRegex": "^973[0-9]{2}$",
  "TestData": {
    "Valid": [
      "97300",
      "97390"
    ],
    "Invalid": [
      "9732",
      "973999",
	  "97290",
	  "097390"
    ]
  }
}
},{}],27:[function(require,module,exports){
module.exports={
  "Description": "GG",
  "RedundantCharacters": " -",
  "ValidationRegex": "^GY[0-9]{2,3}[A-Za-z]{2}$",
  "TestData": {
    "Valid": [
      "GY1 1AA",
      "GY111AA"
    ],
    "Invalid": [
      "CW3 9SS",
      "GG1 1AA",
      "SE5 0EG",
      "SE50EG",
      "WC2H 7LTa",
      "WC2H"
    ]
  }
}
},{}],28:[function(require,module,exports){
module.exports={
  "Description": "GI : GX11 1AA",
  "RedundantCharacters": " -",
  "ValidationRegex": "^GX111AA$",
  "TestData": {
    "Valid": [
      "GX111AA",
      "GX11 1AA"
    ],
    "Invalid": [
      "GX1101AA",
      "GX111AAA"
    ]
  }
}
},{}],29:[function(require,module,exports){
module.exports={
  "Description": "GP : 971NN",
  "RedundantCharacters": " -",
  "ValidationRegex": "^971[0-9]{2}$",
  "TestData": {
    "Valid": [
      "97100",
      "97190"
    ],
    "Invalid": [
      "9712",
      "971999",
	  "97290",
	  "097190"
    ]
  }
}
},{}],30:[function(require,module,exports){
module.exports={
  "Description": "GS : SIQQ 1ZZ",
  "RedundantCharacters": " -",
  "ValidationRegex": "^SIQQ1ZZ$",
  "TestData": {
    "Valid": [
      "SIQQ 1ZZ",
      "SIqq 1zz",
      "SIQQ1ZZ"
    ],
    "Invalid": [
      "SIQQ01ZZ",
      "SIQQ1ZZZ"
    ]
  }
}
},{}],31:[function(require,module,exports){
module.exports={
  "Description": "HN : CCNNNNN",
  "RedundantCharacters": " -",
  "ValidationRegex": "^(HN)?[0-9]{5}$",
  "TestData": {
    "Valid": [
      "HN12345",
      "12345"
    ],
    "Invalid": [
      "123456",
      "HN123456",
      "HN1234"
    ]
  }
}
},{}],32:[function(require,module,exports){
module.exports={
  "Description": "IE",
  "RedundantCharacters": "",
  "ValidationRegex": "^[AaC-Fc-fHhKkNnPpRrTtV-Yv-y]\\d[0-9Ww][ -]?[0-9AaC-Fc-fHhKkNnPpRrTtV-Yv-y]{4}$",
  "ValidationRegex.DOC": "https://www.eircode.ie/docs/default-source/Common/prepareyourbusinessforeircode-edition3published.pdf?sfvrsn=2",
  "TestData": {
    "Valid": [
      "D6W1234",
      "A23 0984",
      "D00-AV92",
      "y631fhk",
      "a00 0000",
      "d44-n4x4",
      "A65F4E2"
    ],
    "Invalid": ["D6Z1234", "y63  1fhk"]
  }
}

},{}],33:[function(require,module,exports){
module.exports={
  "Description": "IM",
  "RedundantCharacters": " -",
  "ValidationRegex": "^IM[0-9]{2,3}[A-Za-z]{2}$",
  "TestData": {
    "Valid": [
      "IM1 1AA",
      "IM111AA"
    ],
    "Invalid": [
      "CW3 9SS",
      "SE5 0EG",
      "SE50EG",
      "WC2H 7LTa",
      "WC2H"
    ]
  }
}
},{}],34:[function(require,module,exports){
module.exports={
  "Description": "IO : BBND 1ZZ",
  "RedundantCharacters": " -",
  "ValidationRegex": "^BBND1ZZ$",
  "TestData": {
    "Valid": [
      "BBND 1ZZ",
      "BBND1ZZ"
    ],
    "Invalid": [
      "BBND01ZZ",
      "BBND1ZZZ"
    ]
  }
}
},{}],35:[function(require,module,exports){
module.exports={
  "Description": "JE",
  "RedundantCharacters": " -",
  "ValidationRegex": "^JE[0-9]{2,3}[A-Za-z]{2}$",
  "TestData": {
    "Valid": [
      "JE1 1AA",
      "JE111AA"
    ],
    "Invalid": [
      "CW3 9SS",
      "SE5 0EG",
      "SE50EG",
      "WC2H 7LTa",
      "WC2H"
    ]
  }
}
},{}],36:[function(require,module,exports){
module.exports={
  "Description": "KY : CCN-NNNN",
  "RedundantCharacters": " -",
  "ValidationRegex": "^KY[0-9]{5}$",
  "TestData": {
    "Valid": [
      "KY1-1234",
	  "KY12345"
    ],
    "Invalid": [
      "KY1234",
      "KY123456",
	  "K1-1234"
    ]
  }
}
},{}],37:[function(require,module,exports){
module.exports={
  "Description": "LB : NNNNN, NNNN NNNN",
  "RedundantCharacters": " -",
  "ValidationRegex": "^[0-9]{4}(?:[0-9]{4})?$",
  "TestData": {
    "Valid": [
      "1234",
      "1234 1234",
      "12341234"
    ],
    "Invalid": [
      "123",
      "1234567",
      "123456789"
    ]
  }
}
},{}],38:[function(require,module,exports){
module.exports={
  "Description": "LC : CCNN NNN",
  "RedundantCharacters": " -",
  "ValidationRegex": "^LC[0-9]{5}$",
  "TestData": {
    "Valid": [
      "LC12 345",
      "LC12345"
    ],
    "Invalid": [
      "12345",
      "x1231s",
      "1231sd"
    ]
  }
}
},{}],39:[function(require,module,exports){
module.exports={
  "Description": "LT : LT-NNNNN",
  "RedundantCharacters": " -",
  "ValidationRegex": "^(LT)?[0-9]{5}$",
  "TestData": {
    "Valid": [
      "12345",
      "LT12345",
      "LT-12345"
    ],
    "Invalid": [
      "1234",
      "123456",
      "LT-1234"
    ]
  }
}
},{}],40:[function(require,module,exports){
module.exports={
  "Description": "LU",
  "RedundantCharacters": " -",
  "ValidationRegex": "^(L){0,1}\\d{4}$",
  "TestData": {
    "Valid": [
      "1124",
      "L1054",
      "L-1120",
      "L1120",
      "L 1125",
      "L - 1234",
      "l-1123"
    ],
    "Invalid": [
      "1125L",
      "L12345",
      "L123",
      "123",
      ""
    ]
  }
}
},{}],41:[function(require,module,exports){
module.exports={
  "Description": "LV : NNNNN, CC-NNNNN",
  "RedundantCharacters": " -",
  "ValidationRegex": "^(LV)?[0-9]{4}$",
  "TestData": {
    "Valid": [
      "1234",
      "LV-1234",
	  "LV1234"
    ],
    "Invalid": [
      "LV123",
      "L1234",
	  "LV-12345"
    ]
  }
}
},{}],42:[function(require,module,exports){
module.exports={
  "Description": "MC : 980NN",
  "RedundantCharacters": " -",
  "ValidationRegex": "^980[0-9]{2}$",
  "TestData": {
    "Valid": [
      "98000",
      "98099"
    ],
    "Invalid": [
      "98100",
      "97099"
    ]
  }
}

},{}],43:[function(require,module,exports){
module.exports={
  "Description": "MD : CCNNNN, CC-NNNN",
  "RedundantCharacters": " -",
  "ValidationRegex": "^(MD)?[0-9]{4}$",
  "TestData": {
    "Valid": [
      "1234",
      "MD1234",
	  "MD-1234"
    ],
    "Invalid": [
      "MD123",
      "M1234",
	  "MD-12345"
    ]
  }
}
},{}],44:[function(require,module,exports){
module.exports={
  "Description": "MF : 97150",
  "RedundantCharacters": " -",
  "ValidationRegex": "^97150$",
  "TestData": {
    "Valid": [
      "97150"
    ],
    "Invalid": [
      "971500",
      "9715"
    ]
  }
}
},{}],45:[function(require,module,exports){
module.exports={
  "Description": "MS : MSR NNNN",
  "RedundantCharacters": " -",
  "ValidationRegex": "^(MSR)?[0-9]{4}$",
  "TestData": {
    "Valid": [
      "MSR 1110",
      "MSR 1350",
	  "1350"
    ],
    "Invalid": [
      "MS1110",
      "MSR01350",
	  "12345"
    ]
  }
}
},{}],46:[function(require,module,exports){
module.exports={
  "Description": "MA : LLL NNNN",
  "RedundantCharacters": " -",
  "ValidationRegex": "^[A-Z]{3}[0-9]{4}$",
  "TestData": {
    "Valid": [
      "abc1234",
      "ABC1234",
      "SHD4783"
    ],
    "Invalid": [
      "ABCABC",
      "123ABCD"
    ]
  }
}
},{}],47:[function(require,module,exports){
module.exports={
  "Description": "NC : 988NN",
  "RedundantCharacters": " -",
  "ValidationRegex": "^988[0-9]{2}$",
  "TestData": {
    "Valid": [
      "98800",
      "98890"
    ],
    "Invalid": [
      "9882",
      "988999",
	  "98990",
	  "098890"
    ]
  }
}
},{}],48:[function(require,module,exports){
module.exports={
  "Description": "NL : NNNN LL",
  "RedundantCharacters": " -",
  "ValidationRegex": "^[1-9][0-9]{3}(?!SA|SD|SS)[A-Z]{2}$",
  "TestData": {
    "Valid": [
      "1235DF",
      "5983DH",
      "1000 AP"
    ],
    "Invalid": [
      "1235D",
      "12j4h",
      "k3j51l",
      "1945SS"
    ]
  }
}
},{}],49:[function(require,module,exports){
module.exports={
  "Description": "PF : 987NN",
  "RedundantCharacters": " -",
  "ValidationRegex": "^987[0-9]{2}$",
  "TestData": {
    "Valid": [
      "98700",
      "98790"
    ],
    "Invalid": [
      "9872",
      "987999",
	  "98690",
	  "098790"
    ]
  }
}
},{}],50:[function(require,module,exports){
module.exports={
  "Description": "PL : 99-999",
  "RedundantCharacters": " ",
  "ValidationRegex": "^[0-9]{2}-[0-9]{3}$",
  "TestData": {
    "Valid": [
      "44-100 ",
      "44-100"
    ],
    "Invalid": [
      "44100",
      "44f00",
      "e4410",
      "44-100d",
      "c44-100",
      "b44100",
      "44100a"
    ]
  }
}

},{}],51:[function(require,module,exports){
module.exports={
  "Description": "PM : 97500",
  "RedundantCharacters": " -",
  "ValidationRegex": "^97500$",
  "TestData": {
    "Valid": [
      "97500"
    ],
    "Invalid": [
      "975000",
      "9750"
    ]
  }
}
},{}],52:[function(require,module,exports){
module.exports={
  "Description": "PN : PCRN 1ZZ",
  "RedundantCharacters": " -",
  "ValidationRegex": "^PCRN1ZZ$",
  "TestData": {
    "Valid": [
      "PCRN 1ZZ",
      "PCRN1ZZ"
    ],
    "Invalid": [
      "PCRN01ZZ",
      "PCRN1ZZZ"
    ]
  }
}
},{}],53:[function(require,module,exports){
module.exports={
  "Description": "PT : NNNN-NNN",
  "RedundantCharacters": " ",
  "ValidationRegex": "^[0-9]{4}-[0-9]{3}$",
  "TestData": {
    "Valid": [
      "1234-123"
    ],
    "Invalid": [
      "1255",
      "1234567",
      "1234 123",
      "x1231s",
      "1231sd",
      "1010101010",
      "1234 12"
    ]
  }
}

},{}],54:[function(require,module,exports){
module.exports={
  "Description": "RE : 974NN",
  "RedundantCharacters": " -",
  "ValidationRegex": "^974[0-9]{2}$",
  "TestData": {
    "Valid": [
      "97400",
      "97490"
    ],
    "Invalid": [
      "9742",
      "974999",
	  "97390",
	  "097490"
    ]
  }
}
},{}],55:[function(require,module,exports){
module.exports={
  "Description": "RU : NNN[-NNN]",
  "RedundantCharacters": " -",
  "ValidationRegex": "^[0-9]{3}([0-9]{3})?$",
  "TestData": {
    "Valid": [
      "125",
      "123456"
    ],
    "Invalid": [
      "x1231s",
      "1231sd",
      "1010101010"
    ]
  }
}
},{}],56:[function(require,module,exports){
module.exports={
  "Description": "SH : STHL 1ZZ",
  "RedundantCharacters": " -",
  "ValidationRegex": "^STHL1ZZ$",
  "TestData": {
    "Valid": [
      "STHL 1ZZ",
      "STHL1ZZ"
    ],
    "Invalid": [
      "STHL01ZZ",
      "STHL1ZZZ"
    ]
  }
}
},{}],57:[function(require,module,exports){
module.exports={
  "Description": "SM : 4789N",
  "RedundantCharacters": " -",
  "ValidationRegex": "^4789[0-9]{1}$",
  "TestData": {
    "Valid": [
      "47890",
      "47899"
    ],
    "Invalid": [
      "4789",
      "478900",
	  "47889"
    ]
  }
}
},{}],58:[function(require,module,exports){
module.exports={
  "Description": "SO : AA NNNNN",
  "RedundantCharacters": " -",
  "ValidationRegex": "^[a-zA-Z]{2}[0-9]{5}$",
  "TestData": {
    "Valid": [
      "AW12345",
      "BN47899"
    ],
    "Invalid": [
      "12345",
      "A12345",
	  "SL123456"
    ]
  }
}
},{}],59:[function(require,module,exports){
module.exports={
  "Description": "SZ : ANNN",
  "RedundantCharacters": " -",
  "ValidationRegex": "^[a-zA-Z]{1}[0-9]{3}$",
  "TestData": {
    "Valid": [
      "S123",
      "a789"
    ],
    "Invalid": [
      "F1234",
      "D12"
    ]
  }
}
},{}],60:[function(require,module,exports){
module.exports={
  "Description": "TC : TKCA 1ZZ",
  "RedundantCharacters": " -",
  "ValidationRegex": "^TKCA1ZZ$",
  "TestData": {
    "Valid": [
      "TKCA1ZZ",
      "TKCA 1ZZ"
    ],
    "Invalid": [
      "TKCA01ZZ",
      "TKCA1ZZZ"
    ]
  }
}
},{}],61:[function(require,module,exports){
module.exports={
  "Description": "TW : NNN[-NN]",
  "RedundantCharacters": " -",
  "ValidationRegex": "^[0-9]{3}([0-9]{2})?$",
  "TestData": {
    "Valid": [
      "123",
      "123-45",
      "12345"
    ],
    "Invalid": [
      "12",
      "1234",
      "101010"
    ]
  }
}

},{}],62:[function(require,module,exports){
module.exports={
  "Description": "US : NNNNN[-NNNN]",
  "RedundantCharacters": " -",
  "ValidationRegex": "^[0-9]{5}([0-9]{4})?$",
  "TestData": {
    "Valid": [
      "12345",
      "12345-7689"
    ],
    "Invalid": [
      "x1231s",
      "1231sd",
      "1010101010"
    ]
  }
}

},{}],63:[function(require,module,exports){
module.exports={
  "Description": "VA : 00120",
  "RedundantCharacters": " -",
  "ValidationRegex": "^00120$",
  "TestData": {
    "Valid": [
      "00120"
    ],
    "Invalid": [
      "0012",
      "001200"
    ]
  }
}
},{}],64:[function(require,module,exports){
module.exports={
  "Description": "VC : CCNNNNN",
  "RedundantCharacters": " -",
  "ValidationRegex": "^(VC)?[0-9]{4}$",
  "TestData": {
    "Valid": [
      "1234",
      "VC1234",
	  "VC-1234"
    ],
    "Invalid": [
      "VC123",
      "V1234",
	  "VC-12345"
    ]
  }
}
},{}],65:[function(require,module,exports){
module.exports={
  "Description": "VE : NNNN, NNNN-A",
  "RedundantCharacters": " -",
  "ValidationRegex": "^[0-9]{4}[a-zA-Z]?$",
  "TestData": {
    "Valid": [
      "1234",
      "1234-A"
    ],
    "Invalid": [
      "123",
      "1234AA"
    ]
  }
}
},{}],66:[function(require,module,exports){
module.exports={
  "Description": "VG : CCNNNN",
  "RedundantCharacters": " -",
  "ValidationRegex": "^(VG)?[0-9]{4}$",
  "TestData": {
    "Valid": [
      "1234",
      "VG1234",
	  "VG-1234"
    ],
    "Invalid": [
      "VG123",
      "V1234",
	  "VG-12345"
    ]
  }
}

},{}],67:[function(require,module,exports){
module.exports={
  "Description": "WF : 986NN",
  "RedundantCharacters": " -",
  "ValidationRegex": "^986[0-9]{2}$",
  "TestData": {
    "Valid": [
      "98600",
      "98690"
    ],
    "Invalid": [
      "9862",
      "986999",
	  "98990",
	  "098690"
    ]
  }
}
},{}],68:[function(require,module,exports){
module.exports={
  "Description": "WS : CCNNNNN",
  "RedundantCharacters": " -",
  "ValidationRegex": "^(WS)?[0-9]{4}$",
  "TestData": {
    "Valid": [
      "1234",
      "WS1234",
	  "WS-1234"
    ],
    "Invalid": [
      "WS123",
      "V1234",
	  "WS-12345"
    ]
  }
}
},{}],69:[function(require,module,exports){
module.exports={
    "AF": {
        "countryName": "Afghanistan",
        "postalCodeFormat": "4Digits.json",
        "alpha2": "AF",
        "alpha3": "AFG",
        "numeric3": "4"
    },
    "AX": {
        "countryName": "Aland Islands",
        "postalCodeFormat": "AX.json",
        "alpha2": "AX",
        "alpha3": "ALA",
        "numeric3": "248"
    },
    "AL": {
        "countryName": "Albania",
        "postalCodeFormat": "4Digits.json",
        "alpha2": "AL",
        "alpha3": "ALB",
        "numeric3": "8"
    },
    "DZ": {
        "countryName": "Algeria",
        "postalCodeFormat": "5Digits.json",
        "alpha2": "DZ",
        "alpha3": "DZA",
        "numeric3": "12"
    },
    "AS": {
        "countryName": "American Samoa",
        "postalCodeFormat": "5Digits.json",
        "alpha2": "AS",
        "alpha3": "ASM",
        "numeric3": "16"
    },
    "AD": {
        "countryName": "Andorra",
        "postalCodeFormat": "AD.json",
        "alpha2": "AD",
        "alpha3": "AND",
        "numeric3": "20"
    },
    "AO": {
        "countryName": "Angola",
        "alpha2": "AO",
        "alpha3": "AGO",
        "numeric3": "24"
    },
    "AI": {
        "countryName": "Anguilla",
        "postalCodeFormat": "AI.json",
        "alpha2": "AI",
        "alpha3": "AIA",
        "numeric3": "660"
    },
    "AQ": {
        "countryName": "Antarctica",
        "postalCodeFormat": "AQ.json",
        "alpha2": "AQ",
        "alpha3": "ATA",
        "numeric3": "10"
    },
    "AG": {
        "countryName": "Antigua and Barbuda",
        "alpha2": "AG",
        "alpha3": "ATG",
        "numeric3": "28"
    },
    "AR": {
        "countryName": "Argentina",
        "postalCodeFormat": "4Digits.json",
        "alpha2": "AR",
        "alpha3": "ARG",
        "numeric3": "32"
    },
    "AM": {
        "countryName": "Armenia",
        "postalCodeFormat": "4Digits.json",
        "alpha2": "AM",
        "alpha3": "ARM",
        "numeric3": "51"
    },
    "AW": {
        "countryName": "Aruba",
        "alpha2": "AW",
        "alpha3": "ABW",
        "numeric3": "533"
    },
    "AU": {
        "countryName": "Australia",
        "postalCodeFormat": "4Digits.json",
        "alpha2": "AU",
        "alpha3": "AUS",
        "numeric3": "36"
    },
    "AT": {
        "countryName": "Austria",
        "postalCodeFormat": "4Digits.json",
        "alpha2": "AT",
        "alpha3": "AUT",
        "numeric3": "40"
    },
    "AZ": {
        "countryName": "Azerbaijan",
        "postalCodeFormat": "AZ.json",
        "alpha2": "AZ",
        "alpha3": "AZE",
        "numeric3": "31"
    },
    "BS": {
        "countryName": "Bahamas",
        "alpha2": "BS",
        "alpha3": "BHS",
        "numeric3": "44"
    },
    "BH": {
        "countryName": "Bahrain",
        "postalCodeFormat": "BH.json",
        "alpha2": "BH",
        "alpha3": "BHR",
        "numeric3": "48"
    },
    "BD": {
        "countryName": "Bangladesh",
        "postalCodeFormat": "4Digits.json",
        "alpha2": "BD",
        "alpha3": "BGD",
        "numeric3": "50"
    },
    "BB": {
        "countryName": "Barbados",
        "postalCodeFormat": "BB.json",
        "alpha2": "BB",
        "alpha3": "BRB",
        "numeric3": "52"
    },
    "BY": {
        "countryName": "Belarus",
        "postalCodeFormat": "6Digits.json",
        "alpha2": "BY",
        "alpha3": "BLR",
        "numeric3": "112"
    },
    "BE": {
        "countryName": "Belgium",
        "postalCodeFormat": "4Digits.json",
        "alpha2": "BE",
        "alpha3": "BEL",
        "numeric3": "56"
    },
    "BZ": {
        "countryName": "Belize",
        "alpha2": "BZ",
        "alpha3": "BLZ",
        "numeric3": "84"
    },
    "BJ": {
        "countryName": "Benin",
        "alpha2": "BJ",
        "alpha3": "BEN",
        "numeric3": "204"
    },
    "BM": {
        "countryName": "Bermuda",
        "alpha2": "BM",
        "alpha3": "BMU",
        "numeric3": "60"
    },
    "BT": {
        "countryName": "Bhutan",
        "postalCodeFormat": "5Digits.json",
        "alpha2": "BT",
        "alpha3": "BTN",
        "numeric3": "64"
    },
    "BO": {
        "countryName": "Bolivia",
        "postalCodeFormat": "4Digits.json",
        "alpha2": "BO",
        "alpha3": "BOL",
        "numeric3": "68"
    },
    "BA": {
        "countryName": "Bosnia and Herzegovina",
        "postalCodeFormat": "5Digits.json",
        "alpha2": "BA",
        "alpha3": "BIH",
        "numeric3": "70"
    },
    "BW": {
        "countryName": "Botswana",
        "alpha2": "BW",
        "alpha3": "BWA",
        "numeric3": "72"
    },
    "BV": {
        "countryName": "Bouvet Island",
        "alpha2": "BV",
        "alpha3": "BVT",
        "numeric3": "74"
    },
    "BR": {
        "countryName": "Brazil",
        "postalCodeFormat": "8Digits.json",
        "alpha2": "BR",
        "alpha3": "BRA",
        "numeric3": "76"
    },
    "VG": {
        "countryName": "British Virgin Islands",
        "postalCodeFormat": "VG.json",
        "alpha2": "VG",
        "alpha3": "VGB",
        "numeric3": "92"
    },
    "IO": {
        "countryName": "British Indian Ocean Territory",
        "postalCodeFormat": "IO.json",
        "alpha2": "IO",
        "alpha3": "IOT",
        "numeric3": "86"
    },
    "BN": {
        "countryName": "Brunei Darussalam",
        "postalCodeFormat": "BN.json",
        "alpha2": "BN",
        "alpha3": "BRN",
        "numeric3": "96"
    },
    "BG": {
        "countryName": "Bulgaria",
        "postalCodeFormat": "4Digits.json",
        "alpha2": "BG",
        "alpha3": "BGR",
        "numeric3": "100"
    },
    "BF": {
        "countryName": "Burkina Faso",
        "alpha2": "BF",
        "alpha3": "BFA",
        "numeric3": "854"
    },
    "BI": {
        "countryName": "Burundi",
        "alpha2": "BI",
        "alpha3": "BDI",
        "numeric3": "108"
    },
    "KH": {
        "countryName": "Cambodia",
        "postalCodeFormat": "5Digits.json",
        "alpha2": "KH",
        "alpha3": "KHM",
        "numeric3": "116"
    },
    "CM": {
        "countryName": "Cameroon",
        "alpha2": "CM",
        "alpha3": "CMR",
        "numeric3": "120"
    },
    "CA": {
        "countryName": "Canada",
        "postalCodeFormat": "CA.json",
        "alpha2": "CA",
        "alpha3": "CAN",
        "numeric3": "124"
    },
    "CV": {
        "countryName": "Cape Verde",
        "postalCodeFormat": "4Digits.json",
        "alpha2": "CV",
        "alpha3": "CPV",
        "numeric3": "132"
    },
    "KY": {
        "countryName": "Cayman Islands",
        "postalCodeFormat": "KY.json",
        "alpha2": "KY",
        "alpha3": "CYM",
        "numeric3": "136"
    },
    "CF": {
        "countryName": "Central African Republic",
        "alpha2": "CF",
        "alpha3": "CAF",
        "numeric3": "140"
    },
    "TD": {
        "countryName": "Chad",
        "postalCodeFormat": "5Digits.json",
        "alpha2": "TD",
        "alpha3": "TCD",
        "numeric3": "148"
    },
    "CL": {
        "countryName": "Chile",
        "postalCodeFormat": "7Digits.json",
        "alpha2": "CL",
        "alpha3": "CHL",
        "numeric3": "152"
    },
    "CN": {
        "countryName": "China",
        "postalCodeFormat": "6Digits.json",
        "alpha2": "CN",
        "alpha3": "CHN",
        "numeric3": "156"
    },
    "HK": {
        "countryName": "Hong Kong, Special Administrative Region of China",
        "alpha2": "HK",
        "alpha3": "HKG",
        "numeric3": "344"
    },
    "MO": {
        "countryName": "Macao, Special Administrative Region of China",
        "alpha2": "MO",
        "alpha3": "MAC",
        "numeric3": "446"
    },
    "CX": {
        "countryName": "Christmas Island",
        "postalCodeFormat": "4Digits.json",
        "alpha2": "CX",
        "alpha3": "CXR",
        "numeric3": "162"
    },
    "CC": {
        "countryName": "Cocos (Keeling) Islands",
        "postalCodeFormat": "4Digits.json",
        "alpha2": "CC",
        "alpha3": "CCK",
        "numeric3": "166"
    },
    "CO": {
        "countryName": "Colombia",
        "postalCodeFormat": "6Digits.json",
        "alpha2": "CO",
        "alpha3": "COL",
        "numeric3": "170"
    },
    "KM": {
        "countryName": "Comoros",
        "alpha2": "KM",
        "alpha3": "COM",
        "numeric3": "174"
    },
    "CG": {
        "countryName": "Congo (Brazzaville)",
        "alpha2": "CG",
        "alpha3": "COG",
        "numeric3": "178"
    },
    "CD": {
        "countryName": "Congo, Democratic Republic of the",
        "alpha2": "CD",
        "alpha3": "COD",
        "numeric3": "180"
    },
    "CK": {
        "countryName": "Cook Islands",
        "alpha2": "CK",
        "alpha3": "COK",
        "numeric3": "184"
    },
    "CR": {
        "countryName": "Costa Rica",
        "postalCodeFormat": "5Digits.json",
        "alpha2": "CR",
        "alpha3": "CRI",
        "numeric3": "188"
    },
    "CI": {
        "countryName": "Côte d'Ivoire",
        "alpha2": "CI",
        "alpha3": "CIV",
        "numeric3": "384"
    },
    "HR": {
        "countryName": "Croatia",
        "postalCodeFormat": "5Digits.json",
        "alpha2": "HR",
        "alpha3": "HRV",
        "numeric3": "191"
    },
    "CU": {
        "countryName": "Cuba",
        "postalCodeFormat": "5Digits.json",
        "alpha2": "CU",
        "alpha3": "CUB",
        "numeric3": "192"
    },
    "CY": {
        "countryName": "Cyprus",
        "postalCodeFormat": "4Digits.json",
        "alpha2": "CY",
        "alpha3": "CYP",
        "numeric3": "196"
    },
    "CZ": {
        "countryName": "Czech Republic",
        "postalCodeFormat": "5Digits.json",
        "alpha2": "CZ",
        "alpha3": "CZE",
        "numeric3": "203"
    },
    "DK": {
        "countryName": "Denmark",
        "postalCodeFormat": "DK.json",
        "alpha2": "DK",
        "alpha3": "DNK",
        "numeric3": "208"
    },
    "DJ": {
        "countryName": "Djibouti",
        "alpha2": "DJ",
        "alpha3": "DJI",
        "numeric3": "262"
    },
    "DM": {
        "countryName": "Dominica",
        "alpha2": "DM",
        "alpha3": "DMA",
        "numeric3": "212"
    },
    "DO": {
        "countryName": "Dominican Republic",
        "postalCodeFormat": "5Digits.json",
        "alpha2": "DO",
        "alpha3": "DOM",
        "numeric3": "214"
    },
    "EC": {
        "countryName": "Ecuador",
        "postalCodeFormat": "6Digits.json",
        "alpha2": "EC",
        "alpha3": "ECU",
        "numeric3": "218"
    },
    "EG": {
        "countryName": "Egypt",
        "postalCodeFormat": "5Digits.json",
        "alpha2": "EG",
        "alpha3": "EGY",
        "numeric3": "818"
    },
    "SV": {
        "countryName": "El Salvador",
        "postalCodeFormat": "4Digits.json",
        "alpha2": "SV",
        "alpha3": "SLV",
        "numeric3": "222"
    },
    "GQ": {
        "countryName": "Equatorial Guinea",
        "alpha2": "GQ",
        "alpha3": "GNQ",
        "numeric3": "226"
    },
    "ER": {
        "countryName": "Eritrea",
        "alpha2": "ER",
        "alpha3": "ERI",
        "numeric3": "232"
    },
    "EE": {
        "countryName": "Estonia",
        "postalCodeFormat": "5Digits.json",
        "alpha2": "EE",
        "alpha3": "EST",
        "numeric3": "233"
    },
    "ET": {
        "countryName": "Ethiopia",
        "postalCodeFormat": "4Digits.json",
        "alpha2": "ET",
        "alpha3": "ETH",
        "numeric3": "231"
    },
    "FK": {
        "countryName": "Falkland Islands (Malvinas)",
        "postalCodeFormat": "FK.json",
        "alpha2": "FK",
        "alpha3": "FLK",
        "numeric3": "238"
    },
    "FO": {
        "countryName": "Faroe Islands",
        "postalCodeFormat": "3Digits.json",
        "alpha2": "FO",
        "alpha3": "FRO",
        "numeric3": "234"
    },
    "FJ": {
        "countryName": "Fiji",
        "alpha2": "FJ",
        "alpha3": "FJI",
        "numeric3": "242"
    },
    "FI": {
        "countryName": "Finland",
        "postalCodeFormat": "5Digits.json",
        "alpha2": "FI",
        "alpha3": "FIN",
        "numeric3": "246"
    },
    "FR": {
        "countryName": "France",
        "postalCodeFormat": "5Digits.json",
        "alpha2": "FR",
        "alpha3": "FRA",
        "numeric3": "250"
    },
    "GF": {
        "countryName": "French Guiana",
        "postalCodeFormat": "GF.json",
        "alpha2": "GF",
        "alpha3": "GUF",
        "numeric3": "254"
    },
    "PF": {
        "countryName": "French Polynesia",
        "postalCodeFormat": "PF.json",
        "alpha2": "PF",
        "alpha3": "PYF",
        "numeric3": "258"
    },
    "TF": {
        "countryName": "French Southern Territories",
        "alpha2": "TF",
        "alpha3": "ATF",
        "numeric3": "260"
    },
    "GA": {
        "countryName": "Gabon",
        "alpha2": "GA",
        "alpha3": "GAB",
        "numeric3": "266"
    },
    "GM": {
        "countryName": "Gambia",
        "alpha2": "GM",
        "alpha3": "GMB",
        "numeric3": "270"
    },
    "GE": {
        "countryName": "Georgia",
        "postalCodeFormat": "4Digits.json",
        "alpha2": "GE",
        "alpha3": "GEO",
        "numeric3": "268"
    },
    "DE": {
        "countryName": "Germany",
        "postalCodeFormat": "5Digits.json",
        "alpha2": "DE",
        "alpha3": "DEU",
        "numeric3": "276"
    },
    "GH": {
        "countryName": "Ghana",
        "alpha2": "GH",
        "alpha3": "GHA",
        "numeric3": "288"
    },
    "GI": {
        "countryName": "Gibraltar",
        "postalCodeFormat": "GI.json",
        "alpha2": "GI",
        "alpha3": "GIB",
        "numeric3": "292"
    },
    "GR": {
        "countryName": "Greece",
        "postalCodeFormat": "5Digits.json",
        "alpha2": "GR",
        "alpha3": "GRC",
        "numeric3": "300"
    },
    "GL": {
        "countryName": "Greenland",
        "postalCodeFormat": "4Digits.json",
        "alpha2": "GL",
        "alpha3": "GRL",
        "numeric3": "304"
    },
    "GD": {
        "countryName": "Grenada",
        "alpha2": "GD",
        "alpha3": "GRD",
        "numeric3": "308"
    },
    "GP": {
        "countryName": "Guadeloupe",
        "postalCodeFormat": "GP.json",
        "alpha2": "GP",
        "alpha3": "GLP",
        "numeric3": "312"
    },
    "GU": {
        "countryName": "Guam",
        "postalCodeFormat": "US.json",
        "alpha2": "GU",
        "alpha3": "GUM",
        "numeric3": "316"
    },
    "GT": {
        "countryName": "Guatemala",
        "postalCodeFormat": "5Digits.json",
        "alpha2": "GT",
        "alpha3": "GTM",
        "numeric3": "320"
    },
    "GG": {
        "countryName": "Guernsey",
        "postalCodeFormat": "GG.json",
        "alpha2": "GG",
        "alpha3": "GGY",
        "numeric3": "831"
    },
    "GN": {
        "countryName": "Guinea",
        "postalCodeFormat": "3Digits.json",
        "alpha2": "GN",
        "alpha3": "GIN",
        "numeric3": "324"
    },
    "GW": {
        "countryName": "Guinea-Bissau",
        "postalCodeFormat": "4Digits.json",
        "alpha2": "GW",
        "alpha3": "GNB",
        "numeric3": "624"
    },
    "GY": {
        "countryName": "Guyana",
        "alpha2": "GY",
        "alpha3": "GUY",
        "numeric3": "328"
    },
    "HT": {
        "countryName": "Haiti",
        "postalCodeFormat": "4Digits.json",
        "alpha2": "HT",
        "alpha3": "HTI",
        "numeric3": "332"
    },
    "HM": {
        "countryName": "Heard Island and Mcdonald Islands",
        "postalCodeFormat": "4Digits.json",
        "alpha2": "HM",
        "alpha3": "HMD",
        "numeric3": "334"
    },
    "VA": {
        "countryName": "Holy See (Vatican City State)",
        "postalCodeFormat": "VA.json",
        "alpha2": "VA",
        "alpha3": "VAT",
        "numeric3": "336"
    },
    "HN": {
        "countryName": "Honduras",
        "postalCodeFormat": "HN.json",
        "alpha2": "HN",
        "alpha3": "HND",
        "numeric3": "340"
    },
    "HU": {
        "countryName": "Hungary",
        "postalCodeFormat": "4Digits.json",
        "alpha2": "HU",
        "alpha3": "HUN",
        "numeric3": "348"
    },
    "IS": {
        "countryName": "Iceland",
        "postalCodeFormat": "3Digits.json",
        "alpha2": "IS",
        "alpha3": "ISL",
        "numeric3": "352"
    },
    "IN": {
        "countryName": "India",
        "postalCodeFormat": "6Digits.json",
        "alpha2": "IN",
        "alpha3": "IND",
        "numeric3": "356"
    },
    "IC": {
        "countryName": "Canary Islands",
        "postalCodeFormat": "5Digits.json",
        "alpha2": "IC",
        "alpha3": "",
        "numeric3": ""
    },
    "ID": {
        "countryName": "Indonesia",
        "postalCodeFormat": "5Digits.json",
        "alpha2": "ID",
        "alpha3": "IDN",
        "numeric3": "360"
    },
    "IR": {
        "countryName": "Iran, Islamic Republic of",
        "postalCodeFormat": "10Digits.json",
        "alpha2": "IR",
        "alpha3": "IRN",
        "numeric3": "364"
    },
    "IQ": {
        "countryName": "Iraq",
        "postalCodeFormat": "5Digits.json",
        "alpha2": "IQ",
        "alpha3": "IRQ",
        "numeric3": "368"
    },
    "IE": {
        "countryName": "Ireland",
        "postalCodeFormat": "IE.json",
        "alpha2": "IE",
        "alpha3": "IRL",
        "numeric3": "372"
    },
    "IM": {
        "countryName": "Isle of Man",
        "postalCodeFormat": "IM.json",
        "alpha2": "IM",
        "alpha3": "IMN",
        "numeric3": "833"
    },
    "IL": {
        "countryName": "Israel",
        "postalCodeFormat": "7Digits.json",
        "alpha2": "IL",
        "alpha3": "ISR",
        "numeric3": "376"
    },
    "IT": {
        "countryName": "Italy",
        "postalCodeFormat": "5Digits.json",
        "alpha2": "IT",
        "alpha3": "ITA",
        "numeric3": "380"
    },
    "JM": {
        "countryName": "Jamaica",
        "postalCodeFormat": "2Digits.json",
        "alpha2": "JM",
        "alpha3": "JAM",
        "numeric3": "388"
    },
    "JP": {
        "countryName": "Japan",
        "postalCodeFormat": "7Digits.json",
        "alpha2": "JP",
        "alpha3": "JPN",
        "numeric3": "392"
    },
    "JE": {
        "countryName": "Jersey",
        "postalCodeFormat": "JE.json",
        "alpha2": "JE",
        "alpha3": "JEY",
        "numeric3": "832"
    },
    "JO": {
        "countryName": "Jordan",
        "postalCodeFormat": "5Digits.json",
        "alpha2": "JO",
        "alpha3": "JOR",
        "numeric3": "400"
    },
    "KZ": {
        "countryName": "Kazakhstan",
        "postalCodeFormat": "6Digits.json",
        "alpha2": "KZ",
        "alpha3": "KAZ",
        "numeric3": "398"
    },
    "KE": {
        "countryName": "Kenya",
        "postalCodeFormat": "5Digits.json",
        "alpha2": "KE",
        "alpha3": "KEN",
        "numeric3": "404"
    },
    "KI": {
        "countryName": "Kiribati",
        "alpha2": "KI",
        "alpha3": "KIR",
        "numeric3": "296"
    },
    "KP": {
        "countryName": "Korea, Democratic People's Republic of",
        "alpha2": "KP",
        "alpha3": "PRK",
        "numeric3": "408"
    },
    "KR": {
        "countryName": "Korea, Republic of",
        "postalCodeFormat": "5Digits.json",
        "alpha2": "KR",
        "alpha3": "KOR",
        "numeric3": "410"
    },
    "KW": {
        "countryName": "Kuwait",
        "postalCodeFormat": "5Digits.json",
        "alpha2": "KW",
        "alpha3": "KWT",
        "numeric3": "414"
    },
    "KG": {
        "countryName": "Kyrgyzstan",
        "postalCodeFormat": "6Digits.json",
        "alpha2": "KG",
        "alpha3": "KGZ",
        "numeric3": "417"
    },
    "LA": {
        "countryName": "Lao PDR",
        "postalCodeFormat": "5Digits.json",
        "alpha2": "LA",
        "alpha3": "LAO",
        "numeric3": "418"
    },
    "LV": {
        "countryName": "Latvia",
        "postalCodeFormat": "LV.json",
        "alpha2": "LV",
        "alpha3": "LVA",
        "numeric3": "428"
    },
    "LB": {
        "countryName": "Lebanon",
        "postalCodeFormat": "LB.json",
        "alpha2": "LB",
        "alpha3": "LBN",
        "numeric3": "422"
    },
    "LS": {
        "countryName": "Lesotho",
        "postalCodeFormat": "3Digits.json",
        "alpha2": "LS",
        "alpha3": "LSO",
        "numeric3": "426"
    },
    "LR": {
        "countryName": "Liberia",
        "postalCodeFormat": "4Digits.json",
        "alpha2": "LR",
        "alpha3": "LBR",
        "numeric3": "430"
    },
    "LY": {
        "countryName": "Libya",
        "postalCodeFormat": "5Digits.json",
        "alpha2": "LY",
        "alpha3": "LBY",
        "numeric3": "434"
    },
    "LI": {
        "countryName": "Liechtenstein",
        "postalCodeFormat": "4Digits.json",
        "alpha2": "LI",
        "alpha3": "LIE",
        "numeric3": "438"
    },
    "LT": {
        "countryName": "Lithuania",
        "postalCodeFormat": "LT.json",
        "alpha2": "LT",
        "alpha3": "LTU",
        "numeric3": "440"
    },
    "LU": {
        "countryName": "Luxembourg",
        "postalCodeFormat": "LU.json",
        "alpha2": "LU",
        "alpha3": "LUX",
        "numeric3": "442"
    },
    "MK": {
        "countryName": "Macedonia, Republic of",
        "postalCodeFormat": "4Digits.json",
        "alpha2": "MK",
        "alpha3": "MKD",
        "numeric3": "807"
    },
    "MG": {
        "countryName": "Madagascar",
        "postalCodeFormat": "3Digits.json",
        "alpha2": "MG",
        "alpha3": "MDG",
        "numeric3": "450"
    },
    "MW": {
        "countryName": "Malawi",
        "alpha2": "MW",
        "alpha3": "MWI",
        "numeric3": "454"
    },
    "MY": {
        "countryName": "Malaysia",
        "postalCodeFormat": "5Digits.json",
        "alpha2": "MY",
        "alpha3": "MYS",
        "numeric3": "458"
    },
    "MV": {
        "countryName": "Maldives",
        "postalCodeFormat": "5Digits.json",
        "alpha2": "MV",
        "alpha3": "MDV",
        "numeric3": "462"
    },
    "ML": {
        "countryName": "Mali",
        "alpha2": "ML",
        "alpha3": "MLI",
        "numeric3": "466"
    },
    "MT": {
        "countryName": "Malta",
        "postalCodeFormat": "MT.json",
        "alpha2": "MT",
        "alpha3": "MLT",
        "numeric3": "470"
    },
    "MH": {
        "countryName": "Marshall Islands",
        "postalCodeFormat": "US.json",
        "alpha2": "MH",
        "alpha3": "MHL",
        "numeric3": "584"
    },
    "MQ": {
        "countryName": "Martinique",
        "postalCodeFormat": "5Digits.json",
        "alpha2": "MQ",
        "alpha3": "MTQ",
        "numeric3": "474"
    },
    "MR": {
        "countryName": "Mauritania",
        "alpha2": "MR",
        "alpha3": "MRT",
        "numeric3": "478"
    },
    "MU": {
        "countryName": "Mauritius",
        "postalCodeFormat": "5Digits.json",
        "alpha2": "MU",
        "alpha3": "MUS",
        "numeric3": "480"
    },
    "YT": {
        "countryName": "Mayotte",
        "postalCodeFormat": "5Digits.json",
        "alpha2": "YT",
        "alpha3": "MYT",
        "numeric3": "175"
    },
    "MX": {
        "countryName": "Mexico",
        "postalCodeFormat": "5Digits.json",
        "alpha2": "MX",
        "alpha3": "MEX",
        "numeric3": "484"
    },
    "FM": {
        "countryName": "Micronesia, Federated States of",
        "postalCodeFormat": "US.json",
        "alpha2": "FM",
        "alpha3": "FSM",
        "numeric3": "583"
    },
    "MD": {
        "countryName": "Moldova",
        "postalCodeFormat": "MD.json",
        "alpha2": "MD",
        "alpha3": "MDA",
        "numeric3": "498"
    },
    "MC": {
        "countryName": "Monaco",
        "postalCodeFormat": "MC.json",
        "alpha2": "MC",
        "alpha3": "MCO",
        "numeric3": "492"
    },
    "MN": {
        "countryName": "Mongolia",
        "postalCodeFormat": "5Digits.json",
        "alpha2": "MN",
        "alpha3": "MNG",
        "numeric3": "496"
    },
    "ME": {
        "countryName": "Montenegro",
        "postalCodeFormat": "5Digits.json",
        "alpha2": "ME",
        "alpha3": "MNE",
        "numeric3": "499"
    },
    "MS": {
        "countryName": "Montserrat",
        "postalCodeFormat": "MS.json",
        "alpha2": "MS",
        "alpha3": "MSR",
        "numeric3": "500"
    },
    "MA": {
        "countryName": "Morocco",
        "postalCodeFormat": "5Digits.json",
        "alpha2": "MA",
        "alpha3": "MAR",
        "numeric3": "504"
    },
    "MZ": {
        "countryName": "Mozambique",
        "postalCodeFormat": "4Digits.json",
        "alpha2": "MZ",
        "alpha3": "MOZ",
        "numeric3": "508"
    },
    "MM": {
        "countryName": "Myanmar",
        "postalCodeFormat": "5Digits.json",
        "alpha2": "MM",
        "alpha3": "MMR",
        "numeric3": "104"
    },
    "NA": {
        "countryName": "Namibia",
        "postalCodeFormat": "5Digits.json",
        "alpha2": "NA",
        "alpha3": "NAM",
        "numeric3": "516"
    },
    "NR": {
        "countryName": "Nauru",
        "alpha2": "NR",
        "alpha3": "NRU",
        "numeric3": "520"
    },
    "NP": {
        "countryName": "Nepal",
        "postalCodeFormat": "5Digits.json",
        "alpha2": "NP",
        "alpha3": "NPL",
        "numeric3": "524"
    },
    "NL": {
        "countryName": "Netherlands",
        "postalCodeFormat": "NL.json",
        "alpha2": "NL",
        "alpha3": "NLD",
        "numeric3": "528"
    },
    "AN": {
        "countryName": "Netherlands Antilles",
        "alpha2": "AN",
        "alpha3": "ANT",
        "numeric3": "530"
    },
    "NC": {
        "countryName": "New Caledonia",
        "postalCodeFormat": "NC.json",
        "alpha2": "NC",
        "alpha3": "NCL",
        "numeric3": "540"
    },
    "NZ": {
        "countryName": "New Zealand",
        "postalCodeFormat": "4Digits.json",
        "alpha2": "NZ",
        "alpha3": "NZL",
        "numeric3": "554"
    },
    "NI": {
        "countryName": "Nicaragua",
        "postalCodeFormat": "5Digits.json",
        "alpha2": "NI",
        "alpha3": "NIC",
        "numeric3": "558"
    },
    "NE": {
        "countryName": "Niger",
        "postalCodeFormat": "4Digits.json",
        "alpha2": "NE",
        "alpha3": "NER",
        "numeric3": "562"
    },
    "NG": {
        "countryName": "Nigeria",
        "postalCodeFormat": "6Digits.json",
        "alpha2": "NG",
        "alpha3": "NGA",
        "numeric3": "566"
    },
    "NU": {
        "countryName": "Niue",
        "alpha2": "NU",
        "alpha3": "NIU",
        "numeric3": "570"
    },
    "NF": {
        "countryName": "Norfolk Island",
        "postalCodeFormat": "4Digits.json",
        "alpha2": "NF",
        "alpha3": "NFK",
        "numeric3": "574"
    },
    "MP": {
        "countryName": "Northern Mariana Islands",
        "postalCodeFormat": "US.json",
        "alpha2": "MP",
        "alpha3": "MNP",
        "numeric3": "580"
    },
    "NO": {
        "countryName": "Norway",
        "postalCodeFormat": "4Digits.json",
        "alpha2": "NO",
        "alpha3": "NOR",
        "numeric3": "578"
    },
    "OM": {
        "countryName": "Oman",
        "postalCodeFormat": "3Digits.json",
        "alpha2": "OM",
        "alpha3": "OMN",
        "numeric3": "512"
    },
    "PK": {
        "countryName": "Pakistan",
        "postalCodeFormat": "5Digits.json",
        "alpha2": "PK",
        "alpha3": "PAK",
        "numeric3": "586"
    },
    "PW": {
        "countryName": "Palau",
        "postalCodeFormat": "US.json",
        "alpha2": "PW",
        "alpha3": "PLW",
        "numeric3": "585"
    },
    "PS": {
        "countryName": "Palestinian Territory, Occupied",
        "postalCodeFormat": "3Digits.json",
        "alpha2": "PS",
        "alpha3": "PSE",
        "numeric3": "275"
    },
    "PA": {
        "countryName": "Panama",
        "postalCodeFormat": "4Digits.json",
        "alpha2": "PA",
        "alpha3": "PAN",
        "numeric3": "591"
    },
    "PG": {
        "countryName": "Papua New Guinea",
        "postalCodeFormat": "3Digits.json",
        "alpha2": "PG",
        "alpha3": "PNG",
        "numeric3": "598"
    },
    "PY": {
        "countryName": "Paraguay",
        "postalCodeFormat": "4Digits.json",
        "alpha2": "PY",
        "alpha3": "PRY",
        "numeric3": "600"
    },
    "PE": {
        "countryName": "Peru",
        "postalCodeFormat": "5Digits.json",
        "alpha2": "PE",
        "alpha3": "PER",
        "numeric3": "604"
    },
    "PH": {
        "countryName": "Philippines",
        "postalCodeFormat": "4Digits.json",
        "alpha2": "PH",
        "alpha3": "PHL",
        "numeric3": "608"
    },
    "PN": {
        "countryName": "Pitcairn",
        "postalCodeFormat": "PN.json",
        "alpha2": "PN",
        "alpha3": "PCN",
        "numeric3": "612"
    },
    "PL": {
        "countryName": "Poland",
        "postalCodeFormat": "PL.json",
        "alpha2": "PL",
        "alpha3": "POL",
        "numeric3": "616"
    },
    "PT": {
        "countryName": "Portugal",
        "postalCodeFormat": "PT.json",
        "alpha2": "PT",
        "alpha3": "PRT",
        "numeric3": "620"
    },
    "PR": {
        "countryName": "Puerto Rico",
        "postalCodeFormat": "US.json",
        "alpha2": "PR",
        "alpha3": "PRI",
        "numeric3": "630"
    },
    "QA": {
        "countryName": "Qatar",
        "alpha2": "QA",
        "alpha3": "QAT",
        "numeric3": "634"
    },
    "RE": {
        "countryName": "Réunion",
        "postalCodeFormat": "RE.json",
        "alpha2": "RE",
        "alpha3": "REU",
        "numeric3": "638"
    },
    "RO": {
        "countryName": "Romania",
        "postalCodeFormat": "6Digits.json",
        "alpha2": "RO",
        "alpha3": "ROU",
        "numeric3": "642"
    },
    "RU": {
        "countryName": "Russian Federation",
        "postalCodeFormat": "RU.json",
        "alpha2": "RU",
        "alpha3": "RUS",
        "numeric3": "643"
    },
    "RW": {
        "countryName": "Rwanda",
        "alpha2": "RW",
        "alpha3": "RWA",
        "numeric3": "646"
    },
    "BL": {
        "countryName": "Saint-Barthélemy",
        "postalCodeFormat": "BL.json",
        "alpha2": "BL",
        "alpha3": "BLM",
        "numeric3": "652"
    },
    "SH": {
        "countryName": "Saint Helena",
        "postalCodeFormat": "SH.json",
        "alpha2": "SH",
        "alpha3": "SHN",
        "numeric3": "654"
    },
    "KN": {
        "countryName": "Saint Kitts and Nevis",
        "alpha2": "KN",
        "alpha3": "KNA",
        "numeric3": "659"
    },
    "LC": {
        "countryName": "Saint Lucia",
        "postalCodeFormat": "LC.json",
        "alpha2": "LC",
        "alpha3": "LCA",
        "numeric3": "662"
    },
    "MF": {
        "countryName": "Saint-Martin (French part)",
        "postalCodeFormat": "MF.json",
        "alpha2": "MF",
        "alpha3": "MAF",
        "numeric3": "663"
    },
    "PM": {
        "countryName": "Saint Pierre and Miquelon",
        "postalCodeFormat": "PM.json",
        "alpha2": "PM",
        "alpha3": "SPM",
        "numeric3": "666"
    },
    "VC": {
        "countryName": "Saint Vincent and Grenadines",
        "postalCodeFormat": "VC.json",
        "alpha2": "VC",
        "alpha3": "VCT",
        "numeric3": "670"
    },
    "WS": {
        "countryName": "Samoa",
        "postalCodeFormat": "WS.json",
        "alpha2": "WS",
        "alpha3": "WSM",
        "numeric3": "882"
    },
    "SM": {
        "countryName": "San Marino",
        "postalCodeFormat": "SM.json",
        "alpha2": "SM",
        "alpha3": "SMR",
        "numeric3": "674"
    },
    "ST": {
        "countryName": "Sao Tome and Principe",
        "alpha2": "ST",
        "alpha3": "STP",
        "numeric3": "678"
    },
    "SA": {
        "countryName": "Saudi Arabia",
        "postalCodeFormat": "US.json",
        "alpha2": "SA",
        "alpha3": "SAU",
        "numeric3": "682"
    },
    "SN": {
        "countryName": "Senegal",
        "postalCodeFormat": "5Digits.json",
        "alpha2": "SN",
        "alpha3": "SEN",
        "numeric3": "686"
    },
    "RS": {
        "countryName": "Serbia",
        "postalCodeFormat": "5Digits.json",
        "alpha2": "RS",
        "alpha3": "SRB",
        "numeric3": "688"
    },
    "SC": {
        "countryName": "Seychelles",
        "alpha2": "SC",
        "alpha3": "SYC",
        "numeric3": "690"
    },
    "SL": {
        "countryName": "Sierra Leone",
        "alpha2": "SL",
        "alpha3": "SLE",
        "numeric3": "694"
    },
    "SG": {
        "countryName": "Singapore",
        "postalCodeFormat": "6Digits.json",
        "alpha2": "SG",
        "alpha3": "SGP",
        "numeric3": "702"
    },
    "SK": {
        "countryName": "Slovakia",
        "postalCodeFormat": "5Digits.json",
        "alpha2": "SK",
        "alpha3": "SVK",
        "numeric3": "703"
    },
    "SI": {
        "countryName": "Slovenia",
        "postalCodeFormat": "4Digits.json",
        "alpha2": "SI",
        "alpha3": "SVN",
        "numeric3": "705"
    },
    "SB": {
        "countryName": "Solomon Islands",
        "alpha2": "SB",
        "alpha3": "SLB",
        "numeric3": "90"
    },
    "SO": {
        "countryName": "Somalia",
        "postalCodeFormat": "SO.json",
        "alpha2": "SO",
        "alpha3": "SOM",
        "numeric3": "706"
    },
    "ZA": {
        "countryName": "South Africa",
        "postalCodeFormat": "4Digits.json",
        "alpha2": "ZA",
        "alpha3": "ZAF",
        "numeric3": "710"
    },
    "GS": {
        "countryName": "South Georgia and the South Sandwich Islands",
        "postalCodeFormat": "GS.json",
        "alpha2": "GS",
        "alpha3": "SGS",
        "numeric3": "239"
    },
    "SS": {
        "countryName": "South Sudan",
        "alpha2": "SS",
        "alpha3": "SSD",
        "numeric3": "728"
    },
    "ES": {
        "countryName": "Spain",
        "postalCodeFormat": "5Digits.json",
        "alpha2": "ES",
        "alpha3": "ESP",
        "numeric3": "724"
    },
    "LK": {
        "countryName": "Sri Lanka",
        "postalCodeFormat": "5Digits.json",
        "alpha2": "LK",
        "alpha3": "LKA",
        "numeric3": "144"
    },
    "SD": {
        "countryName": "Sudan",
        "postalCodeFormat": "5Digits.json",
        "alpha2": "SD",
        "alpha3": "SDN",
        "numeric3": "736"
    },
    "SR": {
        "countryName": "Suriname *",
        "alpha2": "SR",
        "alpha3": "SUR",
        "numeric3": "740"
    },
    "SJ": {
        "countryName": "Svalbard and Jan Mayen Islands",
        "postalCodeFormat": "4Digits.json",
        "alpha2": "SJ",
        "alpha3": "SJM",
        "numeric3": "744"
    },
    "SZ": {
        "countryName": "Swaziland",
        "postalCodeFormat": "SZ.json",
        "alpha2": "SZ",
        "alpha3": "SWZ",
        "numeric3": "748"
    },
    "SE": {
        "countryName": "Sweden",
        "postalCodeFormat": "5Digits.json",
        "alpha2": "SE",
        "alpha3": "SWE",
        "numeric3": "752"
    },
    "CH": {
        "countryName": "Switzerland",
        "postalCodeFormat": "4Digits.json",
        "alpha2": "CH",
        "alpha3": "CHE",
        "numeric3": "756"
    },
    "SY": {
        "countryName": "Syrian Arab Republic (Syria)",
        "alpha2": "SY",
        "alpha3": "SYR",
        "numeric3": "760"
    },
    "TW": {
        "countryName": "Taiwan, Republic of China",
        "postalCodeFormat": "TW.json",
        "alpha2": "TW",
        "alpha3": "TWN",
        "numeric3": "158"
    },
    "TJ": {
        "countryName": "Tajikistan",
        "postalCodeFormat": "6Digits.json",
        "alpha2": "TJ",
        "alpha3": "TJK",
        "numeric3": "762"
    },
    "TZ": {
        "countryName": "Tanzania *, United Republic of",
        "postalCodeFormat": "5Digits.json",
        "alpha2": "TZ",
        "alpha3": "TZA",
        "numeric3": "834"
    },
    "TH": {
        "countryName": "Thailand",
        "postalCodeFormat": "5Digits.json",
        "alpha2": "TH",
        "alpha3": "THA",
        "numeric3": "764"
    },
    "TL": {
        "countryName": "Timor-Leste",
        "alpha2": "TL",
        "alpha3": "TLS",
        "numeric3": "626"
    },
    "TG": {
        "countryName": "Togo",
        "alpha2": "TG",
        "alpha3": "TGO",
        "numeric3": "768"
    },
    "TK": {
        "countryName": "Tokelau",
        "alpha2": "TK",
        "alpha3": "TKL",
        "numeric3": "772"
    },
    "TO": {
        "countryName": "Tonga",
        "alpha2": "TO",
        "alpha3": "TON",
        "numeric3": "776"
    },
    "TT": {
        "countryName": "Trinidad and Tobago",
        "postalCodeFormat": "6Digits.json",
        "alpha2": "TT",
        "alpha3": "TTO",
        "numeric3": "780"
    },
    "TN": {
        "countryName": "Tunisia",
        "postalCodeFormat": "4Digits.json",
        "alpha2": "TN",
        "alpha3": "TUN",
        "numeric3": "788"
    },
    "TR": {
        "countryName": "Turkey",
        "postalCodeFormat": "5Digits.json",
        "alpha2": "TR",
        "alpha3": "TUR",
        "numeric3": "792"
    },
    "TM": {
        "countryName": "Turkmenistan",
        "postalCodeFormat": "6Digits.json",
        "alpha2": "TM",
        "alpha3": "TKM",
        "numeric3": "795"
    },
    "TC": {
        "countryName": "Turks and Caicos Islands",
        "postalCodeFormat": "TC.json",
        "alpha2": "TC",
        "alpha3": "TCA",
        "numeric3": "796"
    },
    "TV": {
        "countryName": "Tuvalu",
        "alpha2": "TV",
        "alpha3": "TUV",
        "numeric3": "798"
    },
    "UG": {
        "countryName": "Uganda",
        "alpha2": "UG",
        "alpha3": "UGA",
        "numeric3": "800"
    },
    "UA": {
        "countryName": "Ukraine",
        "postalCodeFormat": "5Digits.json",
        "alpha2": "UA",
        "alpha3": "UKR",
        "numeric3": "804"
    },
    "AE": {
        "countryName": "United Arab Emirates",
        "alpha2": "AE",
        "alpha3": "ARE",
        "numeric3": "784"
    },
    "GB": {
        "countryName": "United Kingdom",
        "postalCodeFormat": "GB.json",
        "alpha2": "GB",
        "alpha3": "GBR",
        "numeric3": "826"
    },
    "US": {
        "countryName": "United States of America",
        "postalCodeFormat": "US.json",
        "alpha2": "US",
        "alpha3": "USA",
        "numeric3": "840"
    },
    "UM": {
        "countryName": "United States Minor Outlying Islands",
        "alpha2": "UM",
        "alpha3": "UMI",
        "numeric3": "581"
    },
    "UY": {
        "countryName": "Uruguay",
        "postalCodeFormat": "5Digits.json",
        "alpha2": "UY",
        "alpha3": "URY",
        "numeric3": "858"
    },
    "UZ": {
        "countryName": "Uzbekistan",
        "postalCodeFormat": "6Digits.json",
        "alpha2": "UZ",
        "alpha3": "UZB",
        "numeric3": "860"
    },
    "VU": {
        "countryName": "Vanuatu",
        "alpha2": "VU",
        "alpha3": "VUT",
        "numeric3": "548"
    },
    "VE": {
        "countryName": "Venezuela (Bolivarian Republic of)",
        "postalCodeFormat": "VE.json",
        "alpha2": "VE",
        "alpha3": "VEN",
        "numeric3": "862"
    },
    "VN": {
        "countryName": "Viet Nam",
        "postalCodeFormat": "6Digits.json",
        "alpha2": "VN",
        "alpha3": "VNM",
        "numeric3": "704"
    },
    "VI": {
        "countryName": "Virgin Islands, US",
        "postalCodeFormat": "US.json",
        "alpha2": "VI",
        "alpha3": "VIR",
        "numeric3": "850"
    },
    "WF": {
        "countryName": "Wallis and Futuna Islands",
        "postalCodeFormat": "WF.json",
        "alpha2": "WF",
        "alpha3": "WLF",
        "numeric3": "876"
    },
    "EH": {
        "countryName": "Western Sahara",
        "alpha2": "EH",
        "alpha3": "ESH",
        "numeric3": "732"
    },
    "YE": {
        "countryName": "Yemen",
        "alpha2": "YE",
        "alpha3": "YEM",
        "numeric3": "887"
    },
    "ZM": {
        "countryName": "Zambia",
        "postalCodeFormat": "5Digits.json",
        "alpha2": "ZM",
        "alpha3": "ZMB",
        "numeric3": "894"
    },
    "ZW": {
        "countryName": "Zimbabwe",
        "alpha2": "ZW",
        "alpha3": "ZWE",
        "numeric3": "716"
    }
}

},{}],70:[function(require,module,exports){
module.exports={
    "AFG": {
        "countryName": "Afghanistan",
        "postalCodeFormat": "4Digits.json",
        "alpha2": "AF",
        "alpha3": "AFG",
        "numeric3": "4"
    },
    "ALA": {
        "countryName": "Aland Islands",
        "postalCodeFormat": "AX.json",
        "alpha2": "AX",
        "alpha3": "ALA",
        "numeric3": "248"
    },
    "ALB": {
        "countryName": "Albania",
        "postalCodeFormat": "4Digits.json",
        "alpha2": "AL",
        "alpha3": "ALB",
        "numeric3": "8"
    },
    "DZA": {
        "countryName": "Algeria",
        "postalCodeFormat": "5Digits.json",
        "alpha2": "DZ",
        "alpha3": "DZA",
        "numeric3": "12"
    },
    "ASM": {
        "countryName": "American Samoa",
        "postalCodeFormat": "5Digits.json",
        "alpha2": "AS",
        "alpha3": "ASM",
        "numeric3": "16"
    },
    "AND": {
        "countryName": "Andorra",
        "postalCodeFormat": "AD.json",
        "alpha2": "AD",
        "alpha3": "AND",
        "numeric3": "20"
    },
    "AGO": {
        "countryName": "Angola",
        "alpha2": "AO",
        "alpha3": "AGO",
        "numeric3": "24"
    },
    "AIA": {
        "countryName": "Anguilla",
        "postalCodeFormat": "AI.json",
        "alpha2": "AI",
        "alpha3": "AIA",
        "numeric3": "660"
    },
    "ATA": {
        "countryName": "Antarctica",
        "postalCodeFormat": "AQ.json",
        "alpha2": "AQ",
        "alpha3": "ATA",
        "numeric3": "10"
    },
    "ATG": {
        "countryName": "Antigua and Barbuda",
        "alpha2": "AG",
        "alpha3": "ATG",
        "numeric3": "28"
    },
    "ARG": {
        "countryName": "Argentina",
        "postalCodeFormat": "4Digits.json",
        "alpha2": "AR",
        "alpha3": "ARG",
        "numeric3": "32"
    },
    "ARM": {
        "countryName": "Armenia",
        "postalCodeFormat": "4Digits.json",
        "alpha2": "AM",
        "alpha3": "ARM",
        "numeric3": "51"
    },
    "ABW": {
        "countryName": "Aruba",
        "alpha2": "AW",
        "alpha3": "ABW",
        "numeric3": "533"
    },
    "AUS": {
        "countryName": "Australia",
        "postalCodeFormat": "4Digits.json",
        "alpha2": "AU",
        "alpha3": "AUS",
        "numeric3": "36"
    },
    "AUT": {
        "countryName": "Austria",
        "postalCodeFormat": "4Digits.json",
        "alpha2": "AT",
        "alpha3": "AUT",
        "numeric3": "40"
    },
    "AZE": {
        "countryName": "Azerbaijan",
        "postalCodeFormat": "AZ.json",
        "alpha2": "AZ",
        "alpha3": "AZE",
        "numeric3": "31"
    },
    "BHS": {
        "countryName": "Bahamas",
        "alpha2": "BS",
        "alpha3": "BHS",
        "numeric3": "44"
    },
    "BHR": {
        "countryName": "Bahrain",
        "postalCodeFormat": "BH.json",
        "alpha2": "BH",
        "alpha3": "BHR",
        "numeric3": "48"
    },
    "BGD": {
        "countryName": "Bangladesh",
        "postalCodeFormat": "4Digits.json",
        "alpha2": "BD",
        "alpha3": "BGD",
        "numeric3": "50"
    },
    "BRB": {
        "countryName": "Barbados",
        "postalCodeFormat": "BB.json",
        "alpha2": "BB",
        "alpha3": "BRB",
        "numeric3": "52"
    },
    "BLR": {
        "countryName": "Belarus",
        "postalCodeFormat": "6Digits.json",
        "alpha2": "BY",
        "alpha3": "BLR",
        "numeric3": "112"
    },
    "BEL": {
        "countryName": "Belgium",
        "postalCodeFormat": "4Digits.json",
        "alpha2": "BE",
        "alpha3": "BEL",
        "numeric3": "56"
    },
    "BLZ": {
        "countryName": "Belize",
        "alpha2": "BZ",
        "alpha3": "BLZ",
        "numeric3": "84"
    },
    "BEN": {
        "countryName": "Benin",
        "alpha2": "BJ",
        "alpha3": "BEN",
        "numeric3": "204"
    },
    "BMU": {
        "countryName": "Bermuda",
        "alpha2": "BM",
        "alpha3": "BMU",
        "numeric3": "60"
    },
    "BTN": {
        "countryName": "Bhutan",
        "postalCodeFormat": "5Digits.json",
        "alpha2": "BT",
        "alpha3": "BTN",
        "numeric3": "64"
    },
    "BOL": {
        "countryName": "Bolivia",
        "postalCodeFormat": "4Digits.json",
        "alpha2": "BO",
        "alpha3": "BOL",
        "numeric3": "68"
    },
    "BIH": {
        "countryName": "Bosnia and Herzegovina",
        "postalCodeFormat": "5Digits.json",
        "alpha2": "BA",
        "alpha3": "BIH",
        "numeric3": "70"
    },
    "BWA": {
        "countryName": "Botswana",
        "alpha2": "BW",
        "alpha3": "BWA",
        "numeric3": "72"
    },
    "BVT": {
        "countryName": "Bouvet Island",
        "alpha2": "BV",
        "alpha3": "BVT",
        "numeric3": "74"
    },
    "BRA": {
        "countryName": "Brazil",
        "postalCodeFormat": "8Digits.json",
        "alpha2": "BR",
        "alpha3": "BRA",
        "numeric3": "76"
    },
    "VGB": {
        "countryName": "British Virgin Islands",
        "postalCodeFormat": "VG.json",
        "alpha2": "VG",
        "alpha3": "VGB",
        "numeric3": "92"
    },
    "IOT": {
        "countryName": "British Indian Ocean Territory",
        "postalCodeFormat": "IO.json",
        "alpha2": "IO",
        "alpha3": "IOT",
        "numeric3": "86"
    },
    "BRN": {
        "countryName": "Brunei Darussalam",
        "postalCodeFormat": "BN.json",
        "alpha2": "BN",
        "alpha3": "BRN",
        "numeric3": "96"
    },
    "BGR": {
        "countryName": "Bulgaria",
        "postalCodeFormat": "4Digits.json",
        "alpha2": "BG",
        "alpha3": "BGR",
        "numeric3": "100"
    },
    "BFA": {
        "countryName": "Burkina Faso",
        "alpha2": "BF",
        "alpha3": "BFA",
        "numeric3": "854"
    },
    "BDI": {
        "countryName": "Burundi",
        "alpha2": "BI",
        "alpha3": "BDI",
        "numeric3": "108"
    },
    "KHM": {
        "countryName": "Cambodia",
        "postalCodeFormat": "5Digits.json",
        "alpha2": "KH",
        "alpha3": "KHM",
        "numeric3": "116"
    },
    "CMR": {
        "countryName": "Cameroon",
        "alpha2": "CM",
        "alpha3": "CMR",
        "numeric3": "120"
    },
    "CAN": {
        "countryName": "Canada",
        "postalCodeFormat": "CA.json",
        "alpha2": "CA",
        "alpha3": "CAN",
        "numeric3": "124"
    },
    "CPV": {
        "countryName": "Cape Verde",
        "postalCodeFormat": "4Digits.json",
        "alpha2": "CV",
        "alpha3": "CPV",
        "numeric3": "132"
    },
    "CYM": {
        "countryName": "Cayman Islands",
        "postalCodeFormat": "KY.json",
        "alpha2": "KY",
        "alpha3": "CYM",
        "numeric3": "136"
    },
    "CAF": {
        "countryName": "Central African Republic",
        "alpha2": "CF",
        "alpha3": "CAF",
        "numeric3": "140"
    },
    "TCD": {
        "countryName": "Chad",
        "postalCodeFormat": "5Digits.json",
        "alpha2": "TD",
        "alpha3": "TCD",
        "numeric3": "148"
    },
    "CHL": {
        "countryName": "Chile",
        "postalCodeFormat": "7Digits.json",
        "alpha2": "CL",
        "alpha3": "CHL",
        "numeric3": "152"
    },
    "CHN": {
        "countryName": "China",
        "postalCodeFormat": "6Digits.json",
        "alpha2": "CN",
        "alpha3": "CHN",
        "numeric3": "156"
    },
    "HKG": {
        "countryName": "Hong Kong, Special Administrative Region of China",
        "alpha2": "HK",
        "alpha3": "HKG",
        "numeric3": "344"
    },
    "MAC": {
        "countryName": "Macao, Special Administrative Region of China",
        "alpha2": "MO",
        "alpha3": "MAC",
        "numeric3": "446"
    },
    "CXR": {
        "countryName": "Christmas Island",
        "postalCodeFormat": "4Digits.json",
        "alpha2": "CX",
        "alpha3": "CXR",
        "numeric3": "162"
    },
    "CCK": {
        "countryName": "Cocos (Keeling) Islands",
        "postalCodeFormat": "4Digits.json",
        "alpha2": "CC",
        "alpha3": "CCK",
        "numeric3": "166"
    },
    "COL": {
        "countryName": "Colombia",
        "postalCodeFormat": "6Digits.json",
        "alpha2": "CO",
        "alpha3": "COL",
        "numeric3": "170"
    },
    "COM": {
        "countryName": "Comoros",
        "alpha2": "KM",
        "alpha3": "COM",
        "numeric3": "174"
    },
    "COG": {
        "countryName": "Congo (Brazzaville)",
        "alpha2": "CG",
        "alpha3": "COG",
        "numeric3": "178"
    },
    "COD": {
        "countryName": "Congo, Democratic Republic of the",
        "alpha2": "CD",
        "alpha3": "COD",
        "numeric3": "180"
    },
    "COK": {
        "countryName": "Cook Islands",
        "alpha2": "CK",
        "alpha3": "COK",
        "numeric3": "184"
    },
    "CRI": {
        "countryName": "Costa Rica",
        "postalCodeFormat": "5Digits.json",
        "alpha2": "CR",
        "alpha3": "CRI",
        "numeric3": "188"
    },
    "CIV": {
        "countryName": "Côte d'Ivoire",
        "alpha2": "CI",
        "alpha3": "CIV",
        "numeric3": "384"
    },
    "HRV": {
        "countryName": "Croatia",
        "postalCodeFormat": "5Digits.json",
        "alpha2": "HR",
        "alpha3": "HRV",
        "numeric3": "191"
    },
    "CUB": {
        "countryName": "Cuba",
        "postalCodeFormat": "5Digits.json",
        "alpha2": "CU",
        "alpha3": "CUB",
        "numeric3": "192"
    },
    "CYP": {
        "countryName": "Cyprus",
        "postalCodeFormat": "4Digits.json",
        "alpha2": "CY",
        "alpha3": "CYP",
        "numeric3": "196"
    },
    "CZE": {
        "countryName": "Czech Republic",
        "postalCodeFormat": "5Digits.json",
        "alpha2": "CZ",
        "alpha3": "CZE",
        "numeric3": "203"
    },
    "DNK": {
        "countryName": "Denmark",
        "postalCodeFormat": "DK.json",
        "alpha2": "DK",
        "alpha3": "DNK",
        "numeric3": "208"
    },
    "DJI": {
        "countryName": "Djibouti",
        "alpha2": "DJ",
        "alpha3": "DJI",
        "numeric3": "262"
    },
    "DMA": {
        "countryName": "Dominica",
        "alpha2": "DM",
        "alpha3": "DMA",
        "numeric3": "212"
    },
    "DOM": {
        "countryName": "Dominican Republic",
        "postalCodeFormat": "5Digits.json",
        "alpha2": "DO",
        "alpha3": "DOM",
        "numeric3": "214"
    },
    "ECU": {
        "countryName": "Ecuador",
        "postalCodeFormat": "6Digits.json",
        "alpha2": "EC",
        "alpha3": "ECU",
        "numeric3": "218"
    },
    "EGY": {
        "countryName": "Egypt",
        "postalCodeFormat": "5Digits.json",
        "alpha2": "EG",
        "alpha3": "EGY",
        "numeric3": "818"
    },
    "SLV": {
        "countryName": "El Salvador",
        "postalCodeFormat": "4Digits.json",
        "alpha2": "SV",
        "alpha3": "SLV",
        "numeric3": "222"
    },
    "GNQ": {
        "countryName": "Equatorial Guinea",
        "alpha2": "GQ",
        "alpha3": "GNQ",
        "numeric3": "226"
    },
    "ERI": {
        "countryName": "Eritrea",
        "alpha2": "ER",
        "alpha3": "ERI",
        "numeric3": "232"
    },
    "EST": {
        "countryName": "Estonia",
        "postalCodeFormat": "5Digits.json",
        "alpha2": "EE",
        "alpha3": "EST",
        "numeric3": "233"
    },
    "ETH": {
        "countryName": "Ethiopia",
        "postalCodeFormat": "4Digits.json",
        "alpha2": "ET",
        "alpha3": "ETH",
        "numeric3": "231"
    },
    "FLK": {
        "countryName": "Falkland Islands (Malvinas)",
        "postalCodeFormat": "FK.json",
        "alpha2": "FK",
        "alpha3": "FLK",
        "numeric3": "238"
    },
    "FRO": {
        "countryName": "Faroe Islands",
        "postalCodeFormat": "3Digits.json",
        "alpha2": "FO",
        "alpha3": "FRO",
        "numeric3": "234"
    },
    "FJI": {
        "countryName": "Fiji",
        "alpha2": "FJ",
        "alpha3": "FJI",
        "numeric3": "242"
    },
    "FIN": {
        "countryName": "Finland",
        "postalCodeFormat": "5Digits.json",
        "alpha2": "FI",
        "alpha3": "FIN",
        "numeric3": "246"
    },
    "FRA": {
        "countryName": "France",
        "postalCodeFormat": "5Digits.json",
        "alpha2": "FR",
        "alpha3": "FRA",
        "numeric3": "250"
    },
    "GUF": {
        "countryName": "French Guiana",
        "postalCodeFormat": "GF.json",
        "alpha2": "GF",
        "alpha3": "GUF",
        "numeric3": "254"
    },
    "PYF": {
        "countryName": "French Polynesia",
        "postalCodeFormat": "PF.json",
        "alpha2": "PF",
        "alpha3": "PYF",
        "numeric3": "258"
    },
    "ATF": {
        "countryName": "French Southern Territories",
        "alpha2": "TF",
        "alpha3": "ATF",
        "numeric3": "260"
    },
    "GAB": {
        "countryName": "Gabon",
        "alpha2": "GA",
        "alpha3": "GAB",
        "numeric3": "266"
    },
    "GMB": {
        "countryName": "Gambia",
        "alpha2": "GM",
        "alpha3": "GMB",
        "numeric3": "270"
    },
    "GEO": {
        "countryName": "Georgia",
        "postalCodeFormat": "4Digits.json",
        "alpha2": "GE",
        "alpha3": "GEO",
        "numeric3": "268"
    },
    "DEU": {
        "countryName": "Germany",
        "postalCodeFormat": "5Digits.json",
        "alpha2": "DE",
        "alpha3": "DEU",
        "numeric3": "276"
    },
    "GHA": {
        "countryName": "Ghana",
        "alpha2": "GH",
        "alpha3": "GHA",
        "numeric3": "288"
    },
    "GIB": {
        "countryName": "Gibraltar",
        "postalCodeFormat": "GI.json",
        "alpha2": "GI",
        "alpha3": "GIB",
        "numeric3": "292"
    },
    "GRC": {
        "countryName": "Greece",
        "postalCodeFormat": "5Digits.json",
        "alpha2": "GR",
        "alpha3": "GRC",
        "numeric3": "300"
    },
    "GRL": {
        "countryName": "Greenland",
        "postalCodeFormat": "4Digits.json",
        "alpha2": "GL",
        "alpha3": "GRL",
        "numeric3": "304"
    },
    "GRD": {
        "countryName": "Grenada",
        "alpha2": "GD",
        "alpha3": "GRD",
        "numeric3": "308"
    },
    "GLP": {
        "countryName": "Guadeloupe",
        "postalCodeFormat": "GP.json",
        "alpha2": "GP",
        "alpha3": "GLP",
        "numeric3": "312"
    },
    "GUM": {
        "countryName": "Guam",
        "postalCodeFormat": "US.json",
        "alpha2": "GU",
        "alpha3": "GUM",
        "numeric3": "316"
    },
    "GTM": {
        "countryName": "Guatemala",
        "postalCodeFormat": "5Digits.json",
        "alpha2": "GT",
        "alpha3": "GTM",
        "numeric3": "320"
    },
    "GGY": {
        "countryName": "Guernsey",
        "postalCodeFormat": "GG.json",
        "alpha2": "GG",
        "alpha3": "GGY",
        "numeric3": "831"
    },
    "GIN": {
        "countryName": "Guinea",
        "postalCodeFormat": "3Digits.json",
        "alpha2": "GN",
        "alpha3": "GIN",
        "numeric3": "324"
    },
    "GNB": {
        "countryName": "Guinea-Bissau",
        "postalCodeFormat": "4Digits.json",
        "alpha2": "GW",
        "alpha3": "GNB",
        "numeric3": "624"
    },
    "GUY": {
        "countryName": "Guyana",
        "alpha2": "GY",
        "alpha3": "GUY",
        "numeric3": "328"
    },
    "HTI": {
        "countryName": "Haiti",
        "postalCodeFormat": "4Digits.json",
        "alpha2": "HT",
        "alpha3": "HTI",
        "numeric3": "332"
    },
    "HMD": {
        "countryName": "Heard Island and Mcdonald Islands",
        "postalCodeFormat": "4Digits.json",
        "alpha2": "HM",
        "alpha3": "HMD",
        "numeric3": "334"
    },
    "VAT": {
        "countryName": "Holy See (Vatican City State)",
        "postalCodeFormat": "VA.json",
        "alpha2": "VA",
        "alpha3": "VAT",
        "numeric3": "336"
    },
    "HND": {
        "countryName": "Honduras",
        "postalCodeFormat": "HN.json",
        "alpha2": "HN",
        "alpha3": "HND",
        "numeric3": "340"
    },
    "HUN": {
        "countryName": "Hungary",
        "postalCodeFormat": "4Digits.json",
        "alpha2": "HU",
        "alpha3": "HUN",
        "numeric3": "348"
    },
    "ISL": {
        "countryName": "Iceland",
        "postalCodeFormat": "3Digits.json",
        "alpha2": "IS",
        "alpha3": "ISL",
        "numeric3": "352"
    },
    "IND": {
        "countryName": "India",
        "postalCodeFormat": "6Digits.json",
        "alpha2": "IN",
        "alpha3": "IND",
        "numeric3": "356"
    },
    "IDN": {
        "countryName": "Indonesia",
        "postalCodeFormat": "5Digits.json",
        "alpha2": "ID",
        "alpha3": "IDN",
        "numeric3": "360"
    },
    "IRN": {
        "countryName": "Iran, Islamic Republic of",
        "postalCodeFormat": "10Digits.json",
        "alpha2": "IR",
        "alpha3": "IRN",
        "numeric3": "364"
    },
    "IRQ": {
        "countryName": "Iraq",
        "postalCodeFormat": "5Digits.json",
        "alpha2": "IQ",
        "alpha3": "IRQ",
        "numeric3": "368"
    },
    "IRL": {
        "countryName": "Ireland",
        "postalCodeFormat": "IE.json",
        "alpha2": "IE",
        "alpha3": "IRL",
        "numeric3": "372"
    },
    "IMN": {
        "countryName": "Isle of Man",
        "postalCodeFormat": "IM.json",
        "alpha2": "IM",
        "alpha3": "IMN",
        "numeric3": "833"
    },
    "ISR": {
        "countryName": "Israel",
        "postalCodeFormat": "7Digits.json",
        "alpha2": "IL",
        "alpha3": "ISR",
        "numeric3": "376"
    },
    "ITA": {
        "countryName": "Italy",
        "postalCodeFormat": "5Digits.json",
        "alpha2": "IT",
        "alpha3": "ITA",
        "numeric3": "380"
    },
    "JAM": {
        "countryName": "Jamaica",
        "postalCodeFormat": "2Digits.json",
        "alpha2": "JM",
        "alpha3": "JAM",
        "numeric3": "388"
    },
    "JPN": {
        "countryName": "Japan",
        "postalCodeFormat": "7Digits.json",
        "alpha2": "JP",
        "alpha3": "JPN",
        "numeric3": "392"
    },
    "JEY": {
        "countryName": "Jersey",
        "postalCodeFormat": "JE.json",
        "alpha2": "JE",
        "alpha3": "JEY",
        "numeric3": "832"
    },
    "JOR": {
        "countryName": "Jordan",
        "postalCodeFormat": "5Digits.json",
        "alpha2": "JO",
        "alpha3": "JOR",
        "numeric3": "400"
    },
    "KAZ": {
        "countryName": "Kazakhstan",
        "postalCodeFormat": "6Digits.json",
        "alpha2": "KZ",
        "alpha3": "KAZ",
        "numeric3": "398"
    },
    "KEN": {
        "countryName": "Kenya",
        "postalCodeFormat": "5Digits.json",
        "alpha2": "KE",
        "alpha3": "KEN",
        "numeric3": "404"
    },
    "KIR": {
        "countryName": "Kiribati",
        "alpha2": "KI",
        "alpha3": "KIR",
        "numeric3": "296"
    },
    "PRK": {
        "countryName": "Korea, Democratic People's Republic of",
        "alpha2": "KP",
        "alpha3": "PRK",
        "numeric3": "408"
    },
    "KOR": {
        "countryName": "Korea, Republic of",
        "postalCodeFormat": "5Digits.json",
        "alpha2": "KR",
        "alpha3": "KOR",
        "numeric3": "410"
    },
    "KWT": {
        "countryName": "Kuwait",
        "postalCodeFormat": "5Digits.json",
        "alpha2": "KW",
        "alpha3": "KWT",
        "numeric3": "414"
    },
    "KGZ": {
        "countryName": "Kyrgyzstan",
        "postalCodeFormat": "6Digits.json",
        "alpha2": "KG",
        "alpha3": "KGZ",
        "numeric3": "417"
    },
    "LAO": {
        "countryName": "Lao PDR",
        "postalCodeFormat": "5Digits.json",
        "alpha2": "LA",
        "alpha3": "LAO",
        "numeric3": "418"
    },
    "LVA": {
        "countryName": "Latvia",
        "postalCodeFormat": "LV.json",
        "alpha2": "LV",
        "alpha3": "LVA",
        "numeric3": "428"
    },
    "LBN": {
        "countryName": "Lebanon",
        "postalCodeFormat": "LB.json",
        "alpha2": "LB",
        "alpha3": "LBN",
        "numeric3": "422"
    },
    "LSO": {
        "countryName": "Lesotho",
        "postalCodeFormat": "3Digits.json",
        "alpha2": "LS",
        "alpha3": "LSO",
        "numeric3": "426"
    },
    "LBR": {
        "countryName": "Liberia",
        "postalCodeFormat": "4Digits.json",
        "alpha2": "LR",
        "alpha3": "LBR",
        "numeric3": "430"
    },
    "LBY": {
        "countryName": "Libya",
        "postalCodeFormat": "5Digits.json",
        "alpha2": "LY",
        "alpha3": "LBY",
        "numeric3": "434"
    },
    "LIE": {
        "countryName": "Liechtenstein",
        "postalCodeFormat": "4Digits.json",
        "alpha2": "LI",
        "alpha3": "LIE",
        "numeric3": "438"
    },
    "LTU": {
        "countryName": "Lithuania",
        "postalCodeFormat": "LT.json",
        "alpha2": "LT",
        "alpha3": "LTU",
        "numeric3": "440"
    },
    "LUX": {
        "countryName": "Luxembourg",
        "postalCodeFormat": "LU.json",
        "alpha2": "LU",
        "alpha3": "LUX",
        "numeric3": "442"
    },
    "MKD": {
        "countryName": "Macedonia, Republic of",
        "postalCodeFormat": "4Digits.json",
        "alpha2": "MK",
        "alpha3": "MKD",
        "numeric3": "807"
    },
    "MDG": {
        "countryName": "Madagascar",
        "postalCodeFormat": "3Digits.json",
        "alpha2": "MG",
        "alpha3": "MDG",
        "numeric3": "450"
    },
    "MWI": {
        "countryName": "Malawi",
        "alpha2": "MW",
        "alpha3": "MWI",
        "numeric3": "454"
    },
    "MYS": {
        "countryName": "Malaysia",
        "postalCodeFormat": "5Digits.json",
        "alpha2": "MY",
        "alpha3": "MYS",
        "numeric3": "458"
    },
    "MDV": {
        "countryName": "Maldives",
        "postalCodeFormat": "5Digits.json",
        "alpha2": "MV",
        "alpha3": "MDV",
        "numeric3": "462"
    },
    "MLI": {
        "countryName": "Mali",
        "alpha2": "ML",
        "alpha3": "MLI",
        "numeric3": "466"
    },
    "MLT": {
        "countryName": "Malta",
        "postalCodeFormat": "MT.json",
        "alpha2": "MT",
        "alpha3": "MLT",
        "numeric3": "470"
    },
    "MHL": {
        "countryName": "Marshall Islands",
        "postalCodeFormat": "US.json",
        "alpha2": "MH",
        "alpha3": "MHL",
        "numeric3": "584"
    },
    "MTQ": {
        "countryName": "Martinique",
        "postalCodeFormat": "5Digits.json",
        "alpha2": "MQ",
        "alpha3": "MTQ",
        "numeric3": "474"
    },
    "MRT": {
        "countryName": "Mauritania",
        "alpha2": "MR",
        "alpha3": "MRT",
        "numeric3": "478"
    },
    "MUS": {
        "countryName": "Mauritius",
        "postalCodeFormat": "5Digits.json",
        "alpha2": "MU",
        "alpha3": "MUS",
        "numeric3": "480"
    },
    "MYT": {
        "countryName": "Mayotte",
        "postalCodeFormat": "5Digits.json",
        "alpha2": "YT",
        "alpha3": "MYT",
        "numeric3": "175"
    },
    "MEX": {
        "countryName": "Mexico",
        "postalCodeFormat": "5Digits.json",
        "alpha2": "MX",
        "alpha3": "MEX",
        "numeric3": "484"
    },
    "FSM": {
        "countryName": "Micronesia, Federated States of",
        "postalCodeFormat": "US.json",
        "alpha2": "FM",
        "alpha3": "FSM",
        "numeric3": "583"
    },
    "MDA": {
        "countryName": "Moldova",
        "postalCodeFormat": "MD.json",
        "alpha2": "MD",
        "alpha3": "MDA",
        "numeric3": "498"
    },
    "MCO": {
        "countryName": "Monaco",
        "postalCodeFormat": "MC.json",
        "alpha2": "MC",
        "alpha3": "MCO",
        "numeric3": "492"
    },
    "MNG": {
        "countryName": "Mongolia",
        "postalCodeFormat": "5Digits.json",
        "alpha2": "MN",
        "alpha3": "MNG",
        "numeric3": "496"
    },
    "MNE": {
        "countryName": "Montenegro",
        "postalCodeFormat": "5Digits.json",
        "alpha2": "ME",
        "alpha3": "MNE",
        "numeric3": "499"
    },
    "MSR": {
        "countryName": "Montserrat",
        "postalCodeFormat": "MS.json",
        "alpha2": "MS",
        "alpha3": "MSR",
        "numeric3": "500"
    },
    "MAR": {
        "countryName": "Morocco",
        "postalCodeFormat": "5Digits.json",
        "alpha2": "MA",
        "alpha3": "MAR",
        "numeric3": "504"
    },
    "MOZ": {
        "countryName": "Mozambique",
        "postalCodeFormat": "4Digits.json",
        "alpha2": "MZ",
        "alpha3": "MOZ",
        "numeric3": "508"
    },
    "MMR": {
        "countryName": "Myanmar",
        "postalCodeFormat": "5Digits.json",
        "alpha2": "MM",
        "alpha3": "MMR",
        "numeric3": "104"
    },
    "NAM": {
        "countryName": "Namibia",
        "postalCodeFormat": "5Digits.json",
        "alpha2": "NA",
        "alpha3": "NAM",
        "numeric3": "516"
    },
    "NRU": {
        "countryName": "Nauru",
        "alpha2": "NR",
        "alpha3": "NRU",
        "numeric3": "520"
    },
    "NPL": {
        "countryName": "Nepal",
        "postalCodeFormat": "5Digits.json",
        "alpha2": "NP",
        "alpha3": "NPL",
        "numeric3": "524"
    },
    "NLD": {
        "countryName": "Netherlands",
        "postalCodeFormat": "NL.json",
        "alpha2": "NL",
        "alpha3": "NLD",
        "numeric3": "528"
    },
    "ANT": {
        "countryName": "Netherlands Antilles",
        "alpha2": "AN",
        "alpha3": "ANT",
        "numeric3": "530"
    },
    "NCL": {
        "countryName": "New Caledonia",
        "postalCodeFormat": "NC.json",
        "alpha2": "NC",
        "alpha3": "NCL",
        "numeric3": "540"
    },
    "NZL": {
        "countryName": "New Zealand",
        "postalCodeFormat": "4Digits.json",
        "alpha2": "NZ",
        "alpha3": "NZL",
        "numeric3": "554"
    },
    "NIC": {
        "countryName": "Nicaragua",
        "postalCodeFormat": "5Digits.json",
        "alpha2": "NI",
        "alpha3": "NIC",
        "numeric3": "558"
    },
    "NER": {
        "countryName": "Niger",
        "postalCodeFormat": "4Digits.json",
        "alpha2": "NE",
        "alpha3": "NER",
        "numeric3": "562"
    },
    "NGA": {
        "countryName": "Nigeria",
        "postalCodeFormat": "6Digits.json",
        "alpha2": "NG",
        "alpha3": "NGA",
        "numeric3": "566"
    },
    "NIU": {
        "countryName": "Niue",
        "alpha2": "NU",
        "alpha3": "NIU",
        "numeric3": "570"
    },
    "NFK": {
        "countryName": "Norfolk Island",
        "postalCodeFormat": "4Digits.json",
        "alpha2": "NF",
        "alpha3": "NFK",
        "numeric3": "574"
    },
    "MNP": {
        "countryName": "Northern Mariana Islands",
        "postalCodeFormat": "US.json",
        "alpha2": "MP",
        "alpha3": "MNP",
        "numeric3": "580"
    },
    "NOR": {
        "countryName": "Norway",
        "postalCodeFormat": "4Digits.json",
        "alpha2": "NO",
        "alpha3": "NOR",
        "numeric3": "578"
    },
    "OMN": {
        "countryName": "Oman",
        "postalCodeFormat": "3Digits.json",
        "alpha2": "OM",
        "alpha3": "OMN",
        "numeric3": "512"
    },
    "PAK": {
        "countryName": "Pakistan",
        "postalCodeFormat": "5Digits.json",
        "alpha2": "PK",
        "alpha3": "PAK",
        "numeric3": "586"
    },
    "PLW": {
        "countryName": "Palau",
        "postalCodeFormat": "US.json",
        "alpha2": "PW",
        "alpha3": "PLW",
        "numeric3": "585"
    },
    "PSE": {
        "countryName": "Palestinian Territory, Occupied",
        "postalCodeFormat": "3Digits.json",
        "alpha2": "PS",
        "alpha3": "PSE",
        "numeric3": "275"
    },
    "PAN": {
        "countryName": "Panama",
        "postalCodeFormat": "4Digits.json",
        "alpha2": "PA",
        "alpha3": "PAN",
        "numeric3": "591"
    },
    "PNG": {
        "countryName": "Papua New Guinea",
        "postalCodeFormat": "3Digits.json",
        "alpha2": "PG",
        "alpha3": "PNG",
        "numeric3": "598"
    },
    "PRY": {
        "countryName": "Paraguay",
        "postalCodeFormat": "4Digits.json",
        "alpha2": "PY",
        "alpha3": "PRY",
        "numeric3": "600"
    },
    "PER": {
        "countryName": "Peru",
        "postalCodeFormat": "5Digits.json",
        "alpha2": "PE",
        "alpha3": "PER",
        "numeric3": "604"
    },
    "PHL": {
        "countryName": "Philippines",
        "postalCodeFormat": "4Digits.json",
        "alpha2": "PH",
        "alpha3": "PHL",
        "numeric3": "608"
    },
    "PCN": {
        "countryName": "Pitcairn",
        "postalCodeFormat": "PN.json",
        "alpha2": "PN",
        "alpha3": "PCN",
        "numeric3": "612"
    },
    "POL": {
        "countryName": "Poland",
        "postalCodeFormat": "PL.json",
        "alpha2": "PL",
        "alpha3": "POL",
        "numeric3": "616"
    },
    "PRT": {
        "countryName": "Portugal",
        "postalCodeFormat": "PT.json",
        "alpha2": "PT",
        "alpha3": "PRT",
        "numeric3": "620"
    },
    "PRI": {
        "countryName": "Puerto Rico",
        "postalCodeFormat": "US.json",
        "alpha2": "PR",
        "alpha3": "PRI",
        "numeric3": "630"
    },
    "QAT": {
        "countryName": "Qatar",
        "alpha2": "QA",
        "alpha3": "QAT",
        "numeric3": "634"
    },
    "REU": {
        "countryName": "Réunion",
        "postalCodeFormat": "RE.json",
        "alpha2": "RE",
        "alpha3": "REU",
        "numeric3": "638"
    },
    "ROU": {
        "countryName": "Romania",
        "postalCodeFormat": "6Digits.json",
        "alpha2": "RO",
        "alpha3": "ROU",
        "numeric3": "642"
    },
    "RUS": {
        "countryName": "Russian Federation",
        "postalCodeFormat": "RU.json",
        "alpha2": "RU",
        "alpha3": "RUS",
        "numeric3": "643"
    },
    "RWA": {
        "countryName": "Rwanda",
        "alpha2": "RW",
        "alpha3": "RWA",
        "numeric3": "646"
    },
    "BLM": {
        "countryName": "Saint-Barthélemy",
        "postalCodeFormat": "BL.json",
        "alpha2": "BL",
        "alpha3": "BLM",
        "numeric3": "652"
    },
    "SHN": {
        "countryName": "Saint Helena",
        "postalCodeFormat": "SH.json",
        "alpha2": "SH",
        "alpha3": "SHN",
        "numeric3": "654"
    },
    "KNA": {
        "countryName": "Saint Kitts and Nevis",
        "alpha2": "KN",
        "alpha3": "KNA",
        "numeric3": "659"
    },
    "LCA": {
        "countryName": "Saint Lucia",
        "postalCodeFormat": "LC.json",
        "alpha2": "LC",
        "alpha3": "LCA",
        "numeric3": "662"
    },
    "MAF": {
        "countryName": "Saint-Martin (French part)",
        "postalCodeFormat": "MF.json",
        "alpha2": "MF",
        "alpha3": "MAF",
        "numeric3": "663"
    },
    "SPM": {
        "countryName": "Saint Pierre and Miquelon",
        "postalCodeFormat": "PM.json",
        "alpha2": "PM",
        "alpha3": "SPM",
        "numeric3": "666"
    },
    "VCT": {
        "countryName": "Saint Vincent and Grenadines",
        "postalCodeFormat": "VC.json",
        "alpha2": "VC",
        "alpha3": "VCT",
        "numeric3": "670"
    },
    "WSM": {
        "countryName": "Samoa",
        "postalCodeFormat": "WS.json",
        "alpha2": "WS",
        "alpha3": "WSM",
        "numeric3": "882"
    },
    "SMR": {
        "countryName": "San Marino",
        "postalCodeFormat": "SM.json",
        "alpha2": "SM",
        "alpha3": "SMR",
        "numeric3": "674"
    },
    "STP": {
        "countryName": "Sao Tome and Principe",
        "alpha2": "ST",
        "alpha3": "STP",
        "numeric3": "678"
    },
    "SAU": {
        "countryName": "Saudi Arabia",
        "postalCodeFormat": "US.json",
        "alpha2": "SA",
        "alpha3": "SAU",
        "numeric3": "682"
    },
    "SEN": {
        "countryName": "Senegal",
        "postalCodeFormat": "5Digits.json",
        "alpha2": "SN",
        "alpha3": "SEN",
        "numeric3": "686"
    },
    "SRB": {
        "countryName": "Serbia",
        "postalCodeFormat": "5Digits.json",
        "alpha2": "RS",
        "alpha3": "SRB",
        "numeric3": "688"
    },
    "SYC": {
        "countryName": "Seychelles",
        "alpha2": "SC",
        "alpha3": "SYC",
        "numeric3": "690"
    },
    "SLE": {
        "countryName": "Sierra Leone",
        "alpha2": "SL",
        "alpha3": "SLE",
        "numeric3": "694"
    },
    "SGP": {
        "countryName": "Singapore",
        "postalCodeFormat": "6Digits.json",
        "alpha2": "SG",
        "alpha3": "SGP",
        "numeric3": "702"
    },
    "SVK": {
        "countryName": "Slovakia",
        "postalCodeFormat": "5Digits.json",
        "alpha2": "SK",
        "alpha3": "SVK",
        "numeric3": "703"
    },
    "SVN": {
        "countryName": "Slovenia",
        "postalCodeFormat": "4Digits.json",
        "alpha2": "SI",
        "alpha3": "SVN",
        "numeric3": "705"
    },
    "SLB": {
        "countryName": "Solomon Islands",
        "alpha2": "SB",
        "alpha3": "SLB",
        "numeric3": "90"
    },
    "SOM": {
        "countryName": "Somalia",
        "postalCodeFormat": "SO.json",
        "alpha2": "SO",
        "alpha3": "SOM",
        "numeric3": "706"
    },
    "ZAF": {
        "countryName": "South Africa",
        "postalCodeFormat": "4Digits.json",
        "alpha2": "ZA",
        "alpha3": "ZAF",
        "numeric3": "710"
    },
    "SGS": {
        "countryName": "South Georgia and the South Sandwich Islands",
        "postalCodeFormat": "GS.json",
        "alpha2": "GS",
        "alpha3": "SGS",
        "numeric3": "239"
    },
    "SSD": {
        "countryName": "South Sudan",
        "alpha2": "SS",
        "alpha3": "SSD",
        "numeric3": "728"
    },
    "ESP": {
        "countryName": "Spain",
        "postalCodeFormat": "5Digits.json",
        "alpha2": "ES",
        "alpha3": "ESP",
        "numeric3": "724"
    },
    "LKA": {
        "countryName": "Sri Lanka",
        "postalCodeFormat": "5Digits.json",
        "alpha2": "LK",
        "alpha3": "LKA",
        "numeric3": "144"
    },
    "SDN": {
        "countryName": "Sudan",
        "postalCodeFormat": "5Digits.json",
        "alpha2": "SD",
        "alpha3": "SDN",
        "numeric3": "736"
    },
    "SUR": {
        "countryName": "Suriname *",
        "alpha2": "SR",
        "alpha3": "SUR",
        "numeric3": "740"
    },
    "SJM": {
        "countryName": "Svalbard and Jan Mayen Islands",
        "postalCodeFormat": "4Digits.json",
        "alpha2": "SJ",
        "alpha3": "SJM",
        "numeric3": "744"
    },
    "SWZ": {
        "countryName": "Swaziland",
        "postalCodeFormat": "SZ.json",
        "alpha2": "SZ",
        "alpha3": "SWZ",
        "numeric3": "748"
    },
    "SWE": {
        "countryName": "Sweden",
        "postalCodeFormat": "5Digits.json",
        "alpha2": "SE",
        "alpha3": "SWE",
        "numeric3": "752"
    },
    "CHE": {
        "countryName": "Switzerland",
        "postalCodeFormat": "4Digits.json",
        "alpha2": "CH",
        "alpha3": "CHE",
        "numeric3": "756"
    },
    "SYR": {
        "countryName": "Syrian Arab Republic (Syria)",
        "alpha2": "SY",
        "alpha3": "SYR",
        "numeric3": "760"
    },
    "TWN": {
        "countryName": "Taiwan, Republic of China",
        "postalCodeFormat": "TW.json",
        "alpha2": "TW",
        "alpha3": "TWN",
        "numeric3": "158"
    },
    "TJK": {
        "countryName": "Tajikistan",
        "postalCodeFormat": "6Digits.json",
        "alpha2": "TJ",
        "alpha3": "TJK",
        "numeric3": "762"
    },
    "TZA": {
        "countryName": "Tanzania *, United Republic of",
        "postalCodeFormat": "5Digits.json",
        "alpha2": "TZ",
        "alpha3": "TZA",
        "numeric3": "834"
    },
    "THA": {
        "countryName": "Thailand",
        "postalCodeFormat": "5Digits.json",
        "alpha2": "TH",
        "alpha3": "THA",
        "numeric3": "764"
    },
    "TLS": {
        "countryName": "Timor-Leste",
        "alpha2": "TL",
        "alpha3": "TLS",
        "numeric3": "626"
    },
    "TGO": {
        "countryName": "Togo",
        "alpha2": "TG",
        "alpha3": "TGO",
        "numeric3": "768"
    },
    "TKL": {
        "countryName": "Tokelau",
        "alpha2": "TK",
        "alpha3": "TKL",
        "numeric3": "772"
    },
    "TON": {
        "countryName": "Tonga",
        "alpha2": "TO",
        "alpha3": "TON",
        "numeric3": "776"
    },
    "TTO": {
        "countryName": "Trinidad and Tobago",
        "postalCodeFormat": "6Digits.json",
        "alpha2": "TT",
        "alpha3": "TTO",
        "numeric3": "780"
    },
    "TUN": {
        "countryName": "Tunisia",
        "postalCodeFormat": "4Digits.json",
        "alpha2": "TN",
        "alpha3": "TUN",
        "numeric3": "788"
    },
    "TUR": {
        "countryName": "Turkey",
        "postalCodeFormat": "5Digits.json",
        "alpha2": "TR",
        "alpha3": "TUR",
        "numeric3": "792"
    },
    "TKM": {
        "countryName": "Turkmenistan",
        "postalCodeFormat": "6Digits.json",
        "alpha2": "TM",
        "alpha3": "TKM",
        "numeric3": "795"
    },
    "TCA": {
        "countryName": "Turks and Caicos Islands",
        "postalCodeFormat": "TC.json",
        "alpha2": "TC",
        "alpha3": "TCA",
        "numeric3": "796"
    },
    "TUV": {
        "countryName": "Tuvalu",
        "alpha2": "TV",
        "alpha3": "TUV",
        "numeric3": "798"
    },
    "UGA": {
        "countryName": "Uganda",
        "alpha2": "UG",
        "alpha3": "UGA",
        "numeric3": "800"
    },
    "UKR": {
        "countryName": "Ukraine",
        "postalCodeFormat": "5Digits.json",
        "alpha2": "UA",
        "alpha3": "UKR",
        "numeric3": "804"
    },
    "ARE": {
        "countryName": "United Arab Emirates",
        "alpha2": "AE",
        "alpha3": "ARE",
        "numeric3": "784"
    },
    "GBR": {
        "countryName": "United Kingdom",
        "postalCodeFormat": "GB.json",
        "alpha2": "GB",
        "alpha3": "GBR",
        "numeric3": "826"
    },
    "USA": {
        "countryName": "United States of America",
        "postalCodeFormat": "US.json",
        "alpha2": "US",
        "alpha3": "USA",
        "numeric3": "840"
    },
    "UMI": {
        "countryName": "United States Minor Outlying Islands",
        "alpha2": "UM",
        "alpha3": "UMI",
        "numeric3": "581"
    },
    "URY": {
        "countryName": "Uruguay",
        "postalCodeFormat": "5Digits.json",
        "alpha2": "UY",
        "alpha3": "URY",
        "numeric3": "858"
    },
    "UZB": {
        "countryName": "Uzbekistan",
        "postalCodeFormat": "6Digits.json",
        "alpha2": "UZ",
        "alpha3": "UZB",
        "numeric3": "860"
    },
    "VUT": {
        "countryName": "Vanuatu",
        "alpha2": "VU",
        "alpha3": "VUT",
        "numeric3": "548"
    },
    "VEN": {
        "countryName": "Venezuela (Bolivarian Republic of)",
        "postalCodeFormat": "VE.json",
        "alpha2": "VE",
        "alpha3": "VEN",
        "numeric3": "862"
    },
    "VNM": {
        "countryName": "Viet Nam",
        "postalCodeFormat": "6Digits.json",
        "alpha2": "VN",
        "alpha3": "VNM",
        "numeric3": "704"
    },
    "VIR": {
        "countryName": "Virgin Islands, US",
        "postalCodeFormat": "US.json",
        "alpha2": "VI",
        "alpha3": "VIR",
        "numeric3": "850"
    },
    "WLF": {
        "countryName": "Wallis and Futuna Islands",
        "postalCodeFormat": "WF.json",
        "alpha2": "WF",
        "alpha3": "WLF",
        "numeric3": "876"
    },
    "ESH": {
        "countryName": "Western Sahara",
        "alpha2": "EH",
        "alpha3": "ESH",
        "numeric3": "732"
    },
    "YEM": {
        "countryName": "Yemen",
        "alpha2": "YE",
        "alpha3": "YEM",
        "numeric3": "887"
    },
    "ZMB": {
        "countryName": "Zambia",
        "postalCodeFormat": "5Digits.json",
        "alpha2": "ZM",
        "alpha3": "ZMB",
        "numeric3": "894"
    },
    "ZWE": {
        "countryName": "Zimbabwe",
        "alpha2": "ZW",
        "alpha3": "ZWE",
        "numeric3": "716"
    }
}
},{}],71:[function(require,module,exports){
'use strict';

const byAlpha2 = require('./generated/postal-codes-alpha2.json');
const byAlpha3 = require('./generated/postal-codes-alpha3.json');
const isNode = require('detect-node');

var getFormat = null;
if ( isNode ) {
    getFormat = require("./formats-node");
} else {
    getFormat = require("./formats-web");
}

module.exports.validate = function (countryCode, postalCode) {

    if ( !countryCode ) {
        return "Missing country code.";
    }

    if ( !postalCode ) {
        return 'Missing postal code.';
    }

    var countryData = undefined;
    var preparedCountryCode = countryCode.trim().toUpperCase();

    // Is it alpha2 ?
    if ( preparedCountryCode.length == 2 ) {
        countryData = byAlpha2[preparedCountryCode];
    }

    // Is it alpha3 ?
    if ( preparedCountryCode.length == 3 ) {
        countryData = byAlpha3[preparedCountryCode];
    }

    if ( !countryData ) {
        return 'Unknown alpha2/alpha3 country code: ' + preparedCountryCode;
    }

    // If the country/region does not use postal codes
    if ( !countryData.postalCodeFormat ) {
        return true;
    }

    var format = getFormat(countryData.postalCodeFormat);
    if ( !format ) {
        return 'Failed to load postal code format "' + countryData.postalCodeFormat + '".';
    }

    var preparedPostalCode = postalCode.toString().trim().slice(0);
    for (var i = 0; i < format.RedundantCharacters.length; i++) {
        preparedPostalCode = preparedPostalCode.replace(new RegExp(format.RedundantCharacters[i], 'g'), '');
    }

    var expression = format.ValidationRegex;
    if ( expression instanceof Array ) {
        expression = '^' + expression.join('|') + '$';
    }

    const regexp = new RegExp(expression, 'i');
    var result = regexp.exec(preparedPostalCode);

    if ( !result ) {
        // Invalid postal code
        return "Postal code " + preparedPostalCode + " is not valid for country " + preparedCountryCode;
    }

    if ( result[0].toLowerCase() != preparedPostalCode.toLowerCase() ) {
        // Found "sub" match
        return "Postal code " + preparedPostalCode + " is not valid for country " + preparedCountryCode;
    }

    return true;
};

},{"./formats-node":3,"./formats-web":4,"./generated/postal-codes-alpha2.json":69,"./generated/postal-codes-alpha3.json":70,"detect-node":2}],72:[function(require,module,exports){
(function (process){(function (){
// 'path' module extracted from Node.js v8.11.1 (only the posix part)
// transplited with Babel

// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.

'use strict';

function assertPath(path) {
  if (typeof path !== 'string') {
    throw new TypeError('Path must be a string. Received ' + JSON.stringify(path));
  }
}

// Resolves . and .. elements in a path with directory names
function normalizeStringPosix(path, allowAboveRoot) {
  var res = '';
  var lastSegmentLength = 0;
  var lastSlash = -1;
  var dots = 0;
  var code;
  for (var i = 0; i <= path.length; ++i) {
    if (i < path.length)
      code = path.charCodeAt(i);
    else if (code === 47 /*/*/)
      break;
    else
      code = 47 /*/*/;
    if (code === 47 /*/*/) {
      if (lastSlash === i - 1 || dots === 1) {
        // NOOP
      } else if (lastSlash !== i - 1 && dots === 2) {
        if (res.length < 2 || lastSegmentLength !== 2 || res.charCodeAt(res.length - 1) !== 46 /*.*/ || res.charCodeAt(res.length - 2) !== 46 /*.*/) {
          if (res.length > 2) {
            var lastSlashIndex = res.lastIndexOf('/');
            if (lastSlashIndex !== res.length - 1) {
              if (lastSlashIndex === -1) {
                res = '';
                lastSegmentLength = 0;
              } else {
                res = res.slice(0, lastSlashIndex);
                lastSegmentLength = res.length - 1 - res.lastIndexOf('/');
              }
              lastSlash = i;
              dots = 0;
              continue;
            }
          } else if (res.length === 2 || res.length === 1) {
            res = '';
            lastSegmentLength = 0;
            lastSlash = i;
            dots = 0;
            continue;
          }
        }
        if (allowAboveRoot) {
          if (res.length > 0)
            res += '/..';
          else
            res = '..';
          lastSegmentLength = 2;
        }
      } else {
        if (res.length > 0)
          res += '/' + path.slice(lastSlash + 1, i);
        else
          res = path.slice(lastSlash + 1, i);
        lastSegmentLength = i - lastSlash - 1;
      }
      lastSlash = i;
      dots = 0;
    } else if (code === 46 /*.*/ && dots !== -1) {
      ++dots;
    } else {
      dots = -1;
    }
  }
  return res;
}

function _format(sep, pathObject) {
  var dir = pathObject.dir || pathObject.root;
  var base = pathObject.base || (pathObject.name || '') + (pathObject.ext || '');
  if (!dir) {
    return base;
  }
  if (dir === pathObject.root) {
    return dir + base;
  }
  return dir + sep + base;
}

var posix = {
  // path.resolve([from ...], to)
  resolve: function resolve() {
    var resolvedPath = '';
    var resolvedAbsolute = false;
    var cwd;

    for (var i = arguments.length - 1; i >= -1 && !resolvedAbsolute; i--) {
      var path;
      if (i >= 0)
        path = arguments[i];
      else {
        if (cwd === undefined)
          cwd = process.cwd();
        path = cwd;
      }

      assertPath(path);

      // Skip empty entries
      if (path.length === 0) {
        continue;
      }

      resolvedPath = path + '/' + resolvedPath;
      resolvedAbsolute = path.charCodeAt(0) === 47 /*/*/;
    }

    // At this point the path should be resolved to a full absolute path, but
    // handle relative paths to be safe (might happen when process.cwd() fails)

    // Normalize the path
    resolvedPath = normalizeStringPosix(resolvedPath, !resolvedAbsolute);

    if (resolvedAbsolute) {
      if (resolvedPath.length > 0)
        return '/' + resolvedPath;
      else
        return '/';
    } else if (resolvedPath.length > 0) {
      return resolvedPath;
    } else {
      return '.';
    }
  },

  normalize: function normalize(path) {
    assertPath(path);

    if (path.length === 0) return '.';

    var isAbsolute = path.charCodeAt(0) === 47 /*/*/;
    var trailingSeparator = path.charCodeAt(path.length - 1) === 47 /*/*/;

    // Normalize the path
    path = normalizeStringPosix(path, !isAbsolute);

    if (path.length === 0 && !isAbsolute) path = '.';
    if (path.length > 0 && trailingSeparator) path += '/';

    if (isAbsolute) return '/' + path;
    return path;
  },

  isAbsolute: function isAbsolute(path) {
    assertPath(path);
    return path.length > 0 && path.charCodeAt(0) === 47 /*/*/;
  },

  join: function join() {
    if (arguments.length === 0)
      return '.';
    var joined;
    for (var i = 0; i < arguments.length; ++i) {
      var arg = arguments[i];
      assertPath(arg);
      if (arg.length > 0) {
        if (joined === undefined)
          joined = arg;
        else
          joined += '/' + arg;
      }
    }
    if (joined === undefined)
      return '.';
    return posix.normalize(joined);
  },

  relative: function relative(from, to) {
    assertPath(from);
    assertPath(to);

    if (from === to) return '';

    from = posix.resolve(from);
    to = posix.resolve(to);

    if (from === to) return '';

    // Trim any leading backslashes
    var fromStart = 1;
    for (; fromStart < from.length; ++fromStart) {
      if (from.charCodeAt(fromStart) !== 47 /*/*/)
        break;
    }
    var fromEnd = from.length;
    var fromLen = fromEnd - fromStart;

    // Trim any leading backslashes
    var toStart = 1;
    for (; toStart < to.length; ++toStart) {
      if (to.charCodeAt(toStart) !== 47 /*/*/)
        break;
    }
    var toEnd = to.length;
    var toLen = toEnd - toStart;

    // Compare paths to find the longest common path from root
    var length = fromLen < toLen ? fromLen : toLen;
    var lastCommonSep = -1;
    var i = 0;
    for (; i <= length; ++i) {
      if (i === length) {
        if (toLen > length) {
          if (to.charCodeAt(toStart + i) === 47 /*/*/) {
            // We get here if `from` is the exact base path for `to`.
            // For example: from='/foo/bar'; to='/foo/bar/baz'
            return to.slice(toStart + i + 1);
          } else if (i === 0) {
            // We get here if `from` is the root
            // For example: from='/'; to='/foo'
            return to.slice(toStart + i);
          }
        } else if (fromLen > length) {
          if (from.charCodeAt(fromStart + i) === 47 /*/*/) {
            // We get here if `to` is the exact base path for `from`.
            // For example: from='/foo/bar/baz'; to='/foo/bar'
            lastCommonSep = i;
          } else if (i === 0) {
            // We get here if `to` is the root.
            // For example: from='/foo'; to='/'
            lastCommonSep = 0;
          }
        }
        break;
      }
      var fromCode = from.charCodeAt(fromStart + i);
      var toCode = to.charCodeAt(toStart + i);
      if (fromCode !== toCode)
        break;
      else if (fromCode === 47 /*/*/)
        lastCommonSep = i;
    }

    var out = '';
    // Generate the relative path based on the path difference between `to`
    // and `from`
    for (i = fromStart + lastCommonSep + 1; i <= fromEnd; ++i) {
      if (i === fromEnd || from.charCodeAt(i) === 47 /*/*/) {
        if (out.length === 0)
          out += '..';
        else
          out += '/..';
      }
    }

    // Lastly, append the rest of the destination (`to`) path that comes after
    // the common path parts
    if (out.length > 0)
      return out + to.slice(toStart + lastCommonSep);
    else {
      toStart += lastCommonSep;
      if (to.charCodeAt(toStart) === 47 /*/*/)
        ++toStart;
      return to.slice(toStart);
    }
  },

  _makeLong: function _makeLong(path) {
    return path;
  },

  dirname: function dirname(path) {
    assertPath(path);
    if (path.length === 0) return '.';
    var code = path.charCodeAt(0);
    var hasRoot = code === 47 /*/*/;
    var end = -1;
    var matchedSlash = true;
    for (var i = path.length - 1; i >= 1; --i) {
      code = path.charCodeAt(i);
      if (code === 47 /*/*/) {
          if (!matchedSlash) {
            end = i;
            break;
          }
        } else {
        // We saw the first non-path separator
        matchedSlash = false;
      }
    }

    if (end === -1) return hasRoot ? '/' : '.';
    if (hasRoot && end === 1) return '//';
    return path.slice(0, end);
  },

  basename: function basename(path, ext) {
    if (ext !== undefined && typeof ext !== 'string') throw new TypeError('"ext" argument must be a string');
    assertPath(path);

    var start = 0;
    var end = -1;
    var matchedSlash = true;
    var i;

    if (ext !== undefined && ext.length > 0 && ext.length <= path.length) {
      if (ext.length === path.length && ext === path) return '';
      var extIdx = ext.length - 1;
      var firstNonSlashEnd = -1;
      for (i = path.length - 1; i >= 0; --i) {
        var code = path.charCodeAt(i);
        if (code === 47 /*/*/) {
            // If we reached a path separator that was not part of a set of path
            // separators at the end of the string, stop now
            if (!matchedSlash) {
              start = i + 1;
              break;
            }
          } else {
          if (firstNonSlashEnd === -1) {
            // We saw the first non-path separator, remember this index in case
            // we need it if the extension ends up not matching
            matchedSlash = false;
            firstNonSlashEnd = i + 1;
          }
          if (extIdx >= 0) {
            // Try to match the explicit extension
            if (code === ext.charCodeAt(extIdx)) {
              if (--extIdx === -1) {
                // We matched the extension, so mark this as the end of our path
                // component
                end = i;
              }
            } else {
              // Extension does not match, so our result is the entire path
              // component
              extIdx = -1;
              end = firstNonSlashEnd;
            }
          }
        }
      }

      if (start === end) end = firstNonSlashEnd;else if (end === -1) end = path.length;
      return path.slice(start, end);
    } else {
      for (i = path.length - 1; i >= 0; --i) {
        if (path.charCodeAt(i) === 47 /*/*/) {
            // If we reached a path separator that was not part of a set of path
            // separators at the end of the string, stop now
            if (!matchedSlash) {
              start = i + 1;
              break;
            }
          } else if (end === -1) {
          // We saw the first non-path separator, mark this as the end of our
          // path component
          matchedSlash = false;
          end = i + 1;
        }
      }

      if (end === -1) return '';
      return path.slice(start, end);
    }
  },

  extname: function extname(path) {
    assertPath(path);
    var startDot = -1;
    var startPart = 0;
    var end = -1;
    var matchedSlash = true;
    // Track the state of characters (if any) we see before our first dot and
    // after any path separator we find
    var preDotState = 0;
    for (var i = path.length - 1; i >= 0; --i) {
      var code = path.charCodeAt(i);
      if (code === 47 /*/*/) {
          // If we reached a path separator that was not part of a set of path
          // separators at the end of the string, stop now
          if (!matchedSlash) {
            startPart = i + 1;
            break;
          }
          continue;
        }
      if (end === -1) {
        // We saw the first non-path separator, mark this as the end of our
        // extension
        matchedSlash = false;
        end = i + 1;
      }
      if (code === 46 /*.*/) {
          // If this is our first dot, mark it as the start of our extension
          if (startDot === -1)
            startDot = i;
          else if (preDotState !== 1)
            preDotState = 1;
      } else if (startDot !== -1) {
        // We saw a non-dot and non-path separator before our dot, so we should
        // have a good chance at having a non-empty extension
        preDotState = -1;
      }
    }

    if (startDot === -1 || end === -1 ||
        // We saw a non-dot character immediately before the dot
        preDotState === 0 ||
        // The (right-most) trimmed path component is exactly '..'
        preDotState === 1 && startDot === end - 1 && startDot === startPart + 1) {
      return '';
    }
    return path.slice(startDot, end);
  },

  format: function format(pathObject) {
    if (pathObject === null || typeof pathObject !== 'object') {
      throw new TypeError('The "pathObject" argument must be of type Object. Received type ' + typeof pathObject);
    }
    return _format('/', pathObject);
  },

  parse: function parse(path) {
    assertPath(path);

    var ret = { root: '', dir: '', base: '', ext: '', name: '' };
    if (path.length === 0) return ret;
    var code = path.charCodeAt(0);
    var isAbsolute = code === 47 /*/*/;
    var start;
    if (isAbsolute) {
      ret.root = '/';
      start = 1;
    } else {
      start = 0;
    }
    var startDot = -1;
    var startPart = 0;
    var end = -1;
    var matchedSlash = true;
    var i = path.length - 1;

    // Track the state of characters (if any) we see before our first dot and
    // after any path separator we find
    var preDotState = 0;

    // Get non-dir info
    for (; i >= start; --i) {
      code = path.charCodeAt(i);
      if (code === 47 /*/*/) {
          // If we reached a path separator that was not part of a set of path
          // separators at the end of the string, stop now
          if (!matchedSlash) {
            startPart = i + 1;
            break;
          }
          continue;
        }
      if (end === -1) {
        // We saw the first non-path separator, mark this as the end of our
        // extension
        matchedSlash = false;
        end = i + 1;
      }
      if (code === 46 /*.*/) {
          // If this is our first dot, mark it as the start of our extension
          if (startDot === -1) startDot = i;else if (preDotState !== 1) preDotState = 1;
        } else if (startDot !== -1) {
        // We saw a non-dot and non-path separator before our dot, so we should
        // have a good chance at having a non-empty extension
        preDotState = -1;
      }
    }

    if (startDot === -1 || end === -1 ||
    // We saw a non-dot character immediately before the dot
    preDotState === 0 ||
    // The (right-most) trimmed path component is exactly '..'
    preDotState === 1 && startDot === end - 1 && startDot === startPart + 1) {
      if (end !== -1) {
        if (startPart === 0 && isAbsolute) ret.base = ret.name = path.slice(1, end);else ret.base = ret.name = path.slice(startPart, end);
      }
    } else {
      if (startPart === 0 && isAbsolute) {
        ret.name = path.slice(1, startDot);
        ret.base = path.slice(1, end);
      } else {
        ret.name = path.slice(startPart, startDot);
        ret.base = path.slice(startPart, end);
      }
      ret.ext = path.slice(startDot, end);
    }

    if (startPart > 0) ret.dir = path.slice(0, startPart - 1);else if (isAbsolute) ret.dir = '/';

    return ret;
  },

  sep: '/',
  delimiter: ':',
  win32: null,
  posix: null
};

posix.posix = posix;

module.exports = posix;

}).call(this)}).call(this,require('_process'))
},{"_process":73}],73:[function(require,module,exports){
// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout () {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
} ())
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch(e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch(e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }


}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }



}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) { return [] }

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };

},{}]},{},[1]);