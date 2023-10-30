let nameError = document.querySelector('#name-error');
let phoneError = document.querySelector('#phone-error');
let emailError = document.querySelector('#email-error');
let messageError = document.querySelector('#message-error');
let submitError = document.querySelector('#subit-error');

function validateName(){
    let name = document.getElementById("contact-name").value;
    
    if(name.lenght === 0) { 
        nameError .innerHTML = "Name is required";
        return false;
    }

    if(!name.match(/^[A-Za-z\s'-]+ [A-Za-z\s'-]+$/)) {
        nameError.innerHTML = "Write full name";
        return false;
    }
    
    nameError.innerHTML = '<i class="fas fa-check-circle"></i>';
    return true;
}

function validatePhone(){
    let phone = document.getElementById("contact-phone").value;
    
    if(phone.length  === 0) { 
        phoneError .innerHTML = "Phone no is required";
        return false;
    }

    if(phone.length  !== 10){
        phoneError.innerHTML = "Phone no should be 10 digits";
        return false;
    }

    if(!phone.match(/^[0-9]{10}$/)) {
        phoneError.innerHTML = "Only digits please";
        return false;
    }
    
    phoneError.innerHTML = '<i class="fas fa-check-circle"></i>';
    return true;
}


function validateEmail() {
    let email = document.getElementById("contact-email").value;

     if (email.length === 0) {
        emailError.innerHTML = "Email is required";
        return false;
    }
    
    if (!email.match(/^[A-Za-z._-]+@[A-Za-z]+\.[a-z]{2,4}$/)) {
        emailError.innerHTML = "Email Invalid";
        return false;
    }

    emailError.innerHTML = '<i class="fas fa-check-circle"></i>';
    return true;
}

function validateMesaage() {
    let mesaage = document.getElementById("contact-mesaage").value;

    let required = 30;
    let left = required - mesaage.length;

    if(left > 0) {
        messageError.innerHTML = left + "more characters required";
        return false;
    }
    
    messageError.innerHTML = '<i class="fas fa-check-circle"></i>';
    return true;
}

function validateForm() {
    if(!validateName() || !validatePhone() || ! validateMesaage()){
        submitError.style.display = "block";
        submitError.innerHTML = "Please fix error to subit";
        setTimeout(()=>{
            submitError.style.display = "none";
        },3000)
        return false;
    }
}