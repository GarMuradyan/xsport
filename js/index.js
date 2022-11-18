function init() {
    document.body.appendChild(renderParentBox())

    let loginBox = document.querySelector('.login-box')

    let emailInput = document.querySelector('.email-input')

    let passwordInput = document.querySelector('.password-input')

    let passwordError = document.querySelector('.password-error')

    let emailError = document.querySelector('.email-error')

    loginBox.onclick = function () {
        const rout = "/users/auth/login"

        var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

        const data = {
            email: emailInput.value,
            password: passwordInput.value
        }

        if (passwordInput.value === '') {
            passwordError.textContent = showPasswordEror()
            setTimeout(() => {
                passwordError.textContent = ''
            }, 4000);
        }

        if (emailInput.value.match(validRegex)) {
            request(data,rout)
        } else {
            emailError.textContent = showEmailEror()
            setTimeout(() => {
                emailError.textContent = ''
            }, 4000);
        }


    }


}

window.onload = function () {
    init()
}

function showPasswordEror() {
    return 'Password is requaired'
}

function showEmailEror() {
    return 'Invalid email address!'
}

