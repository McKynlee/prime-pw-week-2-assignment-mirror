// BASE MODE:
// 1 - Create a variable called `firstName` and assign it the value of your first name
let firstName = 'Grace';

// 2 - Create a second variable called `lastName` and assign it the value of your last name
let lastName = 'Hopper';

// 3 - Create a third variable called `fullName`, and USING CONCATENATION,
// assign it the value of your first and last name
let fullName = firstName + ' ' + lastName;
// or let fullName = firstName + lastName;
// or I will accept let fullName = 'Grace ' + 'Hopper'
// but then I mention that they can use the variables they created above

// 4 - Console log the value of `fullName`
console.log(fullName);

// 5 - Create a variable called `age` and assign it the value of your age
let age = 89;

// 6 - Console log this sentence: 'My name is ______ ______, and I am ___ years old.'.
// Refer back to the videos if you need help with this one.
console.log('My name is ' + fullName + ' and I am ' + age + ' years old.');

// 7 - Create a variable named `adventurous` and set it to a boolean value (true or false)
let adventurous = false;

// 8 - Create a variable named `food`, and set its value to a string of your favorite food
let food = 'La Croix';

// 9 - Create a variable called `pets` and set it to the value of the number of pets you have
let pets = 5;

// 10 - Create a variable called `friendsPets` and assign it the value of the number of pets your friend has
let pets = 20;

// 11 - Add two pets to your pets variable
pets += 2;
// or
pets = pets + 2;

// 12 - Create a constant variable called `allowedPets` and set it to a number value of your choice
const allowedPets = 6;

// 13 - Create a conditional: if adventurous is true, console log "Let's go on an adventure!", 
// if it's not true, console log "How about we stay home?"
if (adventurous) {
    console.log('Let\'s go on an adventure!')
} else {
    console.log('How about we stay home?');
}
// or
// if (adventurous === true)


// HARD MODE:
// 14 - Create a compound conditional: if age is greater than 18 and adventurous is true, console log "Let's go!"
if (age > 18 && adventurous) {
    console.log('Let\'s go!');
    
}

// 15 - Write a conditional that console logs "I can have more pets!" if the value of `pets` is less than the value of `allowedPets`,
// console logs "I have enough pets" if the value of `pets` is equal to the value of `allowedPets`,
// and console logs "Oh no, I have too many pets!" if the value of `pets` is greater than the value of `allowedPets`.
if (pets < allowedPets) {
    console.log('I can have more pets!');
} else if (pets === allowedPets) {
    console.log('I have enough pets');
} else if (pets > allowedPets) {
    console.log('Oh no, I have too many pets!');
}

// PRO MODE
// 16 - Write a conditional that assigns the value of the addition
// of the `pets` & `friendsPets` variables to a new variable called `totalPets` IF `pets` is greater
// than `friendsPets`. If `friendsPets` is greater than `pets`, assign the difference of the `pets` & `friendsPets`
// variables to `totalPets`. Console log the value of `totalPets`.

//NOTE: This is vague on purpose. 
// I look for code that looks something like this:

let totalPets;
if (pets > friendsPets) {
    totalPets = pets + friendsPets;
} else if (pets < friendsPets) {
    totalPets = pets - friendsPets;
}
console.log(totalPets);
