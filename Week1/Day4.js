//LOOP FROM 9-> 0, decrementing by 1
console.log(`// LOOP FROM 9-> 0, decrementing by 1`)
for (let i=9; i > -1; i-=1)
{
  console.log(i);
}

//LOOP FROM 20-> 0, decrementing by 2
console.log(`//LOOP FROM 20-> 0, decrementing by 2`)
for (let i=20; i > -1; i-=2)
{
  console.log(i);
}

let cards = ['Diamond','Spade','Heart','Club'];
let currentCard = 'Spade';
let cardToFind = 'Heart';

// run loop while currentCard is not card
while (currentCard !== cardToFind)
{
  console.log(currentCard);
  // pick a random number between 0 and 3
  // i.e. pick randomly from: Diamond, Spade, Heart, Club
  currentCard = cards[Math.floor(Math.random() * 4)];
}
console.log(currentCard);

for (let i=0; i<20; i++)
{
  console.log(Math.floor(Math.random() * 4));
}

/*
let favoriteMovies = ['The Prestige','Kimi No Na Wa','Ponyo'];
favoriteMovies.push('Spirited Away');

for (let i=0; i < favoriteMovies.length; i++)
{
  console.log(favoriteMovies[i]);
}

const filmCheck = (array, movie, index) =>
{
  if (array[index] == movie)
  {
    return (`Yay, ${movie} is at position ${index}`);
  }
  else 
  {
    return (`Boo, We Want ${movie}`);
  }
}

console.log(filmCheck(favoriteMovies, 'Ponyo', 2));
*/
let favoriteMovies = ['The Prestige','Kimi No Na Wa','Ponyo'];
favoriteMovies.push('Spirited Away');

for (let i=0; i < favoriteMovies.length; i++)
{
  console.log(favoriteMovies[i]);
}

// FUNCTION TO CHECK IF A MOVIE TITLE IS PART OF AN ARRAY
const filmCheck = (array, movie) =>
{
  for (i=0; i<array.length; i++)
  {
    if (array[i] == movie)
    {
      return (`Yay, ${movie} is at position ${i}`);
    }
  }
  return (`${movie} was not found. Boo, We Want ${movie}`);
}
console.log(filmCheck(favoriteMovies, 'The Prestige'));

// FUNCTION: CONVERTS NUMBER TO STRING
const numberToString = (number) =>
{
  return number.toString();
  
}
console.log (numberToString(7));

console.log("// FUNCTION: INCREASES A GIVEN NUMBER BY 1");
const increase = (number) =>
{
  return number+1;
}
console.log(increase(9));

console.log("FUNCTION: DECREASES A GIVEN NUMBER BY 1");
const decrease = (number) =>
{
  return number-1;
}
console.log(decrease(9));

console.log("// FUNCTION: ADDS TWO NUMBERS");
const add = (x,y) =>
{
  return x+y;
}
console.log(add(9,10));

console.log("// FUNCTION: SUBTRACTS SECOND NUMBER FROM FIRST NUMBER");
const subtract = (x,y) =>
{
  return (x-y);
}
console.log(subtract(9,3));

console.log("// FUNCTION: DIVIDES FIRST NUMBER BY SECOND");
const divide = (x,y) =>
{
  return x/y;
}
console.log(divide(5,2));

console.log("// FUNCTION: MULTIPLIES FIRST NUMBER BY SECOND");
const multiply = (x,y) =>
{
  return x*y;
}
console.log(multiply(5,2));

console.log("// FUNCTION: SQUARE, MULTIPLIES A NUMBER BY ITSELF");
const square = (number) =>
{
  return number*number;
}
console.log(square(6));

