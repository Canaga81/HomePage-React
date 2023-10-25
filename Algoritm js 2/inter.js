// Letter Capitaliza

let str = "bugun hava cox istidir, denize getmek olar bu havada";
let newStr = [];

str.split(' ').forEach((word) => {
    newStr.push(word.charAt(0).toUpperCase() + word.slice(1, word.length));
});

console.log(newStr.join(' '));