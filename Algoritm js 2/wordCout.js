let str = "Canaga Memmedov19";

//! Cumlede olan butun herflerin sayini tapmaq ucun duzeldilen program 

let arr = str.split('');

let i = 0;

arr.forEach((herf) => {
    if((/[a-zA-Z0-9]/).test(herf)) {
        i = i + 1;
    }
});

console.log(i);


//! Cumlede olan butun sozlerin sayini tapmaq ucun duzeldilen program (bosluqlari cixardaraq!)


console.log(str.trim().split(' ').length);