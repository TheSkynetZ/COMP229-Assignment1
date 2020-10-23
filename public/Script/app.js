/* Author: Le Minh Pham
 * StudentID: 300814556
 * Date: Oct 6th 2020 
 */

// IIFE -- Immediately Invoked Function Expression
(function () {
    function Start() {
        console.log("App Started...");

        let deleteButtons = document.querySelectorAll('.btn-danger');
        for (button of deleteButtons) {
            button.addEventListener('click', (event) => {
                if (!confirm("Are you sure?")) {
                    event.preventDefault();
                    window.location.assign('/contact-list');
                }
            });
        }

    }
    window.addEventListener("load", Start);
})();

//Show user's input as an alert
(function () {
    function userInput(e) {
        var name = document.getElementById("txtBest").value;
        var phone = document.getElementById("numPhone").value;
        var email = document.getElementById("txtEmail").value;
        var message = document.getElementById("txtMessage").value;
        if (confirm("This is what you entered\nName: " + name + "\nPhone Number: " + phone + "\nEmail: " + email + "\nMessage: " + message + "\n")) {
            e.preventDefault();
            window.location.href = '/home';
        } else {}

    }
    document.getElementById("contactUs").addEventListener("click", userInput, true);


})();