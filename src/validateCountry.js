import { country } from ".";
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
}