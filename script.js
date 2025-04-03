document.addEventListener("DOMContentLoaded", function () {
    const loginButton = document.querySelector(".login-btn");

    loginButton.addEventListener("click", function () {
        const email = document.querySelector("input[type='text']").value;
        const password = document.querySelector("input[type='password']").value;

        if (email === "" || password === "") {
            alert("Please enter your credentials.");
        } else {
            alert("This is a fake login for educational purposes.");
        }
    });
});
