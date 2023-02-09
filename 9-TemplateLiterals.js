// template literals

const fullName = 'sergen yalcin';
const city = 'ist';
const yearOfBirth = 1994;

let val;
// normalde
val = 'my name is ' + fullName + ' yasadigim sehir '+ city +' yasim '+ (2023 - yearOfBirth);

// template literal hali
val2 = `my name is ${fullName} ı'm ${2023 - yearOfBirth} years old and I live in ${city}`;
// ternary operator
val3 = `my name is ${fullName} ı'm ${2023 - yearOfBirth>=18?'over 18':'under 18'} years old and I live in ${city}`;
console.log(val);
console.log(val2)
console.log(val3);