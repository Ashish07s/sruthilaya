let submitted = false;
const RELOAD_DELAY = 4000; 

// --- Form Submission Handler (Reloads on success) ---
document.getElementById('hidden_iframe').onload = function() {
    if (submitted) {
        const formContent = document.getElementById('formContent');
        const submitBtn = document.getElementById('submitBtn');
        const successMsg = document.getElementById('successMsg');
        
        // Hide form elements and show success message
        formContent.style.display = 'none'; 
        submitBtn.style.display = 'none';
        successMsg.style.display = 'block'; 
        successMsg.scrollIntoView({ behavior: 'smooth', block: 'start' });

        // Wait for 4 seconds then reload the page
        setTimeout(() => {
            submitted = false;
            window.location.reload(); 
        }, RELOAD_DELAY); 
    }
};

document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('leadForm');
    const nameInput = document.getElementById('name');
    const phoneInput = document.getElementById('phone');
    const countrySelect = document.getElementById('country');

    // 1. Form Submission Listener
    form.addEventListener('submit', function (e) {
        
        // Manually check the mandatory fields (Full Name, Phone Number, Country)
        if (!nameInput.value || !phoneInput.value || !countrySelect.value) {
            e.preventDefault();
            // This will trigger the browser's default validation message for the first empty required field
            // A custom alert is no longer needed since the browser handles the `required` attribute.
            return; 
        }

        // Set the flag and update button appearance
        submitted = true;
        const submitBtn = document.getElementById('submitBtn');
        submitBtn.textContent = 'Sending...';
        submitBtn.disabled = true;
    });
});

// *Note: The extraneous/unused JavaScript logic from the original code has been removed for a clean solution.*
