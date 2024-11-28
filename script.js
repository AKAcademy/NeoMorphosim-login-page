function validateForm(event) {
    event.preventDefault();
    let username = document.getElementById('username').value;
    let password = document.getElementById('password').value;

    if (username && password) {
        alert('Login successful!');
        // Add your login logic here
    } else {
        alert('Please fill in all fields.');
    }
}
