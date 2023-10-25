const str = prompt("Soz ve ya cumle giriniz: ")

const newStr = str.replace(/[^a-zA-Z0-9 ]/g, "").split('').reverse().join('');

alert("Sozunuz ve ya Cumlenizin terse cevrilimis hali: " + newStr);


/* Rules


    First Reverse

    Have the function FirstReverse(str) take the str 
    parameter being passed and return the string in reversed order. 
    For example: if the input string is "Hello World and Coders" 
    then your program should return the string sredoC dna dlroW olleH.

*/