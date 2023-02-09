  //Strings 
 
const firstName = 'bora';
const lastName = "hidir";
const age = 35;
let val;

  //string concatenation

val =  firstName +' '+ lastName;
val1 = 'bora'
val1 += ' hidir'
val2 = 'My name is '+firstName +' ' + lastName + ' my age is ' + age + ' zongul\'da yasiyorum.';

  //string concat
val3 = firstName.concat(' ',lastName);

  //string length
val4 = 'bora hidir'
val4 = val4.length;   //boslukla birlikte 10 karakter

  //string uppercase - lowercase
val5 = 'bora hidir'
val5 = val.toUpperCase();
console.log(val5);
val5 = val.toLowerCase();
console.log(val5);

val5 = val5[2];   //bora hidir in 2. indexini cagırdı 0 dan baslar ona dikkat
val6 = 'bu bir testtir'
val6 = val6.indexOf('e')   //aradığımız harfin kacıncı indexte old döndürür , olmayan bir karakteri verirsen -1 döner

  //substring
val7 = 'deneme metni';
val7 = val7.substring(0,5);   //0 dan 5. index e kadar ekrana basar

  //slice
val8 = 'javascript metni'
val8 = val8.slice(0,3)   //substringle aynı gorevi görür

 //string replace
val9 = 'bora hidir'
val9 = val9.replace('bora','ali'); // replace ile değiştirme yapıyoruz

// trim
val10 = '  bora hidir   '
val10 = val10.trim(); // basta ve sondaki boslukları siler

let hobbies = 'sinema,spor,yazılım';
hobbies = hobbies.split(',') // 3 elemanlı bir dizi olarak ayırdı aralarında , olanları

console.log(val);
console.log(typeof val);
console.log(val1);
console.log(val2);
console.log(val3);
console.log(val4);
console.log(val5);
console.log(val6);
console.log(val7);
console.log(val8);
console.log(val9);
console.log(val10);
console.log(hobbies);
