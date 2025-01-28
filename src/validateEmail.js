import {email} from ".";
export {validateEmail};

const emailErr = document.getElementById('email-error');


function validateEmail() {
    const runValidation = () => {
        let text;

        if (!email.checkValidity()) {
                text =  email.validationMessage;
                emailErr.style.color = 'red';
        } 
        else {
            text = `Email is valid!`
            emailErr.style.color = 'green';
        }
        emailErr.textContent = text;
    };

    // Listen for the blur event (when leaving the field)
    email.addEventListener('blur', runValidation);

    // Listen for the Enter key press (when typing in the field)
    email.addEventListener('keydown', (event) => {
        if (event.key === 'Enter') {
            event.preventDefault(); // Prevent form submission, if needed
            runValidation();
        }
    });

    email.addEventListener('input', (event) => {
            runValidation();
    });
}

