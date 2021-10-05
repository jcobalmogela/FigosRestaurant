const btnSignIn = document.querySelectorAll('.btnSignIn');
const modalSignIn = document.querySelector('.signInValidation');


btnSignIn.forEach(button => {
    button.addEventListener('click', () => {
        location.href = "login.html"
 })
});

