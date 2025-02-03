import "./styles.css";
import { validateEmail } from "./validateEmail";
import { validateCountry } from "./validateCountry";
import { setupZipCodeValidation } from "./validatezipCode";
import { validatePassword } from "./validatePassword";
export {email, country, zipCode, password, confirmedPw}
const email = document.getElementById('email');
const country = document.getElementById('country');
const zipCode = document.getElementById('zipcode');
const password = document.getElementById('password');
const confirmedPw = document.getElementById('password-confirmation');
const form = document.getElementById('form');

document.addEventListener("DOMContentLoaded", () => {
    validateEmail();
    validateCountry();
    setupZipCodeValidation();
    validatePassword(); // Now it runs only after DOM is ready
});