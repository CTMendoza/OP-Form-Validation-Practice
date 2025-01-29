import { zipCode } from ".";
import { country } from ".";
export {zipError, setupZipCodeValidation}

 // Zip Code Patterns by Country
 const zipPatterns = {
    us: /^\d{5}(-\d{4})?$/, // USA: 12345 or 12345-6789
    jp: /^\d{3}-\d{4}$/, // Japan: 123-4567
    me: /^\d{5}$/ // Mexico: 12345
};

const zipError = document.getElementById("zip-error");

function validateZipCode () {
        const selectedCountry = country.value;
        const zipPattern = zipPatterns[selectedCountry];

        if (zipPattern && !zipPattern.test(zipCode.value)) {
            zipError.textContent = "Invalid zip code format";
            zipError.style.color = 'red';
        } else {
            
            zipError.textContent = "zipcode format matches!";
            zipError.style.color = 'green'
        }
}

// Export event listener setup to be used in index.js
function setupZipCodeValidation() {
    zipCode.addEventListener("input", validateZipCode);
    zipCode.addEventListener('blur', validateZipCode);
}
