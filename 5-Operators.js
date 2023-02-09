// Operatorler

let val;
const a=9;
const b=5;
const c=3;
let d = 2
let valo;
let valoo;
const f = 3

// 1 - Aritmetik Operatorler

val = a+b;
console.log(val);
val = a*b;
console.log(val);
val = a/b; // normal bölme
console.log(val);
val = a%b; // bolümünden kalan
console.log(val);
val = ++d; // 3 oldu
console.log(val);
val = --d; // 1 azaltınca 2 oldu
console.log(val);
val = c + a;
console.log(val)

val = a+b;
val1 = a-b;
val2 = a*b;
val3 = a/b;
val4 = a%b;
val5 = d++;
val6 = ++d;
val7 = d--;
val8 = --d;
valo = c+a
// val5 ile 3 yapmıştık val6 ile 4 oldu

console.log(d);

// 2 - Atama Operatorleri

valo +=c; // valo = valo + c (12 + 3)
valo -=c; // valo = valo - c (12 - 3)
valo *=c; // valo = valo * c (12 * 3)
valo /=c; // valo = valo / c (12 / 3)
valo %=c; // valo = valo % c (12 % 3) (mod = bolumunden kalan)

// 3 - Karşılaştırma Operatorleri

valoo = a==b; // false a=b değil
valoo = c==f; // true c=f
valoo = a===b; // değer ve tip kontrolü false
valoo = c===f; // değer ve tip kontrolü true
valoo = 5 === '5'; // false
valoo = a!=b; // a b ye eşit değil oyüzden true
valoo = c!=f; // c f ye eşit oyüzden false
valoo = c!==f; // c f ye eşit ve tipi de aynı oyüzden false
valoo = a > b; // a b den büyük true
valoo = c > f; // c f den büyük degil oyüzden false
valoo = b < a; // true
valoo = a >= b; // buyuk esit
valoo = a <= b; // kucuk esit
valoo = 4 >= 4; // true
valoo = 4 >= 5; // false


// 4 - Mantıksal Operatorler

    // && (and) // ikisi de doğru olmalı
    // true && true => true
    // true && false => false
    // false && false => false
    valoo = (a>b) && (a>c)

    // || (or)
    // ikisinden biri tutsa yeter
    // true && true => true
    // true && false => true
    // false && false => false
    valoo = (a>b) || (a<c)

    // ! (Not - değil)

    valoo = !(a>b)
    // !true = false
    // !false = true
    // a normalde b den büyük
    // degilini aldığım icin false

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
console.log(val6);
console.log(val7);
console.log(val8);
console.log(valo);
console.log(valoo);
console.log(typeof valoo);