function togglePasswordVisibility(inputId, icon) {
    const inputField = document.getElementById(inputId);
    if (inputField.type === "password") {
        inputField.type = "text";
        icon.innerHTML = '<i class="fas fa-eye-slash"></i>'; // Change icon to eye-slash
    } else {
        inputField.type = "password";
        icon.innerHTML = '<i class="fas fa-eye"></i>'; // Change icon back to eye
    }
}
function validateForm(event) {
    // Prevent the default form submission
    event.preventDefault();

    // Clear previous error messages
    document.getElementById('fullNameError').classList.add('hidden');
    document.getElementById('emailError').classList.add('hidden');
    document.getElementById('passwordError').classList.add('hidden');
    document.getElementById('confirmPasswordError').classList.add('hidden');

    const fullName = document.getElementById('fullName').value.trim();
    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirm-password').value;

    let isValid = true;

    // Validate full name
    if (fullName === "") {
        document.getElementById('fullNameError').innerText = "Full Name is required.";
        document.getElementById('fullNameError').classList.remove('hidden');
        isValid = false;
    }

    // Validate email
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (email === "") {
        document.getElementById('emailError').innerText = "Email is required.";
        document.getElementById('emailError').classList.remove('hidden');
        isValid = false;
    } else if (!emailPattern.test(email)) {
        document.getElementById('emailError').innerText = "Please enter a valid email address.";
        document.getElementById('emailError').classList.remove('hidden');
        isValid = false;
    }

    // Validate password
    if (password === "") {
        document.getElementById('passwordError').innerText = "Password is required.";
        document.getElementById('passwordError').classList.remove('hidden');
        isValid = false;
    } else if (password.length < 6) {
        document.getElementById('passwordError').innerText = "Password must be at least 6 characters long.";
        document.getElementById('passwordError').classList.remove('hidden');
        isValid = false;
    }

    // Validate confirm password
    if (confirmPassword === "") {
        document.getElementById('confirmPasswordError').innerText = "Please confirm your password.";
        document.getElementById('confirmPasswordError').classList.remove('hidden');
        isValid = false;
    } else if (password !== confirmPassword) {
        document.getElementById('confirmPasswordError').innerText = "Passwords do not match.";
        document.getElementById('confirmPasswordError').classList.remove('hidden');
        isValid = false;
    }

    // If all validations pass
    if (isValid) {
        // You can proceed with form submission or any other action here
        alert("Form submitted successfully!");
    }
}

function validatelogin(event) {
    // Prevent the form from submitting
    event.preventDefault();

    // Get the input values
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    // Get the error message elements
    const emailError = document.getElementById('emailError');
    const passwordError = document.getElementById('passwordError');

    // Clear previous error messages
    emailError.classList.add('hidden');
    passwordError.classList.add('hidden');

    let isValid = true;

    // Validate email
    if (!email) {
        emailError.textContent = 'Email is required.';
        emailError.classList.remove('hidden');
        isValid = false;
    } else if (!validateEmail(email)) {
        emailError.textContent = 'Please enter a valid email address.';
        emailError.classList.remove('hidden');
        isValid = false;
    }

    // Validate password
    if (!password) {
        passwordError.textContent = 'Password is required.';
        passwordError.classList.remove('hidden');
        isValid = false;
    } else if (password.length < 6) {
        passwordError.textContent = 'Password must be at least 6 characters long.';
        passwordError.classList.remove('hidden');
        isValid = false;
    }

    // If the form is valid, you can submit it or perform further actions

}

// Helper function to validate email format
function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
}


function validateforgetpwd(event) {
    event.preventDefault(); // Prevent form submission

    const emailInput = document.getElementById('email');
    const emailError = document.getElementById('emailError');
    const email = emailInput.value.trim();

    // Clear previous error message
    emailError.classList.add('hidden');
    emailError.textContent = '';

    // Simple email validation regex
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (email === '') {
        emailError.textContent = 'Email is required.';
        emailError.classList.remove('hidden');
    } else if (!emailPattern.test(email)) {
        emailError.textContent = 'Please enter a valid email address.';
        emailError.classList.remove('hidden');
    } else {
        // If valid, you can submit the form or perform any action you need
        // For example, you can submit the form using AJAX or redirect
        alert('Form submitted successfully!'); // Placeholder for actual submission logic
    }
}


function restartpwd(event) {
    // Prevent the default form submission
    event.preventDefault();

    document.getElementById('passwordError').classList.add('hidden');
    document.getElementById('confirmPasswordError').classList.add('hidden');

    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirm-password').value;

    let isValid = true;


    // Validate password
    if (password === "") {
        document.getElementById('passwordError').innerText = "Password is required.";
        document.getElementById('passwordError').classList.remove('hidden');
        isValid = false;
    } else if (password.length < 6) {
        document.getElementById('passwordError').innerText = "Password must be at least 6 characters long.";
        document.getElementById('passwordError').classList.remove('hidden');
        isValid = false;
    }

    // Validate confirm password
    if (confirmPassword === "") {
        document.getElementById('confirmPasswordError').innerText = "Please confirm your password.";
        document.getElementById('confirmPasswordError').classList.remove('hidden');
        isValid = false;
    } else if (password !== confirmPassword) {
        document.getElementById('confirmPasswordError').innerText = "Passwords do not match.";
        document.getElementById('confirmPasswordError').classList.remove('hidden');
        isValid = false;
    }

    // If all validations pass
    if (isValid) {
        alert("Form submitted successfully!");
    }
}

