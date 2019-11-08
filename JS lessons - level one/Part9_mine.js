var name = prompt("Enter your first name: ");
var surName = prompt("Enter your last name: ");
var age = prompt("Enter your age: ");
var height = prompt("Enter your height: ");
var petName = prompt("Enter your pet name: ");

alert("Thank you for given information.");

if ( name[0] === surName[0]
      && age > 20 && age < 30
      && height > 170
      && petName[petName.length - 1] === "y") {
        console.log("Hello James!");
      } else {
        console.log("Nothing to see here...")
      }