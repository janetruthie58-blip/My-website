alert("welcome to my website");

function validateRegistration(event) {

    event.preventDefault();

    let name = document.getElementById("fullname").value.trim();
    let email = document.getElementById("email").value.trim();

    let password = document.getElementById("password").value;

    let confirmpassword = document.getElementById("confirmpassword").value;

    //validate name: letters and spaces only
    let namePattern = /^[A-Za-z ]+$/;

    if (!namePattern.test(name)) {
        alert("Name should contain letters and spaces only.");
        return;
    }

    //validate password:uppercase, lowercase, number, special character and 8+ characters
    let passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^A-Za-z0-9\s])\S{8,}$/;


    if (!passwordPattern.test(password)) {
        alert("password must contain at least 8 characters ,uppercase,lowercase,a number and a special character.");
        return;
    }

    //confirm password
    if (password !== confirmPassword) {
        alert("passwords do not match!");
        return;
    }

    alert("registration form validated  successfully!");


}

function validateLogin(event) {

    event.preventDefault();

    let email = document.getElementById("loginemail").value.trim();
    let password = document.getElementById("loginpassword").value;

    if (email === "" || password === "") {
        alert("please fill in all fields.");
        return;

    }

    alert("login form validated successfully!");

}