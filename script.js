document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;
    
    if (email === "user@example.com" && password === "password") {
        alert('Login successful');
        // Redirect to another page or perform other actions here
    } else {
        document.getElementById('message').innerText = 'Invalid email or password';
    }
});