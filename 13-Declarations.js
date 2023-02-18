// Function Declarations

function sum(a,b){
    var c = a+b;
    return c;

}
console.log(sum(10,20));

// Function Expressions

const sum2 = function (d,f){
    var e = d+f;
    return e;

}

console.log(sum(12,45));

console.log('----------ayırıcı---------');

const sum3 = function (g,h){
    var j = g+h;
    return j;
}

console.log(sum3(15));
// az parametre gönderdiğimizde:
// NaN döndü çünkü g argümanını verdim h argümanını vermedim
// burda h undefined olduğu için NaN döndü.
console.log(sum(15,20,32,56));
// çok parametre gönderdiğimizde:
// ben 2 argüman tanımlamıştım ancak burda 4 argüman verdim.
// o sebeple sadece 2 tanesini değerlendirir diğerleri önemsizdir.

const sum4 = function(k,l){

    if(typeof k === 'undefined'){k=5;}
    if(typeof l === 'undefined'){l=10;}

    var m = k+l;
    return m;
}

console.log(sum4(13));
// burda l argümanını vermediğimiz için 10 olarak kendisi ekledi

// Default Parameters //

const sum5 = function(r=15,s=23){
    var t = r+s;
    return t;
}

console.log(sum5(13));
// r argumanını verdik s yi vermedik
// default olarak tanımladık
// 13 + 23

console.log('----------ayırıcı---------');

function totalSum(){
    var total = 0;
    for(let i = 0; i<arguments.length; i++){
        total+=arguments[i];
    }
    return total;
}
console.log(totalSum(12,42,21,33));
// girdiğim bütün sayıları argüman olarak alıp toplayan fonk.