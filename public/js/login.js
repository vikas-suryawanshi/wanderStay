const togglePassword = document.getElementById("toggle-password");
const passwordInput = document.getElementById("password");

togglePassword.addEventListener("click",()=>{
    if(passwordInput.type === "text"){
        passwordInput.type = "password";
    }else{
        passwordInput.type = "text";
    }
})