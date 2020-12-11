console.log('JavaScript');
// REQUIRED FEATURES:
// 1 - Create a variable called `firstName` and assign it the value of your first name
let firstName='McKynlee';
console.log(firstName);
// 2 - Create a second variable called `lastName` and assign it the value of your last name
let lastName='Westman';
// 3 - Create a third variable called `fullName`, assign it the value of your first and last name
// (remember, you already have variables for this, can you use those?)
let fullName=firstName + ' ' + lastName;
// 4 - Console log the value of `fullName`
console.log(fullName);
// 5 - Create a variable called `luckyNumber` and assign it the value of your lucky number.
let luckyNumber=9;
// 6 - Console log this sentence, adding in the variables you created above:
// 'My name is (full name), and I think (lucky number) is a winner!'.
// Refer back to the videos if you need help with this one.
console.log('My name is', fullName, 'and I think', luckyNumber, 'is a winner!');
// 7 - Create a variable named `adventurous` and set it to a boolean value (true or false)
let adventurous=true;
// 8 - Create a variable named `food`, and set its value to a string of your favorite food
let food='rotisserie chicken and roasted potatoes';
console.log("I'm going to talk about", food, "even though you didn't ask me to!");
// 9 - Create a variable called `pets` and set it to the value of the number of pets you have
let pets=1;
// 10 - Create a variable called `friendsPets` and assign it the value of the number of pets your friend has
let friendsPets=0;
// 11 - Add two pets to your `pets` variable
pets +=2;
// 12 - Create a constant variable called `allowedPets` and set it to a number value of your choice
const petsAllowed=1;
// 13 - Create a conditional: if adventurous is true, console log "Adventures are great!",
// if it's not true, console log "How about we stay home?"
if ( adventurous ) {
  console.log("Adventures are great!");
}
else {
  console.log("How about we stay home?");
}

// 14 - Create a compound conditional: if luckyNumber is 2 and adventurous is true,
// console log "Roll the dice!"
if (luckyNumber===2 && adventurous) {
  console.log("Roll the dice!");
}
else {
  console.log("Don't touch those dice!!");
}
// 15 - Write a conditional that console logs "I can have more pets!"
//if the value of `pets` is less than the value of `allowedPets`,
// console logs "I have enough pets" if the value of `pets` is equal to the value of `allowedPets`,
// and console logs "Oh no, I have too many pets!"
// if the value of `pets` is greater than the value of `allowedPets`.
if (pets<petsAllowed) {
  console.log("I can have more pets!");
}
else if (pets===petsAllowed){
  console.log("I have enough pets.");
}
else {
  console.log("Oh no, I have too many pets!");
}
// STRETCH GOALS:

// 16 - Make a variable called `mostPets` and a conditional that
// correctly checks the `pets` and `friendsPets` variables, and
// assigns the highest value to `mostPets`. There's several possibilities --
// be sure to think through all the scenarios.
// console.log `mostPets` after the conditional has run.
let mostPets= true;
if (pets>friendsPets) {
  console.log("McKynlee wins with", pets, "pets!");
}
else if (pets<friendsPets) {
  console.log("McKynlee doesn't have", friendsPets, "pets like her friend.");
}
else {
  console.log("Everyone has the same amount of pets.");
}
//Note from McK: I wrote this as if I didn't know the number of pets we each had
//and so the conditional would withstand as we change number of pets.
//I feel like the question, though, is asking me to set mostPets = something definitive.
//which I didn't get my brain to wrinkle in the right way to pull off!


// 17 - Rewrite question 16 with a `switch` statement. You'll need to do research!
let mostAnimals = 3
switch (mostAnimals) {
  case 0:
  console.log("No one has any pets, how sad!");
    break;
  case 3:
  console.log("McK has", pets, "pets, and that's more than her friend has.");
    break;
  default:
  console.log("Can't figure out number of pets.");
}

//ORRRRRRRR:
const houseAnimals = pets;
switch (houseAnimals) {
  case pets:
  console.log("Mac is the animal Queen!");
  break;
  case friendsPets:
  console.log("Mac's friend is the coolest; they have the most pets!");
  break;
  default:
  console.log("Not sure who the heck has the most pets!");
}

// 18 -- Rewrite question 13 with a `ternary` operator. You'll need to do research!
let adventure = true;
adventure= (adventurous ? "Adventures are great!" : "How about we stay home?");
console.log(adventure);
