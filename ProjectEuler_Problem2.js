//Populate fibonacci array with numbers until less than 4,000,000
let fibonacci = [1,1];
for (i=2; i < 33; i++)
{
  fibonacci.push(fibonacci[i-2] + fibonacci[i-1])
  console.log(fibonacci[i]);
}

let total = 0;
for (i=0; i < fibonacci.length; i++)
{
  if (fibonacci[i] % 2 === 0)
  {
    console.log(fibonacci[i]);
    total += fibonacci[i];
  }
}

console.log(total);