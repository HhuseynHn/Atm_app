
// 1. Reqm daxil edirik. Fib ardicilligin tapib arraya yigirsiniz. Daha sonra bunlardan murekkeb olanlari arrayda verirsiniz.
// --------------- HOMEWORK TASK-----------------------------
var fiboAry = (fbNmber) => {
  var firstNmber = 0;
  var sencndNmber = 1;
  var sum = firstNmber + sencndNmber;
  var fibAry = [];
  fibAry.push(firstNmber);
  fibAry.push(sencndNmber);
  while (fbNmber > sum) {
    fibAry.push(sum);
    firstNmber = sencndNmber;
    sencndNmber = sum;
    sum = firstNmber + sencndNmber;
  }
  return fibAry;
};

var isPrimeNmb = (aryFb) => {
  var primeAry = [];
  aryFb.map((elmnt) => {
    for (let i = 2; i < elmnt; i++) {
      if (elmnt % i == 0) {
        primeAry.push(elmnt);
        break;
      }
    }
  });
  return primeAry;
};

var inputNmber = prompt("Enter nmber");
var fibonci = fiboAry(inputNmber);
console.log("1. Fibo_ARY: ", fibonci);
console.log("2. Prime_ARY: ", isPrimeNmb(fibonci));
