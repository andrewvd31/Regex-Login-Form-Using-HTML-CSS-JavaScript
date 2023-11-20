// *Signup
const signinMainForm = document.getElementById('sign-in-main-form')
const signupMainForm = document.getElementById('sign-up-main-form')
const signupBtn = document.getElementById('sign-up-btn')
const signupForm = document.getElementById('sign-up-form')
const signupText = document.getElementById('sign-up-text')
const signupEmail = document.getElementById('sign-up-email')
const signupPassword = document.getElementById('sign-up-password')
const signupConfirmPassword = document.getElementById('sign-up-confirm-password')
const signupPin = document.getElementById('pin')
const signupNumber = document.getElementById('sign-up-number')

// *Signin
const signinText = document.getElementById('sign-in-text')
const signinPassword = document.getElementById('sign-in-password')

const closeBtn = document.querySelector('.close-btn')
const userLabel = document.getElementById('user-label')

// *Patterns
const userPattern = /^[a-zA-Z]+(?:\s[a-zA-Z]+)?$/
const emailPattern = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-]+)(\.[a-zA-Z]{2,5}){1,2}$/
const mobileNumberPattern= /^[6-9]\d{9}$/
const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[A-Za-z\d]{8,}$/
const pinPattern = /^[6-9]{1}\d{5}$/

// *Declarations
let signinUserValue = false
let signinPasswordValue = false
let signupUserValue = false
let signupEmailValue = false
let signupPinValue = false
let signupNumberValue = false
let signupPasswordValue = false
let signupConfirmPasswordValue = false
let password = ""
let confirmPassword = ""

// *Signin Section

function regexTestSignInUserName(){
    signinText.addEventListener('keyup',()=>{
        if (userPattern.test(signinText.value)){
            signinText.style.color = "green"
            signinUserValue = true
        }
        else{
            signinText.style.color = "red"
            signinUserValue = false
        }
    })
}

// !function regexTestSignInUserName(element,data,constant){
//     element.addEventListener('keydown',()=>{
//         if (data.test(element.value)){
//             element.style.color = "green"
//             constValue()
//         }
//         else{
//             element.style.color = "red"
//             constant = false
//         }
//     })
// }

// regexTestSignInUserName(signinText,userPattern,signinUserValue)

function regexTestSignInPassword(){
    signinPassword.addEventListener('keyup',()=>{
        if (passwordPattern.test(signinPassword.value)){
            signinPassword.style.color = "green"
            signinPasswordValue = true
        }
        else{
            signinPassword.style.color = "red"
            signinPasswordValue = false
        }
    })
}

signinMainForm.addEventListener('submit',(e)=>{
    e.preventDefault()
    console.log(signinUserValue);
    if (signinUserValue && signinPasswordValue){
        alert("Great! You have successfully logged in")
        signinText.value = ""
        signinPassword.value = ""
    }
    else{
        alert("Please enter the correct credentials")
    }
})

// *Signup Section

function signupBtnReset(){
    signupText.value = ""
    signupPassword.value = ""
    signupEmail.value = ""
    signupNumber.value = ""
    signupPin.value = ""
    signupConfirmPassword.value = ""
}

function regexTestSignUpUserName(){
    signupText.addEventListener('keyup',()=>{
        if (userPattern.test(signupText.value)){
            signupText.style.color = "green"
            signupUserValue = true
        }
        else{
            signupText.style.color = "red"
            signupUserValue = false
        }
    })
}

function regexTestSignUpEmail(){
    signupEmail.addEventListener('keyup',()=>{
        if (emailPattern.test(signupEmail.value)){
            signupEmail.style.color = "green"
            signupEmailValue = true
        }
        else{
            signupEmail.style.color = "red"
            signupEmailValue = false
        }
    })
}

function regexTestSignUpPassword(){
    signupPassword.addEventListener('keyup',()=>{
        if (passwordPattern.test(signupPassword.value)){
            signupPassword.style.color = "green"
            signupPasswordValue = true
            password = signupPassword.value
        }
        else{
            signupPassword.style.color = "red"
            signupPasswordValue = false
        }
    })
}

function regexTestSignUpConfirmPassword(){
    signupConfirmPassword.addEventListener('keyup',()=>{
        if (passwordPattern.test(signupConfirmPassword.value)){
            signupConfirmPassword.style.color = "green"
            signupConfirmPasswordValue = true
            confirmPassword = signupConfirmPassword.value
        }
        else{
            signupConfirmPassword.style.color = "red"
            signupConfirmPasswordValue = false
        }
    })
}

function regexTestSignUpMobileNumber(){
    signupNumber.addEventListener('keyup',()=>{
        if (mobileNumberPattern.test(signupNumber.value)){
            signupNumber.style.color = "green"
            signupNumberValue = true
        }
        else{
            signupNumber.style.color = "red"
            signupNumberValue = false
        }
    })
}

function regexTestSignUpPin(){
    signupPin.addEventListener('keyup',()=>{
        console.log(signupPin.value);
        if (pinPattern.test(signupPin.value)){
            signupPin.style.color = "green"
            signupPinValue = true
        }
        else{
            signupPin.style.color = "red"
            signupPinValue = false
        }
    })
}

signupBtn.addEventListener('click',()=>{
    signupForm.style.display = "block"
    regexTestSignUpUserName()
    regexTestSignUpEmail()
    regexTestSignUpPassword()
    regexTestSignUpConfirmPassword()
    regexTestSignUpMobileNumber()
    regexTestSignUpPin()
})

signupMainForm.addEventListener('submit',(e)=>{
    e.preventDefault()
    if (signupUserValue && signupEmailValue 
    && signupPinValue && signupNumberValue 
    && signupPasswordValue && signupConfirmPasswordValue){
        if(password === confirmPassword){
            alert("Great! You have successfully logged in")
            signupBtnReset()
        }
        else{
            alert("Recheck your password")
        }
    }
    else{
        alert("Please enter the correct credentials")
    }
})

closeBtn.addEventListener('click',function(){
    signupForm.style.display = "none"
})

regexTestSignInUserName()
regexTestSignInPassword()