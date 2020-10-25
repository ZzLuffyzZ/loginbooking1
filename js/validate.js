const validateLogin = () => {
    if (!emailLogin || !passwordLogin) {
        submitLogin.disabled = false
        alert("Require input");
    }
    else if (listUser.email != emailLogin) {
        submitLogin.disabled = false;
        alert("Email does not exist");
    }
    else {
        submitLogin.disabled = true;
    }
    else  {
    submitLogin.disabled = false;
    alert(""Password does not match"")
    }
}   


const validateRegiter = () => {
    if (emailInput == "") {
        submitreg.disabled = false;
        alert("Email required.");
        return;
    } else if (passwordInput == "") {
        submitreg.disabled = false;
        alert("Password required.");
        return;
    } else if (passwordRetypeInput == "") {
        submitreg.disabled = false;
        alert("Password required.");
        return;
    } else if (passwordInput != passwordRetypeInput) {
        submitreg.disabled = false;
        alert("Password don't match retype your Password.");
        return;
    } else if (usernameInput == "") {
        submitreg.disabled = false;
        alert("User name required.");
        return;
    } else if (phoneInput == "") {
        submitreg.disabled = false;
        alert("Phone required.");
        return;
    } else {
        for (let i = 0; i < listUser.length; i++) {
            if (listUser[i].user === usernameInput.value) {
                submitreg.disabled = false;
                alert("Account already exists");
                return;
            }
            if (listUser[i].email === emailInput.value) {
                submitreg.disabled = false;
                alert(email + " is already register.");
                return;
            }
        }
    }
    else {submitreg.disabled = true}
}

validateRegiter();
const validateForgot = () =>{
    for (const user of listUser) {
        if (emailForgot === "") {
            submitforgot.disabled = false;
            alert("Email required.");
            return;
        }
        if(user.email !== emailForgot ){
            submitforgot.disabled === false;
            alert("Email does not exist")
        }
        if (user.email === emailForgot) {
            submitforgot.disabled = true;
}