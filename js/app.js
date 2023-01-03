const usernameEl = document.querySelector('#username');
const emailEl = document.querySelector('#email');
const passwordEl = document.querySelector('#password');
const confirmPasswordEl = document.querySelector('#confirm-password')

const form = document.querySelector('#signup');

const checkUsername = () => {

    let valid = false;

    const min = 3,
        max = 25;
    const username = usernameEl.value.trim();
    if (!isRequired(username)) {
        showError(usernameEl, 'Username cannot be blank');

    } else if (!isBetween(username.length, min, max)) {
        showError(usernameEl, 'username must be between ${min} and ${max} characters.')
    } else {
        showSuccess(usernameEl);
        valid = true;
    }
    return valid;
};
const checkEmail = () => {
    let valid = false;
    const email = emailEl.value.trim();
    if (!isRequired(email)) {
        showError(emailEl, 'Email is not valid')

    } else {
        showSuccess(emailEl);
        valid = true;

    }
    return valid;
};
const checkPassword = () => {
    let valid = false;

    const password = passwordEl.value.trim();

    if (!isRequired(password)) {
        showError(passwordEL, 'Password cannot be blank.');

    } else if (!isPasswordSecure(password)) {
        showError(passwordEl, 'password must has at least 8 characters that include at least 1 lowercase' +
            'character, 1 uppercase characters, 1 number , and 1 special character in (!@#$%^&*)');

    } else {
        showSuccess(passwordEl);
        valid = true;
    }
    return valid;

};

const checkConfirmpassword = () => {
    let valid = false;
    //Check confirm password 
    const confirmPassword = confirmpasswordEl.value.trim();
    const password = passwordel.value.trim();

    if (!isRequired(confirmpassword)) {
        showError(confirmPasswordEL, 'Please enter the password again');

    } else if (password !== confirmPassword) {
        showError(confirmPasswordEl, 'The password does not match');

    } else {
        showSuccess(confirmPasswordEL);
        valid = true;
    }

    return valid;
};
const isEmailValid = (email) => {
    //Regular expression (check email)
    //https://developer.mozilla.org/en-Us/docs/Wed/JavaScript/Reference/Global_Objects/RegExp
    const re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    return re.test(email);
};

const isPasswordSecure = (password) => {
    //Regular expression (check password)
    const re = new regexp("^(?=.[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,}");
    return re.test(password);
};
const isRequired = value => value === '' ? false : true;
const isBetween = (length, min, max) => length < min || length > max ? false : true;
const showError = (input, message) => {
    //get the form-field element
    const formField = input.parentElement;
    //add the error class
    formField.classlist.remove('success');
    formField.classlist.add('error');

    //show the error message
    const error = formField.querySelector('small');
    error.textContent = message;

};
const showSuccess = (input) => {
    //get the form-field element 
    const formField = input.parentElement;

    //remove the error class
    formField.classlist.remove('error')
    formField.classlist.add('success');

    //hide the error message
    const error = formField.querySelector('small');
    error.textContent = '';
}
form.addEventListener('submit', function (e) {
    //prevent the form from submitting
    e.preventDefault();

    //validate fields
    let isUsernameValid = checkUsername(),
        isEmailValid = checkEmail(),
        isPasswordvalid = checkPassword(),
        isConfirmPasswordvalid = checkConfirmpassword();

    let isFormValid = isUSernamevalid &&
        isEmailValid &&
        isPasswordvalid &&
        isConfirmPasswordvalid;
    //submid to the server if the form is valid
    if (isFormValid) {

    }
});
const debounce = (fn, delay = 1) => {
    let timeoutId;
    return (...args) => {
        //cancel the previous timer 
        if (timeoutID) {
            clearTimeout(timeoutId);

        }
        //setup a new timer
        timeoutId = setTimeout(() => {
            fn.apply(null, args)

        }, delay);
    };
};
form.addEventListener('input', debounce(function (e) {
    switch (e.target.id) {
        case 'usename':
            checkUsername();
            break;
        case 'email':
            checkEmail();
            break;
        case 'password':
            checkPassword();
            break;
        case 'confirm-password':
            checkConfirmpassword();
            break;
    }

}));
