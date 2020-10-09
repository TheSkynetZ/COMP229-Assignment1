
/* Author: Le Minh Pham
 * StudentID: 300814556
 * Date: Oct 6th 2020 
 */

 // IIFE -- Immediately Invoked Function Expression
(function () {
    function Start() {
        console.log("App Started...");
    }
    window.addEventListener("load", Start);
})();

//Show user's input as an alert
(function (){
    function userInput(e) {
        var name= document.getElementById("txtBest").value;
        var phone= document.getElementById("numPhone").value;
        var email= document.getElementById("txtEmail").value;
        var message= document.getElementById("txtMessage").value;
        if(confirm ("This is what you entered\nName: " + name + "\nPhone Number: " + phone + "\nEmail: "  + email+ "\nMessage: "  + message+ "\n"  ))
        {
            e.preventDefault();
            window.location.href='/home';
        }
        else {}

    }
    document.getElementById("submit").addEventListener("click",userInput,true);


})();

