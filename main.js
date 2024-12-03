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

