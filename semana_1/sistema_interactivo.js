// Interactive system in JavaScript

// Here I declare two constants to store the name and the age from the user input
const nombre = prompt("Write your name: ");
const edad = prompt("Write your age: ");

// Here I check if the age is a number, if not, it shows an error in console and alert
if (isNaN(edad)) {
    console.error("Please enter a valid age in numbers.");
    alert("ERROR! You can only type numbers.");
}
// If the value is a number, it checks if the age is 18 or more
else if (edad >= 18) {
    console.log(`Hello ${nombre}, you are an adult. Get ready for great opportunities in programming!`);
    alert(`Hello ${nombre}, you are an adult. Get ready for great opportunities in programming!`);
}

// Otherwise, it shows a message for minors
else {
    console.log(`Hello ${nombre}, you are a minor. Keep learning and soon you can explore programming!`);
    alert(`Hello ${nombre}, you are a minor. Keep learning and soon you can explore programming!`);
}