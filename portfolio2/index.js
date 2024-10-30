// text field validation for the contact form.
let fields = {};

document.addEventListener("DOMContentLoaded", function() {
    fields.firstName = document.getElementById('fname');
    fields.lastName = document.getElementById('lname');
    fields.email = document.getElementById('email');
    fields.message = document.getElementById('subject');
})

function isNotEmpty(value) {
    if (value == null || typeof value == 'undefined') return false;

    return (value.length > 0);
}

function fieldValidation(field, validationFunction){
    if (field == null) return false;

    let isFieldValid = validationFunction(field.value)
    if (!isFieldValid) {
        field.className = 'placeholderRed';
    } else {
        field.className = '';
    }
    return isFieldValid;
}

function isValid() {
    let valid = true;

    valid &= fieldValidation(fields.firstName, isNotEmpty);
    valid &= fieldValidation(fields.lastName, isNotEmpty);
    valid &= fieldValidation(fields.email, isNotEmpty);
    valid &= fieldValidation(fields.message, isNotEmpty);

    return valid;
}

class User {
    constructor(firstName, lastName, email, message) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.message = message;
    }
}

function sendContact() {
    if (isValid()) {
        let usr = new User(firstName.value, lastName.value, email.value, message.value);

        alert(`${usr.firstName} Thanks for contacting, I'll get back to you as soon as i can!`)
    } else {
        alert("There was an error.")
    }
}


// back and forth buttons

function goBack(){
    window.history.back();
}

function goForward(){
    window.history.forward();
}


//date on the bottom right of the screen.
function showTime(){
    let date = new Date();
    return date;
}

document.getElementById('timetest1').innerHTML = showTime();