console.log("//FUNCTION: CALCULATE, PRINTS EQUATION->RETURNS RESULT");
const calculate = (operation, x, y) =>
{
  if (operation === 'add')
    console.log(`${x} + ${y} = ${add(x,y)}`);
  if (operation === 'subtract')
    console.log(`${x} - ${y} = ${subtract(x,y)}`);
  if (operation === 'divide')
    console.log(`${x} / ${y} = ${divide(x,y)}`);
  if (operation === 'multiply')
    console.log(`${x} * ${y} = ${multiply(x,y)}`);
  if (operation === 'square')
    console.log(`${x} * ${x} = ${square(x)}`);
  if (operation === 'increase')
    console.log(`${x} increased by 1 = ${increase(x)}`);
  if (operation === 'decrease')
    console.log(`${x} decreased by 1 = ${decrease(x)}`);

}
calculate("add", 4,3);
calculate("subtract",4,3);
calculate('divide',5,2);
calculate('multiply',5,2)
calculate('square',5);
calculate('increase',5);
calculate('decrease', 5);

console.log("// FUNCTION: isGreaterThan");
const isGreaterThan = (a,b) =>
{
  return a > b;
}
console.log(isGreaterThan(2,5));
console.log(isGreaterThan(5,2));

console.log("// FUNCTION: isLessThan");
const isLessThan = (a,b) =>
{
  return a < b;
}
console.log(isLessThan(2,5));
console.log(isLessThan(5,2));

console.log("// FUNCTION: areEqual");
const areEqual = (a,b) =>
{
  return a===b;
}
console.log(areEqual(2,4));
console.log(areEqual(2,2));

console.log("// FUNCTION: MAXIMUM, RETURNS LARGER OF TWO NUMBERS");
const maximum = (a,b) =>
{
  return a<b ? b:a;
}
console.log(maximum(5,10));

console.log("// FUNCTION: MINIMUM, RETURNS SMALLER OF TWO NUMBERS");
const minimum = (a,b) =>
{
  return a<b ? a:b;
}
console.log(minimum(5,10));

console.log("// FUNCTION: isEven, return true if number is Even");
const isEven = (number) =>
{
  return (number % 2 === 0) ? true:false;
}
console.log(isEven(10));
console.log(isEven(13));

console.log("// FUNCTION: isOdd, return true if number is Odd");
const isOdd = (number) =>
{
  return (number % 2 !== 0) ? true:false;
}
console.log(isOdd(10));
console.log(isOdd(13));

console.log("// FUNCTION: LETTER GRADE, Returns a Letter Grade");
const letterGrade = (score,total) =>
{
  score = Math.floor(score);
  
  if (score/total >= .9)
    return "A";
  if (score/total >= .8 && score/total <= .89)
    return "B";
  if (score/total >= .7 && score/total <= .79)
    return "C";
  if (score/total >= .6 && score/total <= .69)
    return "D";
  if (score/total <= .59)
    return "F";
}
console.log(letterGrade(90, 100));
console.log(letterGrade(85, 100));
console.log(letterGrade(75, 100));
console.log(letterGrade(62, 100));
console.log(letterGrade(52, 100));

console.log("// FUNCTION: COMBINE TWO STRINGS WITH A SPACE");
const combine = (word1,word2) =>
{
  return `${word1} ${word2}`;
}
console.log(combine("Hello", "World"));

console.log("// FUNCTION: incrementReviews for a Restaurant");
const incrementReviews = (restaurant) =>
{
  if (restaurant.review)
    restaurant.review += 1;
  else
    restaurant.review = 1;
}
let McDonalds = {name: "McDonalds", type: "fast food", review: 1};
console.log(McDonalds);
incrementReviews(McDonalds);
console.log(McDonalds);
let KFC = {name: "KFC", type: "fast food"};
console.log(KFC);
incrementReviews(KFC);
console.log(KFC);

console.log("// FUNCTION CREATE CIRCLE OBJECT FROM GIVEN RADIUS");
const createCircle = (radius) =>
{
  return {area: Math.PI * radius * radius, perimeter: 2*Math.PI*radius}
}

console.log(createCircle(10));