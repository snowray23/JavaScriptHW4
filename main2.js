// Task 2: Write JavaScript code to handle form submissions and store user input in an object.
document.getElementById("myForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent the form from submitting normally

    // Get form values
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let message = document.getElementById("message").value;

    // Task 3: Implement form validation to ensure that all required fields are filled before submission.
    if (name === '' || email === '' || message === '') {
        alert("Please fill out all required fields.");
        return; 
    }

    // Task 2: Write JavaScript code to handle form submissions and store user input in an object.
    let formData = {
        name: name,
        email: email,
        message: message
    };

    console.log(formData); // For demonstration, log the form data to the console
});