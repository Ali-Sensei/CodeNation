/*
//HARD CODED PIN
const dispenseCash = (pin, amount) =>
{
  if (pin === 1234 && amount <=currentBalance) 
  {
      console.log(`Your balance was ${currentBalance}`);
      currentBalance -= amount;
      console.log(`You withdrew ${amount}. Your balance is now ${currentBalance}`);
  }
  else if (pin ===1234 && amount > currentBalance)
  {
    console.log(`You lack the funds to withdraw ${amount}. Your balance remains at ${currentBalance}`);
  }
  else
  {
    console.log(`Your pin was incorrect. Please check your pin and try again.`);
  }
}


currentBalance = 100;
dispenseCash(4567, 10);
dispenseCash(1234,20);
dispenseCash(2431);
dispenseCash(1234,100);
*/

/*
//PIN AS A VARIABLE
const pinCorrect = (attemptedPin, pin) =>
{
  if (attemptedPin === pin)
    return true;
  else
    return false;
}

const balanceAvailable = (amount, currentBalance) =>
{
  if (amount <= currentBalance)
    return true;
  else
    return false;
}

const dispenseCash = (attemptedPin, amount, pin, currentBalance) =>
{
  if (!pinCorrect(attemptedPin, pin) && (!balanceAvailable(amount, currentBalance)))
    return"Your pin is incorrect and you don't have the funds available";
  if (!pinCorrect(attemptedPin, pin)) {
    return"Your pin is incorrect. Please try again";
  }
  if (!balanceAvailable(amount, currentBalance)) {
    return`You lack the funds to withdraw ${amount}. Your balance remains at ${currentBalance}`;
  }
  currentBalance -= amount;
  return`You withdrew ${amount}. Your balance is now ${currentBalance}`
}
console.log(dispenseCash(4567, 30, 4567, 100));

*/

//ARRAY CHALLENGES

// SLIDE 31
let favSites = ['www.ign.com','www.youtube.com','www.google.co.uk'];
console.log(favSites);
favSites.push("www.udemy.com", "https://editor.construct.net");
console.log(favSites);
favSites.pop();
console.log(favSites);

//CHALLENGE SLIDE 2

const subtractNumbers = (a,b) =>
{
  return a-b;
}
console.log(subtractNumbers(6,2));

// SLIDE 30 METHODS
// shift(): removes first element
favSites.shift();
console.log(`Using shift: ${favSites}`);
// unshift(element,element): adds elements at index 0
favSites.unshift("www.ign.com");
console.log(`Using shift: ${favSites}`);
// slice(begin, end) // 2: extracts from index to index
console.log(`Using slice: ${favSites.slice(0,)}`);
// splice(start index, deleteCount(optional), itemToAdd)
favSites.splice(1,0,"BOOM") //inserts BOOM at index 1, removes 0 elements
console.log(`Using slice: ${favSites.slice(0,)}`);

// CHALLENGE 1
const arrayPlusString = (array, string) =>
{
  array.push(string); // ADD VIA PUSH METHOD
}
let array = [1,2,3,4,5];
let string = " little monkeys jumping on the bed";
arrayPlusString(array, string);
console.log(array);

// CHALLENGE 2
const listToppings = (array) =>
{
  return `I would like ${array[0]}, ${array[1]}, ${array[2]}, ${array[3]}, and ${array[4]}.`;
}
let toppingsArray = ['cheese','tomatoes','bacon','cranberry sauce','hot sauce']
console.log(listToppings(toppingsArray))

// CHALLENGE 3
const addToArray = (array, item) =>
{
    array.unshift(item);
}
addToArray(favSites, "YAHOO");
console.log(favSites);

// CHALLENGE 4
const getRandomNumber = (min, max) =>
{
    return Math.random() * (max - min) + min;
}
for (i=1; i<7; i++)
{
    console.log(Math.floor(getRandomNumber(1,50)));
}

// CHALLENGE 5
for (i=9; i>-1; i--)
{
  console.log(i);
}

/*
let fibonacci = [1,1];
var length = Math.log(333) * Math.LOG10E + 1 | 0;

for (i=2; i < 2000; i++)
{
  fibonacci.push(fibonacci[i-2] + fibonacci[i-1])
  var length = Math.log(fibonacci[i]) * Math.LOG10E + 1 | 0;
//  console.log(fibonacci[i]);
//  console.log("length of above is " + length);
  if (length >= 309)
  {
    console.log("309 digit number found")
    console.log(fibonacci[i]);
    break;
  }
}
//console.log(fibonacci);
*/