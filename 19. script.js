const form = document.getElementById("registrationForm");
const formMessage = document.getElementById("formMessage");

function showError(id, message) {
    document.getElementById(id).textContent = message;
}

function clearErrors() {
    document.querySelectorAll("small").forEach(function (item) {
        item.textContent = "";
    });
    formMessage.textContent = "";
    formMessage.className = "";
}

form.addEventListener("submit", function (event) {
    event.preventDefault();
    clearErrors();

    const name = document.getElementById("studentName").value.trim();
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value;
    const gender = document.querySelector('input[name="gender"]:checked');
    const dob = document.getElementById("dob").value;
    const city = document.getElementById("city").value.trim();
    const course = document.getElementById("course").value;
    const address = document.getElementById("address").value.trim();
    let valid = true;

    if (name.length < 3) {
        showError("nameError", "Enter a name with at least 3 characters.");
        valid = false;
    }
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        showError("emailError", "Enter a valid email address.");
        valid = false;
    }
    if (password.length < 6) {
        showError("passwordError", "Password must be at least 6 characters.");
        valid = false;
    }
    if (!gender) {
        showError("genderError", "Please select your gender.");
        valid = false;
    }
    if (!dob) {
        showError("dobError", "Please select your date of birth.");
        valid = false;
    } else if (new Date(dob) >= new Date()) {
        showError("dobError", "Date of birth must be in the past.");
        valid = false;
    }
    if (city === "") {
        showError("cityError", "Please enter your city.");
        valid = false;
    }
    if (course === "") {
        showError("courseError", "Please select a course.");
        valid = false;
    }
    if (address.length < 5) {
        showError("addressError", "Please enter your complete address.");
        valid = false;
    }
    if (!valid) {
        formMessage.textContent = "Please correct the errors and try again.";
        formMessage.className = "error";
        return;
    }

    const hobbies = Array.from(document.querySelectorAll('input[name="hobby"]:checked'))
        .map(function (item) { return item.value; });
    const details = document.getElementById("detailsText");
    details.textContent = "";
    const rows = [["Name", name], ["Email", email], ["Gender", gender.value],
        ["Date of Birth", dob], ["City", city], ["Course", course],
        ["Hobbies", hobbies.length ? hobbies.join(", ") : "Not selected"], ["Address", address]];

    rows.forEach(function (row) {
        const line = document.createElement("p");
        const label = document.createElement("strong");
        label.textContent = row[0] + ": ";
        line.appendChild(label);
        line.appendChild(document.createTextNode(row[1]));
        details.appendChild(line);
    });

    document.getElementById("submittedDetails").hidden = false;
    formMessage.textContent = "Registration submitted successfully.";
    formMessage.className = "success";
});

form.addEventListener("reset", function () {
    setTimeout(function () {
        clearErrors();
        document.getElementById("submittedDetails").hidden = true;
        document.getElementById("detailsText").textContent = "";
    }, 0);
});