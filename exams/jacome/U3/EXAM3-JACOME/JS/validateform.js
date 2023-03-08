let expressions = {
    name: /^[a-zA-Z\s]{2,50}$/
}

function validateName() {
    let nameInput = document.getElementById('name');
    let nameError = document.getElementById('name-error');
    let nameRegex = /^[a-zA-Z\s]{2,50}$/;

    if (nameInput.value.trim() === '') {
        nameError.innerText = 'Please, enter the name';
        nameError.style.display = 'block';
        return false;
    } else if (!nameRegex.test(nameInput.value)) {
        nameError.innerText = 'Please enter a valid name.';
        nameError.style.display = 'block';
        return false;
    } else {
        nameError.innerText = '';
        nameError.style.display = 'none';
        return true;

    }
}

function validateBirthdate() {
    var birthdate = document.getElementById("birthdate").value;
    var date = Date.parse(birthdate);

    if (isNaN(date)) {
        // If it is not a valid date, display an error message
        document.getElementById("birthdate").style.borderColor = "red";
        alert("The date of birth is invalid");
    } else {
        // If it is a valid date, change the border to green to indicate that it is correct
        document.getElementById("birthdate").style.borderColor = "green";
        var calculate = new Date();
        var edad = Math.floor((calculate - date) / 31557600000);
        document.getElementById("edad").value = edad;

    }
}


