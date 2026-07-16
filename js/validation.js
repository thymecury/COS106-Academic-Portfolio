document.addEventListener('DOMContentLoaded', () => {
    const contactForm = document.getElementById('contact-form');
    const errorBanner = document.getElementById('error-message');
    const successBanner = document.getElementById('success-message');

    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        // Form field values
        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const phone = document.getElementById('phone').value.trim();
        const message = document.getElementById('message').value.trim();

        // Clear output banners
        errorBanner.style.display = 'none';
        successBanner.style.display = 'none';
        errorBanner.innerText = '';

        // Verification 1: No fields are empty
        if (!name || !email || !phone || !message) {
            showValidationError('All input fields must be filled out before submitting.');
            return;
        }

        // Verification 2: Standard email format check using regex
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            showValidationError('Please enter a valid email address.');
            return;
        }

        // Verification 3: Phone number contains digits only
        const numericRegex = /^\d+$/;
        if (!numericRegex.test(phone)) {
            showValidationError('The phone number must contain numeric digits only.');
            return;
        }

        // Validation Passed!
        successBanner.style.display = 'block';
        contactForm.reset();
    });

    function showValidationError(text) {
        errorBanner.innerText = text;
        errorBanner.style.display = 'block';
    }
});