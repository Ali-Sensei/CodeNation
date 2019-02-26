let sumSquares = 0;
let number = 100;
for (i=0; i < (number+1); i++)
{
  sumSquares += (i * i);
}
console.log(sumSquares);

let sum = 0;
for (i = 0; i < (number+1); i++)
{
  sum += i;
}
console.log (sum);
let result = (sum * sum) - sumSquares;
console.log(result);