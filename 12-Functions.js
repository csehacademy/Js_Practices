// Functions

// yazdığımız kodu birçok defa kullanmak zorunda kalıyorsak
// functions kullanabiliriz
// () arasına kullanıcının dısardan gönderecegi parametre isimlerini yazıyoruz

/* Yaş Hesaplayıcı */
function ageCalculate(birthDate, currentYear){
    currentYear = new Date().getFullYear();
    console.log('İçinde bulunduğumuz yıl: '+currentYear)
    return currentYear - birthDate
}
let age = ageCalculate(1991);
console.log('Yaşınız: ' + age);

console.log('------------------------------------');

/* Emeklilik Hesaplayıcı */
function emeklilikHesapla(birthDate,name){
    let yas = ageCalculate(birthDate);
    let kalanYil = 65 - yas;

    if(kalanYil>0){
        console.log(`Sayın ${name} emekli olmanıza ${kalanYil} yıl kaldı`)
    }else{
        console.log('Emekli olmaya hak kazandınız!')
    }
}
emeklilikHesapla(1975,'Ali');

