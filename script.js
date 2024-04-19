let form = document.getElementById('form');
let passwordOne = document.getElementById('password1');
let conform = document.getElementById('password2');
let messageCont = document.querySelector('.message-container');
let message = document.getElementById('message');

let isValid = false;
let checkPassword = false;

function validForm() {
    isValid = form.checkValidity();

    if (!isValid) {
        message.textContent = 'Please fill all the details';
        messageCont.style.color = 'red';
    }

    if (passwordOne.value === conform.value) {
        checkPassword = true;
        passwordOne.style.borderColor = 'green';
        conform.style.borderColor = 'green';
    } else {
        checkPassword = false;
        passwordOne.style.borderColor = 'red';
        conform.style.borderColor = 'red';
        message.textContent = 'Passwords do not match';
        message.style.color = 'red';
    }
    if(isValid && checkPassword){
        message.style.color='green';
        messageCont.textContent='succuse';
       
        messageCont.style.borderColor='green';
    }
}

function storeData() {
    let user = {
        name: form.name.value,
        phone: form.phone.value,
        email: form.email.value,
        website: form.website.value,
        password: form.password.value // Access password field using passwordOne
    };
    console.log(user);
}

function formData(e) {
    e.preventDefault();
    validForm();
    if (isValid && checkPassword) { // Fixed variable name
        storeData();
    }
}

form.addEventListener('submit', formData);
