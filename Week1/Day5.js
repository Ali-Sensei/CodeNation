/*// OBJECTS
const Ali = {
  name: "Ali",
  age: 34,
  favoriteColors: ["red", "blue"],
  greeting: "Hey, how's it going?",
  rudeGreeting: "Sup",
  sayHi () { return (`Hello. My name is ${this.name}.`) } // referred to as method in object
}

console.log(Ali.sayHi());

console.log("//RETURN A GREETING");
let day;
let greetingType;

const greet = (day) =>
{
  if (day === "good") {
    greetingType = Ali.greeting;
    return greetingType;
  }
  if (day === "bad") {
    greetingType = Ali.rudeGreeting;
    return greetingType;
  }
}
console.log(greet("good"));

console.log("//ADD TO AN OBJECT");
Ali.favoriteSongs = ["'We Don't Talk Anymore","Handclap","Timber"];
console.log("// LIST ALL SONGS USING A FOR LOOP");
for (i=0; i < Ali.favoriteSongs.length; i++)
{
  console.log(Ali.favoriteSongs[i]);  // using dot notation
  console.log(Ali["favoriteSongs"][i]);     // using bracket notation
}
console.log(Ali);
console.log(Object.keys(Ali));

let offer = "none";
let time = 12;

const coffeeShop = {
  name:'Starbucks',
  seatingCapacity: 5000,
  hasSpecialOffers:true,
  coffees: ['Americano','Espresso','Flat White'],
  breakfastOffer: 'free croissant with coffee',
  lunchOffer: 'free coffee with surprisingly priced sandwich',
  none: 'Sod off',
//  openStarbucks: () => { return 'We are open' },
//  openStarbucks () { return 'We are open.' },
  openStarbucks () {
    if (this.hasSpecialOffers) // uses this to refer to property in THIS object
    {
      return 'Open up and let the world know it is time for a special offfer';
    }
  },
//  closeStarbucks: () => { return 'We are closed' }
  closeStarbucks () { return 'We are closed.' }
}

console.log(coffeeShop.openStarbucks());
console.log(coffeeShop.closeStarbucks());

if (time < 11)
{
  offer = coffeeShop.breakfastOffer;
//  console.log(coffeeShop.breakfastOffer);
}
else if (time < 15)
{
  offer = coffeeShop.lunchOffer;
//  console.log(coffeeShop.lunchOffer);
}
console.log(offer);

*/

const rabbit = {
    name: "Sherlock",
    color: "black and white",
    ears: "uppy",
    bunHop () { return (`${this.name} is hopping.`)},
    bunChew () { return (`${this.name} is chewing.`)}
  }
  
  console.log(rabbit.bunHop());
  console.log(rabbit.bunChew());
  