//! Saitlerin sayini tapma kodu


let str = "Canaga";
//! let arr = str.split('');   Eynidir ferq yoxdur => [...str] - ile.

let i = 0;

[...str].forEach((herf) => {
    if((/a|e|i|o|u|A|E|I|O|U/).test(herf)) {
        i = i + 1;
    }
});

console.log(i);