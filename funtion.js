// document.getElementById("demo").innerHTML = "This is our second javascript class.";

// window.alert("error 404!");

 var a;        // variable initialization
a = 9;          // variable declaration
var b = 10;






var userValue;
function submit() {
    userValue = document.getElementById("userInput").value;
    document.getElementById("demo").innerHTML = userValue;
}

//if statement

var num = 10; 
if (num < 10) {
    document.getElementById("if-else").innerHTML = "Your entered number is less than 10";
} else if (num ==10) {
    document.getElementById("if-else").innerHTML = "Your entered number is equal than 10";
}
else {
    document.getElementById("if-else").innerHTML = "Your entered number is greater than 10";
}