//DECLARATION OF VARIABLES
//Variable for button
let button = document.querySelector('.submit-btn');

//Variable for username input
let username = document.querySelector("#username");

//Variable for phone number input
let phoneNumberSelector = document.querySelector("#phone");

//Variable for phone number input
let radioButton = document.querySelector('input[type="radio"]')



//Variable for checking phone numbers
const mtnNumber = ['703', '706', '803', '806', '810', '813', '814', '816', '903', '906', '913', '0703', '0706'];
const gloNumber = ['905', '815', '811', '807', '805', '705'];
const airtelNumber = ['802', '808', '701', '708', '901', '907', '812', '902'];
const nineMobileNumber = ['809', '909', '817', '818', '908'];
const numbers = ['703', '706', '803', '806', '810', '813', '814', '816', '903', '906', '913', '0703', '0706',
'0703', '0706', '0803', '0806', '0810', '0813', '0814', '0816', '0903', '0906', '0913',
'905', '815', '811', '807', '805', '705', '0905', '0815', '0811', '0807', '0805', '0705',
'802', '808', '701', '708', '901', '907', '812', '902', '0802', '0808', '0701', '0708', '0901', '0907', '0812', '0902',
'809', '909', '817', '818', '908', '0809', '0909', '0817', '0818', '0908']


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


//BUSAYO => PLEASE INPUT YOU CODE HERE







//DEJI AND TITI PLEASE INPUT YOUR CODE HERE








//DEJI PLEASE INPUT YOUR CODE HERE







// JOSEPH AND RIDWAN PLEASE INPUT YOUR CODE HERE