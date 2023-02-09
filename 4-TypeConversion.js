   // Tür Dönüşümü

let num1 = '5';
let num2 = '10';

console.log(typeof num1);
console.log(num1+num2);

let num3 = Number('5');
let num4 = Number('10');

let total = num3 + num4

console.log(typeof num3);
console.log(num3+num4);
console.log(total); 

let val;
   // ** number to string
val = String(10);

console.log(val);
console.log(typeof val);
console.log(val.length);

   // ** bool to string

val = String(true);

console.log(val);
console.log(typeof val);
console.log(val.length);

   // ** date to string
   val = new Date();
val = String(new Date().getFullYear());

console.log(val);
console.log(typeof val);
console.log(val.length);

   // ** array to string

val = String([1,2,3,4]);

console.log(val);
console.log(typeof val);
console.log(val.length);

   // ** toString()

val = (10).toString();
val1 = false.toString();

console.log(val);
console.log(typeof val);
console.log(val.length);

console.log(val1);
console.log(typeof val1);
console.log(val1.length);

   // ** string to number

val = Number('10');
val1 = Number(true);
val2 = Number(false);
val3 = Number(null);
val4 = Number('a');
val5 = Number([1,2,3,4,5]);

console.log(val);
console.log(typeof val);
console.log(val.toFixed(3));

console.log(val1);
console.log(typeof val1);
console.log(val1.toFixed(4));

console.log(val2);
console.log(typeof val2);
console.log(val2.toFixed(2));

console.log(val3);
console.log(typeof val3);
console.log(val2.toFixed(6));

console.log(val4);
console.log(typeof val4);
console.log(val4.toFixed(3));

console.log(val5);
console.log(typeof val5);
console.log(val5.toFixed(3));

// parseInt
// parseFloat

val = parseInt('14');
val1 = parseInt('14.3');
val2 = parseFloat('14.5');

console.log(val);
console.log(typeof val);
console.log(val.toFixed(3));

console.log(val1);
console.log(typeof val1);
console.log(val1.toFixed(3));

console.log(val2);
console.log(typeof val2);
console.log(val2.toFixed(3));