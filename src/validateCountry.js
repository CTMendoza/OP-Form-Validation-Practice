import { country } from ".";
import { zipCode } from ".";
import { zipError } from "./validatezipCode";
export {validateCountry};

const countryErr = document.getElementById('country-error');

function validateCountry () {

    country.addEventListener('blur',  () => {
        if(!country.checkValidity()) {
            countryErr.textContent = `Please select a country from the list`
            countryErr.style.color = 'red';
        } else countryErr.textContent = ``;
    });

    country.addEventListener('input',  () => {
        if(!country.checkValidity()) {
            countryErr.textContent = `Please select a country from the list`
            countryErr.style.color = 'red';
        } else countryErr.textContent = ``;
    });

    country.addEventListener('change', () => {
        if (!country.checkValidity()) {
            countryErr.textContent = `Please select a country from the list`
            countryErr.style.color = 'red';
        } else {
         countryErr.textContent = ``;
        }
        zipCode.value = ""; // Reset zipcode when country changes
        zipError.textContent = ""; // Hide previous error
    })
}