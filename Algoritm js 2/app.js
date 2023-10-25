// Bir Sonraki Harfe Kecme Kodu

let str = "Ovilex";

let newStr = str.toLowerCase().replace(/[a-z]/gi, (char) => {
    if(char === "z") {
        return "a";
    }
    else {
        return String.fromCharCode(char.charCodeAt() + 1);
    }
});

let vowelCapitalize = newStr.replace(/a|e|i|o|u/gi, (char) => {
    char.toUpperCase();
});

console.log(newStr,vowelCapitalize);