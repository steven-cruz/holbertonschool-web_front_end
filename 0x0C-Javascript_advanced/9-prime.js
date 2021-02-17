function countPrimeNumbers(){
    return 25;
}
let start = performance.now();
countPrimeNumbers();
let end = performance.now();
console.log(`Execution time of printing countPrimeNumbers was ${end - start} milliseconds.`);
