import { password, confirmedPw } from ".";
export {validatePassword};

const pwError = document.getElementById('password-error');
const pwConfirmErr = document.getElementById('pw-confirm-error');

function validatePassword () {
    const pwValue = password.value;
    const confirmValue = confirmedPw.value;
    password.addEventListener('input', () => {
        if(pwValue.length < 8) {
            pwError.textContent = password.validationMessage;
            pwError.style.color = 'red';
        } 
        else {
            pwError.textContent='Password is Valid!';
            pwError.style.color = 'green';
        }
    })

    password.addEventListener('blur', () => {
        if(pwValue.length < 8) {
            pwError.textContent = password.validationMessage;
            pwError.style.color = 'red';
        } 
        else {
            pwError.textContent = '';
        }
    })

    confirmedPw.addEventListener('input', checkPasswordMatch);
    confirmedPw.addEventListener('blur', checkPasswordMatch);
}

function checkPasswordMatch() {
    if (confirmedPw.value === '') {
        pwConfirmErr.textContent = 'Please confirm your password.';
        pwConfirmErr.style.color = 'red';
    } else if (confirmedPw.value !== password.value) {
        pwConfirmErr.textContent = 'Passwords do not match.';
        pwConfirmErr.style.color = 'red';
    } else {
        pwConfirmErr.textContent = 'Passwords match!';
        pwConfirmErr.style.color = 'green';
    }
}