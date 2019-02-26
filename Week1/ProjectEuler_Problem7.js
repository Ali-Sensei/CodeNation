const isPrime = num => {
  for(let i = 2; i < num; i++)
    if(num % i === 0) return false;
  return num > 1;
}

let primeArray = [];

for (i=0; i < 109000; i++)
{
    if (isPrime(i))
    {
        primeArray.push(i);
    }
}

console.log(primeArray.length);
console.log(primeArray[10000]);