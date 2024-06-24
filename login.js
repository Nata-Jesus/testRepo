const errorMessage = document.getElementById("error-message");
const loginForm = document.getElementById("login-form");

loginForm.addEventListener("submit", (event) => {
    event.preventDefault(); // Prevent default form submission

    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    // Replace this with your actual login logic (e.g., sending data to a server)
    if (username === "admin" && password === "password123") {
        // Login successful
        window.location.href = "index.html"; // Redirect to index page (assuming successful login)
    } else {
        // Login failed
        errorMessage.textContent = "Invalid username or password";
    }
});
