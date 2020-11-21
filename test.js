var btn1 = document.getElementById('btn1');
var btn2 = document.getElementById('btn2');

var register = document.getElementById('register');
var login = document.getElementById('login');

btn1.addEventListener('click', registerForm, false);
btn2.addEventListener('click', loginForm, false);

function btnColor(btn) {
    if (btn.classList.contains('active-btn')) {
        btn.classList.remove('active-btn');
    }
    btn.classList.add('active-btn');
    if (!btn.nextElementSibling) {
        btn.previousElementSibling.classList.remove('active-btn')
    } else {
        btn.nextElementSibling.classList.remove('active-btn')
    }
}

function registerForm() {
    if (register.classList.contains('form-active')) {
        register.classList.remove('form-active');
    }
    register.classList.add('form-active');
    register.classList.remove('form-inactive-left')
    login.classList.add('form-inactive-left')
    btnColor(btn1)
}

function loginForm() {
    if (login.classList.contains('form-active')) {
        login.classList.remove('form-active');
    }
    login.classList.add('form-active');
    login.classList.remove('form-inactive-left')
    register.classList.add('form-inactive-left')
    btnColor(btn2)
}



