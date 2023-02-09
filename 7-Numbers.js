let val;

val = 10;
val1 = '10';
val2 = Number('10');
val3 = parseInt('10');
val4 = parseInt('10.4');
val5 = parseFloat('10.9');
val6 = parseInt('10a');
val7 = parseInt('a10');
val8 = isNaN('10');
val9 = isNaN('adsd10');

var num = 10.32673;
val10 = num.toPrecision();

var num = 10.32673;
val11 = num.toPrecision(4);
// 4 basamak yazar

val12 = num.toFixed(4);
// ondalık kısım icin

val13 = Math.PI;
val14 = Math.round(2.4);
val15 = Math.round(2.8);
// round yuvarlama
val16 = Math.ceil(2.3);
// cell her zaman yukarı yuvarlar
val17 = Math.floor(2.7);
// her zaman aşağı yuvarlar
val18 = Math.sqrt(64);
// karekök alır
val19 = Math.pow(2,4)
// üssünü alır
val20 = Math.abs(-23);
// mutlak değer
val21 = Math.min(1,2,3,4,5);
val22 = Math.max  (1,4,3,5,34,2);
val23 = Math.random();
val24 = Math.random()*4;

console.log(val);
console.log(typeof val);

console.log(val1);
console.log(typeof val1);

console.log(val2);
console.log(typeof val2);

console.log(val3);
console.log(typeof val3);

console.log(val4);
console.log(typeof val4);

console.log(val5);
console.log(typeof val5);

console.log(val6);
console.log(typeof val6);

console.log(val7);
console.log(typeof val7);

console.log(val8);
console.log(typeof val8);

console.log(val9);
console.log(typeof val9);

console.log(val10);
console.log(typeof val10);

console.log(val11);
console.log(typeof val11);

console.log(val12);
console.log(typeof val12);

console.log(val13);
console.log(typeof val13);

console.log(val14);
console.log(typeof val14);

console.log(val15);
console.log(typeof val15);

console.log(val16);
console.log(typeof val16);

console.log(val17);
console.log(typeof val17);

console.log(val18);
console.log(typeof val18);

console.log(val19);
console.log(typeof val19);

console.log(val20);
console.log(typeof val20);

console.log(val21);
console.log(typeof val21);

console.log(val22);
console.log(typeof val22);

console.log(val23);
console.log(typeof val23);

console.log(val24);
console.log(typeof val24);