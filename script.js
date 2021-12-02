let users = [
    {
        username:'janne', password:'test'
    },
    {
        username:'nikko', password: 'cool'
    }
];
function checkLogin(username,password){
    for (let i = 0; i < users.length; i++){
        if(users[i].username == username && users[i].password == password){
            localStorage.setItem("storedUser", JSON.stringify({username:username,password:password}));
            return true;
        }
    }
    document.querySelector(".errorMessage").innerHTML = "Wrong Username/Password";
}
document.addEventListener("DOMContentLoaded", () => {
    
    const loginForm = document.querySelector("#login");
    const createAccountForm = document.querySelector("#createAccount");
    const logoutButton = document.querySelector("#logoutButton");
    const loginButton = document.querySelector("#loginButton");
    const linkAccount = document.querySelector("#linkAccount");
    const linkLogin = document.querySelector("#linkLogin");
    const logoutForm = document.querySelector("#logoutForm");

    if(JSON.parse(localStorage.getItem("storedUser")) &&JSON.parse(localStorage.getItem("storedUser")).username != ""){
        logoutForm.classList.remove("formHidden");
        loginForm.classList.add("formHidden");
        createAccountForm.classList.add("formHidden");
    }

    loginButton.addEventListener("click", e => {
        e.preventDefault();
        let username = document.querySelector("#loginUsername").value;
        let password = document.querySelector("#loginPassword").value;
        let sucess = checkLogin(username,password);
        if (sucess == true){
            logoutForm.classList.remove("formHidden");
            loginForm.classList.add("formHidden");
            createAccountForm.classList.add("formHidden");
        }
    })
    
    logoutButton.addEventListener("click", e => {
        e.preventDefault();
        logoutForm.classList.add("formHidden");
        loginForm.classList.remove("formHidden");
        localStorage.setItem("storedUser", JSON.stringify({username:"",password:""}));
    })
    
    linkAccount.addEventListener("click", e => {
        e.preventDefault();
        loginForm.classList.add("formHidden");
        createAccountForm.classList.remove("formHidden");
    })

    linkLogin.addEventListener("click", e => {
        e.preventDefault();
        loginForm.classList.remove("formHidden");
        createAccountForm.classList.add("formHidden");
    })
    
});