let step1 = prompt("Enter a price tag :");
let step2 = step1. slice(1);
let step3 = parseFloat(step2);
console.log(step1);
console.log(step2);
console.log(step3);

let step4 = step3 * 0.9;
let step5 = Math.round (step4);
console.log ('New price:$${step5}');



