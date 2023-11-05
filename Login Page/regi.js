function registerUser() {
    const username = document.getElementById("registerUsername").value;
    const password = document.getElementById("registerPassword").value;

    // Check if the username is already taken
    if (isUsernameTaken(username)) {
        alert("Username already taken. Please choose another.");
    } else {
        // Assuming you have a function to save user data, e.g., saveUserData(username, password)
        saveUserData(username, password);
        alert("Registration successful! You can now log in.");
        document.getElementById("registrationForm").reset();
    }
}

function isUsernameTaken(username) {
    // Replace this with your own logic to check if the username is already taken.
    // You can check against an array of registered usernames or query a database.
    // For now, we'll use a simple array of existing usernames.
    const existingUsernames = ["user1", "user2"];
    return existingUsernames.includes(username);
}

function saveUserData(username, password) {
    // In a real system, you should send this data to a server for storage.
    // For this example, we'll just store it in a global array (not recommended in a real system).
    users.push({ username, password });
}

// Sample user data (in a real system, this should be stored securely on a server)
const users = [
    { username: "1", password: "123" },
    { username: "user2", password: "password2" }
];





