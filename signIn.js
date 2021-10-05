const btnSignIn = document.querySelectorAll('.btnSignIn');
const modalSignIn = document.querySelector('.signInValidation');
const email = document.getElementById('email');
const pass = document.getElementById('password');
const form = document.getElementById('form');
const errorMessage = document.getElementById('error');
const shop = document.querySelector(".shop-icon");
const loginBtn = document.querySelector("#login");
console.log(shop);



btnSignIn.forEach(button => {
    button.addEventListener('click', () => {
        location.href = "login.html"
 })
});

form.addEventListener('submit', (e) => {
   let messages = []
   let state = 0;
console.log();
   if(email.value === '' || email.value == null){
    messages.push('Email is required');
   }else{
    e.preventDefault();
   }
   if(password.value.length <= 8){
    messages.push('Password must be longer than 8 characters');
   }else{
    e.preventDefault();
    location.href = "index.html";
   
   }
   if(messages.length > 0){
    e.preventDefault();
     errorMessage.innerText = messages.join(', ');
   }
   if(state === 1){
        shop.classList.remove('none');
   }


})