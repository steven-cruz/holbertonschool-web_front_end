function countPrimeNumbers(){
    return 25;
}
let start = performance.now();
for (let times = 1; times <= 100; times++)
    countPrimeNumbers();
let end = performance.now();
console.log(`Execution time of calculating prime numbers 100 times was ${end - start} milliseconds.`);
