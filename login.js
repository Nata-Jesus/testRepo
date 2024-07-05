const errorMessage = document.getElementById("error-message");
const loginForm = document.getElementById("login-form");

loginForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    // Simulated login logic (replace with your actual credentials)
    const validUsername = "admin";
    const validPassword = "admin";

    if (username === validUsername && password === validPassword) {
        // Simulated successful login
        alert("Login successful!"); // You can replace this with a redirect or other action
        // Example: window.location.href = "index.html";
    } else {
        errorMessage.textContent = "Invalid username or password";
    }
});
