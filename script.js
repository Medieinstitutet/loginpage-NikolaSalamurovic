//set users
let users = [
    {
        username:'janne', password:'test'
    },
    {
        username:'nikko', password: 'cool'
    }
];
// function checkLogin(username,password){
//     for (let i = 0; i < users.length; i++){
//         if(users[i].username == username && users[i].password == password){
//             localStorage.setItem("storedUser", JSON.stringify({username:username,password:password}));
//             return true;
//         }
//     }
//     document.querySelector(".errorMessage").innerHTML = "Wrong Username/Password";
// }
document.addEventListener("DOMContentLoaded", () => {
    //to change from logged out page -> log in & create account pages
    const loginForm = document.querySelector("#login");
    const createAccountForm = document.querySelector("#createAccount");
    const logoutButton = document.querySelector("#logoutButton");
    const loginButton = document.querySelector("#loginButton");
    const linkAccount = document.querySelector("#linkAccount");
    const linkLogin = document.querySelector("#linkLogin");
    const logoutForm = document.querySelector("#logoutForm");
    //go back from failed login
    const linkGoBack = document.querySelector("#goBack");
    const linkGoBackButton = document.querySelector("#linkGoBack");
    //header ids
    const heretostay = document.querySelector("#heretostay");
    const changed = document.querySelector("#changed");
    //function to check if username + password is correct + store login in localstorage
    function checkLogin(username,password){
        for (let i = 0; i < users.length; i++){
            if(users[i].username == username && users[i].password == password){
                localStorage.setItem("storedUser", JSON.stringify({username:username,password:password}));
                return true;
            }
        }
        

    }
    //to check if localstorage still has data that isnt "" to stay logged in.
    if(JSON.parse(localStorage.getItem("storedUser")) &&JSON.parse(localStorage.getItem("storedUser")).username != ""){
        logoutForm.classList.remove("formHidden");
        loginForm.classList.add("formHidden");
        createAccountForm.classList.add("formHidden");
        heretostay.classList.add("formHidden");
        changed.classList.remove("formHidden");
    }
    //conditions on sucessful login and failed login
    loginButton.addEventListener("click", e => {
        e.preventDefault();
        let username = document.querySelector("#loginUsername").value;
        let password = document.querySelector("#loginPassword").value;
        let sucess = checkLogin(username,password);
        if (sucess == true){
            logoutForm.classList.remove("formHidden");
            loginForm.classList.add("formHidden");
            createAccountForm.classList.add("formHidden");
            //remove old header add new
            heretostay.classList.add("formHidden");
            changed.classList.remove("formHidden");
        } else{
            linkGoBack.classList.remove("formHidden");
            loginForm.classList.add("formHidden");
        }
    })
    //remove failed login page and re-add start page on click
    linkGoBackButton.addEventListener("click", e => {
        e.preventDefault();
        linkGoBack.classList.add("formHidden");
        loginForm.classList.remove("formHidden");
    })
    //remove logged in page back to normal on logout + remove stored user in localstorage
    logoutButton.addEventListener("click", e => {
        e.preventDefault();
        heretostay.classList.remove("formHidden");
        changed.classList.add("formHidden");
        logoutForm.classList.add("formHidden");
        loginForm.classList.remove("formHidden");
        localStorage.setItem("storedUser", JSON.stringify({username:"",password:""}));
    })
    //click to remove front page and reveal create account form
    linkAccount.addEventListener("click", e => {
        e.preventDefault();
        loginForm.classList.add("formHidden");
        createAccountForm.classList.remove("formHidden");
    })
    //go back to front page from create account form
    linkLogin.addEventListener("click", e => {
        e.preventDefault();
        loginForm.classList.remove("formHidden");
        createAccountForm.classList.add("formHidden");
    })
    
});