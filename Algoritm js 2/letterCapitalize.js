//! 1-Cumledeki harflerin buyutulmesi

let str = "Bugun hava cok sicak,Denize gide biliriz.";

let newStr = [];

let arr = str.split(' ');

arr.forEach((word) => {
    newStr.push(word.charAt(0).toUpperCase() + word.slice(1, word.length));
});

console.log(newStr.join(' '));


//! Sozdeki harfin buyutulmesi


const w1 = "merhaba";

const ilkHarf = w1.charAt(0).toUpperCase();
const geriKalanHarfler = w1.slice(1, w1.length);

console.log(ilkHarf + geriKalanHarfler);