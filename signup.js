document.addEventListener('DOMContentLoaded', () => {
    const registerForm = document.getElementById('register-form');
    const registerErrorMessage = document.getElementById('register-error-message');

    registerForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const newUsername = document.getElementById('new-username').value;
        const newPassword = document.getElementById('new-password').value;
        const confirmPassword = document.getElementById('confirm-password').value;

        // Simple validation for demonstration purposes
        if (newPassword === confirmPassword) {
            // For now, just redirect to the login page upon successful registration
            // In a real application, you'd send the data to the server here
            window.location.href = 'index.html';
        } else {
            // Show error message
            registerErrorMessage.classList.remove('hidden');
        }
    });
});
