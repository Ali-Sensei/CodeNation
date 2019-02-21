/*function sum (num1, num2)
{
  return num1+num2;
}

console.log(sum(1,2));
console.log("---------------------------------");
let myFavoriteDrink = "Soju";
console.log("My favorite drink is " + myFavoriteDrink + ".");
myFavoriteDrink = "Whisky as an alternative";
console.log("...or it could be " + myFavoriteDrink + '.');
let myWorstDrink = "Beer";
console.log("My worst drink is " + myWorstDrink + ".");
myWorstDrink = "definitely Beer";
console.log("My worst drink is " + myWorstDrink + ".");
console.log("let declares a variable that can be changed during runtime");
console.log("CONST declares a variable that does not change at all");
console.log("var declares a variable that can be changed during runtime");
console.log(`${myWorstDrink}`);
console.log("---------------------------------");
let myAge = 34;
myAge++;
console.log("I am " + myAge + " years old.")
console.log(`I am ${myAge} years old.`);
console.log("---------------------------------");
let userName = prompt("What is your name?");
let userAge = prompt("How old are you?");
let userColor = prompt("What is your favorite color?");
console.log(`Hello 6${userName}, for a ${userAge} year old, ${userColor} is quite interesting.`);
*/
let userAge = 2;
let userCountry = "UK";

// Traditional If Statement
if ((userAge > 17) && (userCountry == "UK"))
{
  console.log ("You may pass.");
}
else
{
  console.log("YOU...SHALL NOT...PASSSSSS!");
}

// Conditional Ternary Operator 
console.log(userAge>17 && userCountry == "UK" ? 'You may pass.' : 'YOU...SHALL NOT...PASSSSSS!');

const plusFunction = (x,y) => {return x+y};
console.log(plusFunction(1,2));

const multiplyFunc = (x,y) => {return x*y};
console.log(multiplyFunc(8,7));

// #region Challenge1
console.log("Challenge 1");
// check how many letters there are
// if there are less than 8 letteers then say error is too short, otherwise show password

let password = "Something";
console.log("The password is " + password.length + " characters long");
if (password.length < 8)
{
  console.log ("The Password is too short. It should be more than 8 characters.")
} 
else
{
  console.log(password);
}
console.log("\n");
// #endregion
console.log("Challenge 2");
// check if variable 'num' is divisible by 3 or 5. If yes or no, log appropriate message

let num = 7;
if (num % 3 == 0 || num % 5 == 0)
{
  console.log("This number is divisible by 3 or 5.")
}
else
{
  console.log("This number is not divisible by 3 or 5.")
}
console.log("\n");

console.log("Challenge 3");
let challenge3num = 15;
if (challenge3num % 3 == 0 && challenge3num % 5 == 0)
{
  console.log("fizz buzz");
}
else if (challenge3num % 3 == 0)
{
  console.log("fizz");
}
else if (challenge3num % 5 == 0)
{
  console.log("buzz");
}
else
{
  console.log(challenge3num);
}
console.log("\n");

console.log("Challenge 4");
let challenge4num = 666;
let challenge4string = challenge4num.toString();
let challenge4numReverse = challenge4string.split("").reverse().join("");
if (challenge4string === challenge4numReverse)
{
  console.log("This is a palindrome");
}
else
{
  console.log("This is not a palindrome");
}
console.log("\n");

console.log("Challenge 5");
let time = 12;
let placeOfWork = "Manchester";
let townOfHome = "Oldham";
if (time < 9 || time > 18)
  console.log(`It's ${time}; I'm at ${townOfHome} where I live.`);
else
  console.log(`It's ${time}; I'm at ${placeOfWork} where I work.`);

console.log("\n");

console.log("Challenge 6");
let crazyString = "jrfndklhgfndjkjlkgperfijfhdknsadcvjhiiohjfkledsopiuhgtyujwsdxcvhgfdjhiopiwquhejkdsoiufghedjwshi";
console.log("The first occurent of 'hi' is at " + crazyString.indexOf("hi"));
console.log("The last occurrence of 'hi' is at " + crazyString.lastIndexOf("hi"));
console.log("\n");

console.log("Challenge 7");
let lastValue = (Math.min(crazyString.lastIndexOf("a"),crazyString.lastIndexOf("e"),crazyString.lastIndexOf("i"),crazyString.lastIndexOf("o"),crazyString.lastIndexOf("u") ))
console.log(lastValue);
if (crazyString.lastIndexOf("a") === lastValue)
  console.log("The last of the vowels, in this case 'a' is located at " + lastValue)
if (crazyString.lastIndexOf("e") === lastValue)
  console.log("The last of the vowels, in this case 'e' is located at " + lastValue)
if (crazyString.lastIndexOf("i") === lastValue)
  console.log("The last of the vowels, in this case 'i' is located at " + lastValue)
if (crazyString.lastIndexOf("o") === lastValue)
  console.log("The last of the vowels, in this case 'o' is located at " + lastValue)
if (crazyString.lastIndexOf("u") === lastValue)
  console.log("The last of the vowels, in this case 'u' is located at " + lastValue)

console.log("\n");

console.log("Project Euler: Problem 6");
let sumSquares = 0;
let total = 0;
let result = 0;
let maxNumber = 10;
for (let i = 0; i < maxNumber+1; i++)
{
    sumSquares += Math.pow(i,2);
}
for (let i=0;i<maxNumber+1; i++)
{
    total +=i;
}
console.log("Sum of squares: " + sumSquares);
result = Math.pow(total, 2);
console.log("Square of sum: " + result);
console.log("Answer: " + (result - sumSquares));
console.log("\n");

console.log("Project Euler: Problem 20");
function factorialize(num) {
  if (num < 0) 
        return -1;
  else if (num == 0) 
      return 1;
  else {
      return (num * factorialize(num - 1));
  }
}
let toCountNum = factorialize(10);
console.log(toCountNum);
let toCountArray = toCountNum.toString().split("");
console.log(toCountArray);
let arrayTotal = 0;
for (let i=0; i < toCountArray.length; i++)
{
  arrayTotal += parseInt(toCountArray[i], 10);
}
console.log("Array Total: " + arrayTotal);

console.log("\n");

console.log("Function: What You Are");
const Personify = (name, age) => 
{
  console.log(`Hello ${name}. You are ${age} years old.`)
}
Personify("Ali", 34);

const MultiplyNumbers = (a,b) =>
{
  return a*b;
}
console.log(MultiplyNumbers(6,2));

const passwordCheck = (password) =>
{
  if (password.length > 7)
  {
    console.log(password);
  }
  else
  {
    console.log("Password is too short buddy");
  }
}
passwordCheck("baby1234");