// Change the user name on page load
function changeUserName() {
    const userName = prompt("Please enter your name:");
    if (userName) {
        document.getElementById("user-name").textContent = userName;
    }
}
window.onload = changeUserName;

// Handle form submission
document.getElementById('contactForm').addEventListener('submit', function (e) {
    e.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    const submittedData = document.getElementById('submittedData');
    submittedData.innerHTML = `
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong> ${message}</p>
        <p><small>Submitted on: ${new Date().toLocaleString()}</small></p>
    `;

    // Clear form
    this.reset();
});