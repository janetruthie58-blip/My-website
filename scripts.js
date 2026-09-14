alert("welcome to my website");

function checkpassword() {

    let password =
        document.getElementById("password").value;
    let confirmpassword =
        document.getElementById("confirmpassword").value;

    if (password === confirmpassword) {
        alert("registration successful!");
    } else {
        alert("passwords do not match!");
    }

}