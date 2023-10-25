//! En cok harfi tekrarlanan soz hangisidir?


let str = "Today, is the greatest day ever!";

//! 1- Harf disindaki ve bosluk disindaki karakterlerin silinmesi.
//! 2- Stringin kucuk harfe donusturulmesi.
//! 3- Stringi Array hale getir.

const arr = str.replace(/[^a-zA-Z ]/g, "").toLowerCase().split(" ");

let kelimeNesneleri = [];

for(let i=0; i<arr.length; i++) {

    let obj = {};

    arr[i].split('').forEach((char) => {
        char in obj ? obj[char] += 1 : obj[char] = 1;
    });

    kelimeNesneleri.push(obj);

}

let maxFrequencies = [];

kelimeNesneleri.forEach((nesne) => {
    maxFrequencies.push(Math.max(...Object.values(nesne)));
});

let maxValue = Math.max(...maxFrequencies)

console.log(maxValue < 2 
? -1 : (arr[maxFrequencies.indexOf(maxValue)]
? arr[maxFrequencies.indexOf(maxValue)] : -1));