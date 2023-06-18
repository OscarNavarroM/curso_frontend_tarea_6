const LIMIT = 1000;
const ODD = "odd";
const EVEN = "even";

function fibonacci(limit, indexFilter = null) {
  function innerFibAll(index, fib0, fib1) {
    if (index > limit) return;
    let currentFib = fib0 + fib1;
    if (index === 0) {
      currentFib = 0;
    } else if (index === 1) {
      currentFib = 1;
    }
    showResult(index, currentFib, indexFilter);
    return innerFibAll(index + 1, fib1, currentFib);
  }
  innerFibAll(0, 0, 0);
}
function showResult(index, result, indexFilter) {
  if (
    indexFilter === null ||
    (indexFilter === EVEN && index % 2 === 0) ||
    (indexFilter === ODD && index % 2 !== 0)
  ) {
    const message = `X: ${index}, fibonacci: ${result}`;
    console.log(message);
  }
}
console.log("Fibonacci desde 0 a 1000");
fibonacci(LIMIT);
console.log("Fibonacci desde 0 a 1000 de números pares");
fibonacci(LIMIT, EVEN);
console.log("Fibonacci desde 0 a 1000 de números impares");
fibonacci(LIMIT, ODD);
