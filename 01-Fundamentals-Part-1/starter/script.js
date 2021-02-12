/*
let js = 'amazing';
console.log('Here is the console.')

let test_var = 23;
console.log('The value of test_var is: '+test_var);

let country = "United States";
let continent = "North America";
let population = 400;

console.log ('I live in '+country+', which is in '+continent+', and has '+population+' million people');
*/
/*
const now = 2021;
const BobsAge = 45;
console.log('Bob was born in ',now-BobsAge);

let x = 10 + 5;
x += 10;
x *= 4;
console.log(x);

let y = 69;
console.log(x < y);

// Coding Challenge
let massMark = 78;
let heightMark = 1.69;
let massJohn = 92;
let heightJohn = 1.95;
let bmiMark = massMark / heightMark **2;
let bmiJohn = massJohn / heightJohn **2;

console.log('Mark: '+bmiMark+', John: '+bmiJohn);
if (bmiMark > bmiJohn) {
    console.log('Marks BMI is higher');
}
else {
    console.log('Johns BMI is higher');
}

MarksBMI = 78 / 1.69 ** 2;
JohnsBMI = 92 / 1.95 ** 2;
MarksBMI2 = 95 / (1.88 * 1.88)
JohnsBMI2 = 85 / (1.76 + 1.76)
console.log('Mark: '+MarksBMI2+', John: '+JohnsBMI2);

const firstName = 'Paul';
const job = 'software dev';
const birthYear = 1979;
const currentYear = 2021;

const paul = "I'm "+firstName+', a '+(currentYear - birthYear) +'-year-old '+job;
console.log(paul);

const paulLiteral = `I'm still ${firstName}, a ${currentYear - birthYear}-year-old ${job}`;
console.log(paulLiteral);
*/

const age = '18';
if (age === 18) {
    console.log("You just became an adult (strict)");
}
if (age == 18) {
    console.log("You just became an adult (loose)");
}

const favorite = prompt("What is your favorite number?");
const response = `Response: ${favorite} type: ${typeof(favorite)}`;
console.log(response);
