// WHAT IS THIS EVEN DOING?

// For questions 1-3, each code block is syntactically and logically correct. Your job is to describe what is happening.
// They are in isolation -- variables in one question do not affect other questions.
// Describe the code as it would be run, and make sure you give us the console.log's value at the end.
// (Don't just say 'we console log the variable' -- instead say something like 'we console log 'yes'')


// 0. WRITE YOUR DESCRIPTION HERE
// //EXAMPLE. We make a variable called number and set it to 1 as a number.
// Then we increment the number variable. Number is now 2.
// We check if number is greater than or equal to 2. 2 is equal to 2, so
// we console.log 'yes'

//CODE
/*
let number = 1;

number++;

if (number >= 2) {
  console.log('yes');
}

*/


// 1. WRITE YOUR DESCRIPTION HERE
// We make a variable of name and make it equal Dane as a string.
// We make a conditional that if our name variable is equal to Mary, then our output will be "Hi, Mary!"
// If our name variable is NOT equal to Mary, our output will be "How do you do?"
// We console log "How do you do?", because name equals Dane, NOT Mary.

//CODE
/*
let name = 'Dane';

if (name === 'Mary') {
  console.log('Hi, Mary!');
} else {
  console.log('How do you do?');
}


*/

// 2. WRITE YOUR DESCRIPTION HERE
//We make a variable named secret and we make it true.
//We make a variable named code and set it equal to 123.
//We say that if the variable code is equal in value AND type to 123, then our output for the secret variable will be the word super, and our original code number output will be doubled.
//If the code variable is greater than 250, then the output for secret will be the word duper.
//We console.log secret and the output is "super" and "246".

//CODE
/*
let secret;

let code = 123;

if(code === 123) {
  secret = 'super';
  code = code * 2;
}

if (code > 250) {
  secret = 'duper'
}

console.log(secret)

*/

// 3. WRITE YOUR DESCRIPTION HERE
//We create variable isStudent and make it boolean true.
//We create a variable for age and set it equal to 34 as a number.
//We create a variable called zip and make it 55407 as a number.
//We write a conditional statement that will yield "You're a student on the West Coast!" if both isStudent is true AND zip is greater than 80000.
//The conditional will yield "What are your hobbies?" if either isStudent is false or age is less than 30.
//The conditional will yield "Welcome to Prime!" if isStudent is true (and zip is less than or equal to 80000, otherwise it would yield "You're a student on the West Coast!").
//If none of the above conditions are satisfied, we will console log "How about the weather?"
//We console log "Welcome to Prime!"

//CODE
/*
let isStudent = true;
let age = 34;
let zip = 55407;

if (isStudent === true && zip > 80000 ) {
  console.log(`You're a student on the West Coast!`);
} else if (isStudent === false || age < 30) {
  console.log('What are your hobbies?');
} else if (isStudent === true) {
  console.log('Welcome to Prime!');
} else {
  console.log('How about the weather?')
}

*/




// REVERSE
// Now, for questions 4-6, we'll give you a description and some code.
// Make the code match the description-- comment above the problem code and a potential solution.
// Look closely -- things are logically incorrect or missing and wrong in the code!

// 0. WRITE YOUR DESCRIPTION HERE
// //EXAMPLE. We make a variable called number and set it to 1 as a number.
// Then we increment the number variable. Number is now 2.
// We check if number is greater than or equal to 2. 2 is equal to 2, so
// we console.log 'yes'

//CODE
/*
let number = 1;

// number-- decrements number, and the instructions ask to increment.
// Should be number++.
number--;

if (number >= 2) {
  console.log('yes');
}

*/





//4. We start with three variables -- colorOne is set to 'blue' and colorTwo is set to 'red', and mix is set to true. We check if mix is true
//-- it is, so we set colorOne and colorTwo to 'purple'

/*
//colorOne should be set to 'blue' and colorTwo should be set to 'red', so it should be:
//let colorOne = 'blue';
//colorTwo = 'red';
let colorOne = 'red';
let colorTwo = 'blue';
let mix = true;

//this top line is correct, but could also be: if (mix) {}.
//the directions say to set both colorOne and colorTwo to purple, so:
//if (mix) {
//  colorOne = colorTwo = 'purple'
// }
if (mix === true) {
  colorOne = 'purple';
}
*/

//5. We start with two variables -- temp is set to 40 and time is set to 4.
// We check if temp is higher than 39 and if time is greater or equal to  4
// -- they are so we console.log 'throw away the food!'

/*
//I don't see a right/wrong with one of these being let and the other constant, as it depends whether they each change later in the code.
//Though time does generally change as a rule of the world ;)
let temp = 40;
const time = 4;

//This code is checking if temp is greater than 39 OR time is greater than or equal to 4.
//should be if (temp > 39 && time >= 4) {}   though the OR conditional will still console.log 'throw away the food'
if (temp > 39 || time >= 4) {
  console.log('throw away the food!);
}
*/

//6. We start with two variables -- age is set to 21 and minAge is set to 21.
// We check if age is greater than minAge
// -- they are, so we console.log 'enter'.

/*
let age = 21;
const minAge = 21;

//This code is checking if minAge is less than or equal to age,
//and if so then 'no entry' will be console.logged, and if not 'enter' will be logged.
//so the code should be:
//if(age > minAge) {
// console.log('enter');
// }

if(minAge <= age) {
  console.log('no entry');
} else {
  console.log('enter');
}
*/
