// Loops

/* for loop */

for(let i=1; i<10; i++){
    console.log(i)
// for döngüsünün 3 kısmı olmalı
}

console.log("ayırıcı")

for(let a=4; a<14; a++){

    if(a==6){
        console.log("en sevdigim rakam:" + a);
        continue;
        // continue dediğimiz için 6 yı tekrar saymadı
    }
    if(a==9){
        console.log("en sevmedigim rakam:" + "9");
        break;
        // break gördügü yerde kırar
    }
    console.log(a);
}


/* while loop */


for (let i=0; i<10;i++){
    console.log(i);

}


console.log("ayırıcı");

let a=0;
while(a<10){
    console.log(a);
    a++;
}


/* do-while loop */

let i=0;
do{
    console.log(i);
    i++;

}while(i<10)

let toplam=0;
for (let i=10;i>0;i--){
    toplam +=i;


}
console.log(toplam)

let carpim=1;
for (let i=12;i>2;i--){
    carpim *=i;


}
console.log(carpim);

let carpim_cift=1;
for (let i=10;i>0;i--){
    if(i%2==0){
        carpim_cift *=i;
    }


}
console.log(carpim_cift);
// 10 ile 0 arasındaki yalnızca çift sayıları çarptı

let carpim_tek=1;
for (let i=10;i>0;i--){
    if(i%2==1){
        carpim_tek *=i;
    }
}
console.log(carpim_tek);
// 10 ile 0 arasındaki yalnızca çift sayıları çarptı
// ikiye böldügünde 1 kalır


/* dongu icinde dongu */

let val = '';
for (let i=0;i<5;i++){

    for(let j=0;j<5;j++){
        console.log(`i : ${i} j: ${j}`);

    }
}

/* yıldız yapmak */

let val1='\n';
for (let i=0;i<9;i++){
    for(let j=0;j<6;j++){
        val +='* ';
    }
    val1 +='\n';
}
console.log(val)
// burdaki değerlerle oynayarak (6 ve 4)
// döngü mantığnı daha iyi anlayabiliriz

