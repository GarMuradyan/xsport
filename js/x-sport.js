function renderParentBox() {
    let parentBox = el('div','parent-box')

    parentBox.appendChild(renderRowsBox())

    return parentBox
}


function renderRowsBox() {
    let rowsBox = el('div','rows-box')

    let rowsLogoBox = el('div','rows-logo-box')

    let rowsLogo = el('img','rows-logo')
    rowsLogo.src = 'data:image/png;base64,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'

    let rowsTitleBox = el('h2','rows-title-box')
    rowsTitleBox.textContent = 'Sign in'

    rowsLogoBox.appendChild(rowsLogo)

    rowsBox.appendChild(rowsLogoBox)
    rowsBox.appendChild(rowsTitleBox)
    rowsBox.appendChild(renderFormBox())

    return rowsBox
}

function renderFormBox() {
    let formBox = el('div','form-box')
    formBox.id = 'login'

    let emailInputBox = el('div','email-input-box')

    let emailError = el('p','email-error')

    let emailInput = el('input','email-input')
    emailInput.setAttribute('placeholder', 'Email address')
    emailInput.setAttribute('type','text')

    let passwordInputBox = el('div','password-input-box')

    let passwordError = el('p','password-error')

    let passwordInputAndIconBox = el('div','password-input-and-icon-box')

    let passwordInput = el('input','password-input')
    passwordInput.setAttribute('placeholder','Password')
    passwordInput.setAttribute('type','password')

    let passwordInputIconBox = el('span','material-symbols-outlined')
    passwordInputIconBox.textContent = 'visibility'
    passwordInputIconBox.style.textDecoration === 'line-through'

    passwordInputIconBox.addEventListener('click',function () {
       if (passwordInput.getAttribute('type') === 'password') {
            passwordInput.setAttribute('type','text')
            passwordInputIconBox.style.textDecoration = 'none'
       }else {
        passwordInput.setAttribute('type','password')
        passwordInputIconBox.style.textDecoration = 'line-through'
       }
    })

    passwordInputAndIconBox.appendChild(passwordInput)
    passwordInputAndIconBox.appendChild(passwordInputIconBox)

    passwordInputBox.appendChild(passwordError)
    passwordInputBox.appendChild(passwordInputAndIconBox)

    emailInputBox.appendChild(emailError)
    emailInputBox.appendChild(emailInput)

    formBox.appendChild(emailInputBox)
    formBox.appendChild(passwordInputBox)
    formBox.appendChild(rednerFooterBox())


    return formBox
}

function rednerFooterBox() {
    let footerBox = el('footer')

    let rememberAndForgotBox = el('div','remember-and-forgot-box')

    let rememberBox = el('div','remember-box')
    rememberBox.textContent = 'Remember'

    let rememberChackbox = el('input','remember-chackbox')
    rememberChackbox.setAttribute('type','checkbox')

    let forgotBox = el('div','forgot-box')
    forgotBox.textContent = 'Forgot Password'

    let reqCatchError = el('p','req-catch-error')

    let loginBox = el('button','login-box')
    loginBox.textContent = 'Login'
    
    let registrationBox = el('div','registration-box')
    registrationBox.textContent = 'Registration'
    registrationBox.addEventListener('click',() => {
        window.location.href = "../register.html"
    })

    rememberBox.appendChild(rememberChackbox)

    rememberAndForgotBox.appendChild(rememberBox)
    rememberAndForgotBox.appendChild(forgotBox)

    footerBox.appendChild(rememberAndForgotBox)
    footerBox.appendChild(reqCatchError)
    footerBox.appendChild(loginBox)
    footerBox.appendChild(registrationBox)

    return footerBox
}