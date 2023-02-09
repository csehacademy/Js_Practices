// Date Object

let d = new Date();
let birthday = new Date(2000,9,12);

// set Methods
d.setFullYear(2023);
d.setMonth(10) // get Methods'daki değerleri kendimiz set edebiliyoruz
d.setDate(29);
d.setHours(14);
d.setMinutes(45);
d.setSeconds(20);

// get Methods

console.log(d.getDate());
console.log(d.getFullYear());
console.log(d.getDay()); // haftanın kacıncı gunu
console.log(d.getMonth()); // kacıncı ay (sıfırdan baslıyor)
console.log(d.getHours());

console.log(d.getFullYear() - birthday.getFullYear());
console.log(d.getMonth() - birthday.getMonth());
console.log(d.getDate() - birthday.getDate());

console.log(d);
console.log(typeof d);