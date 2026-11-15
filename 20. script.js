// Contact form validation for the front-end demonstration.
document.addEventListener("DOMContentLoaded", function () {
    const contactForm = document.getElementById("contactForm");

    // The form exists only on contact.html.
    if (contactForm) {
        contactForm.addEventListener("submit", validateContactForm);
    }
});

function validateContactForm(event) {
    event.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const subject = document.getElementById("subject").value.trim();
    const message = document.getElementById("message").value.trim();
    const formMessage = document.getElementById("formMessage");
    const namePattern = /^[a-zA-Z ]+$/;
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    let isValid = true;

    // Clear the old messages before checking the form again.
    clearValidationMessages();
    formMessage.textContent = "";
    formMessage.className = "form-message";

    // Name validation
    if (name === "") {
        showError("nameError", "Please enter your name.");
        isValid = false;
    } else if (!namePattern.test(name)) {
        showError("nameError", "Name should contain letters only.");
        isValid = false;
    }

    // Email validation
    if (email === "") {
        showError("emailError", "Please enter your email address.");
        isValid = false;
    } else if (!emailPattern.test(email)) {
        showError("emailError", "Please enter a valid email address.");
        isValid = false;
    }

    // Empty-field validation
    if (subject === "") {
        showError("subjectError", "Please enter a subject.");
        isValid = false;
    }

    if (message === "") {
        showError("messageError", "Please enter your message.");
        isValid = false;
    }

    // Display a success message when every field is valid.
    if (isValid) {
        formMessage.textContent = "Thank you! Your message has been submitted successfully.";
        formMessage.className = "form-message success-message";
        document.getElementById("contactForm").reset();
    }
}

function showError(elementId, message) {
    document.getElementById(elementId).textContent = message;
}

function clearValidationMessages() {
    document.getElementById("nameError").textContent = "";
    document.getElementById("emailError").textContent = "";
    document.getElementById("subjectError").textContent = "";
    document.getElementById("messageError").textContent = "";
}
