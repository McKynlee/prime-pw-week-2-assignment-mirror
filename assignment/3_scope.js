/**
 * OPTIONAL Pro Mode Assignment
 *
 * The below function will produce a couple of different numbers.
 *
 * For this assignment, work through the code without the use of the computer.
 * The objective is to think critically about how the code is executed and
 * see if you can figure out what the answer is for each of the two undefined variables.
 * This will require you to stretch your understanding of how functions, scope,
 * and variables work.
 *
 * This is a very difficult assignment for your first week with Javascript,
 * so don't get frustrated if you test the code out, and don't come to the same
 * conclusion as the code did. Instead, try to work through why the answers are
 * the way they are. If you got them right, then you should order up some
 * pizza and celebrate your understanding of these difficult topics!
 */
var theNumber = 1;

var michelangelo = function (value) {
    value = (value * 2);
    return value;
};

var donatello = function (value, anotherValue) {
    value = anotherValue + value;
    anotherValue = value * anotherValue;
    return anotherValue;
};

var leonardo = function (value) {
    var anotherValue = value;
    value *= 4;
    theNumber = value / 2;
    return (value + anotherValue);
};

var raphael = function (value, anotherValue, yetAnotherValue) {
    value = value * anotherValue + yetAnotherValue;
    return yetAnotherValue;
};

michelangelo(theNumber) + leonardo(theNumber);
// ^ Before running the script, what number would you expect the line above to evaluate to?
var resultOne = undefined; // replace undefined with the result


theNumber = theNumber * 2;

donatello(theNumber, 2) - (raphael(3, 2, theNumber));
// ^ Before running the script, what number would you expect the line above to evaluate to?
var resultTwo = undefined; // replace undefined with the result
