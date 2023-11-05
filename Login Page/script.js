 
 const users = [
    { username: "EmilyJohnson", password: "123" },
    { username: "user2", password: "password2" }
];

function registerUser() {
    const username = document.getElementById("registerUsername").value;
    const password = document.getElementById("registerPassword").value;

    
    if (users.some(user => user.username === username)) {
        alert("Username already taken. Please choose another.");
    } else {
        users.push({ username, password });
        alert("Registration successful! You can now log in.");
        document.getElementById("registrationForm").reset();
    }
}

function authenticateUser() {
    const username = document.getElementById("loginUsername").value;
    const password = document.getElementById("loginPassword").value;

    const user = users.find(user => user.username === username && user.password === password);

    if (user) {
        alert("Login successful!");
        document.getElementById("loginForm").reset();
        document.getElementById("login").style.display = "none";
        document.getElementById("securedPage").style.display = "block";
        document.getElementById("currentUser").textContent = user.username;
    } else {
        alert("Invalid username or password. Please try again.");
    }
}











  