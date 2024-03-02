/** @format */

function findFactorial(start, nmbr, result) {
  if (start == nmbr + 1) return `${nmbr} faktorial = ${result} `;
  result = start * result;
  start++;
  return findFactorial(start, nmbr, result);
}
console.log(findFactorial(1, 5, 1));
