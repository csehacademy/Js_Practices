// Arrays - Diziler
 
let names = ['ahmet','mehmet','ali','veli'];

let birth = [1995,2003,1994,2005];

let mix = ['aslı','32','cemal',24,null,undefined,['spor'],['tv']];
// dizinin içinde farklı tipte elemanlar olabilir

console.log(names);
console.log(typeof names);
// bu bir obje olduğu için consoldaki proto kısmında birsürü metod var
console.log(names.length);

console.log(birth);
console.log(typeof names);
console.log(birth.length);

console.log(mix);
console.log(typeof mix);
console.log(mix.length);

// get array item - elemanları çekme
console.log(names[0]);
console.log(names[3]);

// set array irem - yeni eleman atama
names[0]='emre';
console.log(names)
// 0. indexteki eleman emre oldu

names[5]='faruk';
console.log(names);
console.log(names.length);
// 4. indexte eleman olmadığı için araya boş bir empty değeri ekledi
// names[4] deseydim sorun olmayacaktı

names[names.length]='irem';
console.log(names);
// bu şekilde yaptığımda da sorun olmayacak son elemana ekleyecek

// add item - array metodlarını kullanarak item ekleme
birth.push(1943);
console.log(birth);
// push : son eleman olarak ekler
birth.unshift(2001);
console.log(birth);
// unshift : ilk eleman olarak ekler

// remove item - eleman silme
birth.pop();
console.log(birth);
// pop : son elemanı siler

birth.shift();
console.log(birth);
// shift : ilk elemanı siler

// bu metodların hepsine prototype kısmından ulaşabiliriz

// indexOf

let indexItem = names.indexOf('ali');
console.log(indexItem);
// ali names in ikinci indexiymiş

let indexItem1 = names.indexOf('test');
console.log(indexItem1);
// böyle bir index olmadığı için -1 döndü.

// reverse
names.reverse();
console.log(names);
// listeyi tersine çevirir

// sort
names.sort();
console.log(names);
// alfabetik sıralama yapar
birth.sort();
console.log(birth);
// sayısal sıralama yapar

// concat - birleştirme

let con = birth.concat(names);
console.log(con);

// splice - yeni eleman eklemek veya eleman silmek

console.log(names)
names.splice(0,1);
console.log(names)
// 0. indexten 1. indexe kadar olan elemanları sildi
// yani ilk elemanı sildi

names.splice(2,1,'bora');
console.log(names)
// ikinci elemandan itibaren 1 eleman sil ve 'bora' yı ekle

let years = [2010,1992,2001,1994];

// find

// filter

function over18(year){
    let age = 2023 - year;
    return age >= 18;
}
// daha fonksiyon görmedik ama bu örneği anlamamız için
// basit bir fonksiyon tanımlayacağım
// 18 yaşından büyük eşitse true dönüyor

let val = years.find(over18);
console.log(val)
// find : 18 yaşından büyük olan ilk değeri döndürdü
// 1994 de 18 den büyük ama onu döndürmedi

let val1 = years.filter(over18);
console.log(val1)
// birden fazla değeri döndürmesini istiyorsam filter kullanmalıyım