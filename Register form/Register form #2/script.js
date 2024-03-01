document.getElementById('registrationForm').addEventListener('submit', function(event) {
    event.preventDefault();

    var username = document.getElementById('username');
    var email = document.getElementById('email');
    var password = document.getElementById('password');
    var confirmPassword = document.getElementById('confirmPassword');

    var usernameError = document.getElementById('usernameError');
    var emailError = document.getElementById('emailError');
    var passwordError = document.getElementById('passwordError');
    var confirmPasswordError = document.getElementById('confirmPasswordError');

    var isValid = true;

    if (username.value.trim() === '') {
        usernameError.textContent = 'Будь ласка, введіть ім\'я користувача.';
        isValid = false;
    } else {
        usernameError.textContent = '';
    }

    if (email.value.trim() === '') {
        emailError.textContent = 'Будь ласка, введіть електронну пошту.';
        isValid = false;
    } else {
        emailError.textContent = '';
    }

    if (password.value.trim() === '') {
        passwordError.textContent = 'Будь ласка, введіть пароль.';
        isValid = false;
    } else {
        passwordError.textContent = '';
    }

    if (confirmPassword.value.trim() === '') {
        confirmPasswordError.textContent = 'Будь ласка, підтвердіть пароль.';
        isValid = false;
    } else if (password.value !== confirmPassword.value) {
        confirmPasswordError.textContent = 'Паролі не співпадають.';
        isValid = false;
    } else {
        confirmPasswordError.textContent = '';
    }

    if (isValid) {
        alert('Реєстрація успішна!');
        this.reset();
    }
});
