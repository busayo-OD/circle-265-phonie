//FUNCTION FOR SELECTION OF COUNTRY CODE
function country_code() {
  var country = document.getElementById("country").value;

  switch (country) {
    case "Argentina":
      document.getElementById("phone").value = "+54";
      break;
    case "Australia":
      document.getElementById("phone").value = "+61";
      break;
    case "Belgium":
      document.getElementById("phone").value = "+32";
      break;
    case "Brazil":
      document.getElementById("phone").value = "+55";
      break;
    case "Canada":
      document.getElementById("phone").value = "+1";
      break;
    case "Cyprus":
      document.getElementById("phone").value = "+357";
      break;
    case "Denmark":
      document.getElementById("phone").value = "+45";
      break;
    case "France":
      document.getElementById("phone").value = "+33";
      break;
    case "Ghana":
      document.getElementById("phone").value = "+233";
      break;
    case "Italy":
      document.getElementById("phone").value = "+39";
      break;
    case "Mexico":
      document.getElementById("phone").value = "+52";
      break;
    case "Nigeria":
      document.getElementById("phone").value = "+234";
      break;
    case "Zambia":
      document.getElementById("phone").value = "+260";
      break;
    default:
      document.getElementById('phone').value = "";
      break;
  }
}


//Variable for button
let button = document.querySelector('.submit-btn');

//Variable for username input
let username = document.querySelector("#username");

//Variable for phone number input
let phoneNumberSelector = document.querySelector("#phone");

//Variable for checking phone numbers
const mtnNumber = ['703', '706', '803', '806', '810', '813', '814', '816', '903', '906', '913'];
const gloNumber = ['905', '815', '811', '807', '805', '705'];
const airtelNumber = ['802', '808', '701', '708', '901', '907', '812', '902'];
const nineMobileNumber = ['809', '909', '817', '818', '908'];
const numbers = ['703', '706', '803', '806', '810', '813', '814', '816', '903', '906', '913', '0703', '0706',
  '0703', '0706', '0803', '0806', '0810', '0813', '0814', '0816', '0903', '0906', '0913',
  '905', '815', '811', '807', '805', '705', '0905', '0815', '0811', '0807', '0805', '0705',
  '802', '808', '701', '708', '901', '907', '812', '902', '0802', '0808', '0701', '0708', '0901', '0907', '0812', '0902',
  '809', '909', '817', '818', '908', '0809', '0909', '0817', '0818', '0908']


function usernameValidator(params) {
  while (params.length > 10 || hasWhiteSpace(params) === true) {
    params = prompt('Invalid Username!, Input Username')
  }
  return params
}

function hasWhiteSpace(s) {
  return s.indexOf(' ') >= 0;
}

function numChecker(param) {
  isNumber = isNaN(Number(param))
  return isNumber;
}

function numLengthChecker(param) {
  numberLength = param.toString().length
  if (numberLength == 14) {
    return true;
  }
  return false;
}


function mtnChecker(param) {
  if (mtnNumber.includes(param)) {
    return true;
  }
  return false;
}

function gloChecker(param) {
  if (gloNumber.includes(param)) {
    return true;
  }
  return false;
}

function airtelChecker(param) {
  if (airtelNumber.includes(param)) {
    return true;
  }
  return false;
}

function nineMobileChecker(param) {
  if (nineMobileNumber.includes(param)) {
    return true;
  }
  return false;
}

function start(event) {
  event.preventDefault();
  phoneNumber = phoneNumberSelector.value;
  phoneNumCheck = numChecker(phoneNumber);

  let radioButton = document.querySelector('input[type="radio"]:checked');
  let radioButtonValue = radioButton.value;

  if (!phoneNumCheck) {
    phoneLengthCheck = numLengthChecker(phoneNumber);
    if (phoneLengthCheck) {
      numCheck = phoneNumber.slice(4, 7);

    }
    else {
      numCheck = 0;
    }

  }
  else {
    phoneNumberSelector.style.border = '1.5px red solid';
  }

  let mtnNumber = mtnChecker(numCheck);
  let gloNumber = gloChecker(numCheck);
  let airtelNumber = airtelChecker(numCheck);
  let nineMobileNumber = nineMobileChecker(numCheck);


  if ((mtnNumber && radioButtonValue == 'mtn') || (mtnNumber && radioButtonValue == 'all')) {
    phoneNumberSelector.style.border = '1.5px green solid';
    document.querySelector('.section1').style.backgroundImage = "url('mtn.jpg')";
  } else if ((gloNumber && radioButtonValue == 'glo') || (gloNumber && radioButtonValue == 'all')) {
    phoneNumberSelector.style.border = '1.5px green solid';
    document.querySelector('.section1').style.backgroundImage = "url('glo.png')";
  } else if ((airtelNumber && radioButtonValue == 'airtel') || (airtelNumber && radioButtonValue == 'all')) {
    phoneNumberSelector.style.border = '1.5px green solid';
    document.querySelector('.section1').style.backgroundImage = "url('airtel.png')";
  } else if ((nineMobileNumber && radioButtonValue == '9mobile') || (nineMobileNumber && radioButtonValue == 'all')) {
    phoneNumberSelector.style.border = '1.5px green solid';
    document.querySelector('.section1').style.backgroundImage = "url('9mobile.png')";
  }
  else {
    phoneNumberSelector.style.border = '1.5px red solid';
    document.querySelector('.section1').style.backgroundImage = "url('back.jpg')";
  }

}
button.addEventListener('click', start);


phoneNumberSelector.addEventListener('keyup', (e) => {
  removeElements();
  for (let i of numbers) {
    // i = i.toString();
    i = `+234${i}`;

    if (i.startsWith(phoneNumberSelector.value) && phoneNumberSelector.value != '') {
      console.log(i);
      let listItem = document.createElement("li");
      listItem.classList.add('list-items');
      listItem.style.cursor = 'pointer';
      listItem.setAttribute('onclick', `displayNames("${i}")`)
      let word = "<b>" + i.slice(0, phoneNumberSelector.value.length) + "</b>";
      word += i.slice(phoneNumberSelector.value.length);
      listItem.innerHTML = word;
      document.querySelector('.list').appendChild(listItem);
    }

  }

})
function displayNames(param) {
  phoneNumberSelector.value = param;
  removeElements();
}

function removeElements() {
  let items = document.querySelectorAll('.list-items')
  items.forEach((element) => {
    element.remove();
  });
}

// userName and phoneNo validation

username.addEventListener('keyup', validateUsername)
function validateUsername(e) {

  e.preventDefault();
  if ((/^[A-Za-z]*$/.test(username.value)) && (username.value !== '')) {
    return
  } else {
    username.value = '';
  }
}

phoneNumberSelector.addEventListener('keyup', validatePhoneNo)
function validatePhoneNo(e) {
  if ((/^[0-9+]*$/.test(phoneNumberSelector.value)) && (phoneNumberSelector.value !== '')) {
    return
  } else {
    phoneNumberSelector.value = '';
  }
}


function startApp() {
  // Your entire app should not necessarily be coded inside this 
  // single function (though there's no penalty for that), 
  // so create and use/call additional functions from here

  // pls remove the below and make some magic in here!
}

// ======= DO NOT EDIT ============== //
export default startApp;
  // ======= EEND DO NOT EDIT ========= //