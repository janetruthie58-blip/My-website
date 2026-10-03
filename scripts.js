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
    if (password !== confirmpassword) {
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
    window.location.href = "dashboard.html";

}

function changePassword() {
    let newPassword = prompt("Enter your new password:");

    if (newPassword === null || newPassword.trim() === "") {
        alert("password cannot be empty,");
        return;

    }

    alert("Password changed successfully!");
}

function saveEntry() {
    let title =
        document.getElementById("entry-title").value.trim();
    let date = document.getElementById("entry-date").value;
    let content = document.getElementById("entry-content").value.trim();

    if (title === "" || date === "" || content === "") {

        alert("please fill in all fields.");
        return;
    }

    let entries = JSON.parse(localStorage.getItem("diaryEntries")) || [];
    let newEntry = { title: title, date: date, content: content };

    entries.push(newEntry);

    localStorage.setItem("diaryEntries", JSON.stringify(entries));

    alert("Diary entry saved successfully!");

    window.location.href = "entries.html";
}

function displayEntries() {
    let entriesList = document.getElementById("entries-list");

    if (!entriesList) {
        return;
    }

    let entries = JSON.parse(localStorage.getItem("diaryEntries")) || [];

    if (entries.length === 0) {
        entriesList.innerHTML = "<p>No entries yet.Start writing your diary entry!</p>";
        return;
    }

    entriesList.innerHTML = "";

    entries.forEach(function(entry) {
        let entryDiv = document.createElement("div");

        entryDiv.innerHTML = `
        <h3>${entry.title}</h3>
        <p><strong>Date:</strong> ${entry.date}</p>
        <p>${entry.content}</p>
        <button onclick="deleteEntry(${entries.indexOf(entry)})">Delete</button>
        <hr>

        `;

        entriesList.appendChild(entryDiv);
    });

}

displayEntries();

function clearEntry() {
    document.getElementById("entry-title").value = "";
    document.getElementById("entry-date").value = "";
    document.getElementById("entry-content").value = "";
}

function deleteEntry(index) {
    let entries =
        JSON.parse(localStorage.getItem("diaryEntries")) || [];

    entries.splice(index, 1);

    localStorage.setItem("diaryEntries",
        JSON.stringify(entries));

    displayEntries();

}

let diaryForm = document.getElementById("diaryForm");

if (diaryForm) {

    diaryForm.addEventListener("submit", function(event) {

        event.preventDefault();


        let title = document.getElementById("entryTitle").value.trim();
        let text = document.getElementById("entryText").value.trim();

        let entry = {
            title: title,
            text: text,
            date: new Date().toLocaleString()
        };

        localStorage.setItem("diaryEntry", JSON.stringify(entry));

        alert("Diary entry saved successfully!");

        document.getElementById("diaryForm").reset();

    });

}

function viewEntry() {

    let savedEntry = localStorage.getItem("diaryEntry");

    if (savedEntry === null) {
        alert("No diary entry found.");
        return;

    }

    let entry = JSON.parse(savedEntry);

    alert(
        "Title: " + entry.title + "\n\nEntry: " + entry.text + "\n\nDate: " + entry.date
    );

}

function logout() {
    alert("You have been logged out.");

    window.location.href = "index.html";
}