str = "++d+===+c++==+a+";

// const arr = str.split('');
// let controlArr = [];

// arr.forEach(char => {
//     if((/[a-zA-Z]/).test(char)) {
//         if(arr[arr.indexOf(char)-1] === "+" && arr[arr.indexOf(char)+1] === "+") {
//             controlArr.push(1);
//         }
//         else {
//             controlArr.push(0);
//         }
//     }
// });

// console.log(controlArr);

// if(controlArr.includes(0)) {
//     console.log(false);
// }
// else {
//     console.log(true);
// }


// Stringe cevirdik ve balaca herf olsun dedik hamisi.
var arr = str.toLowerCase().split('')
// For'la butunluk teyin eledik.
for(var i=0; i<arr.length; i++) {
    // A ve Z arasinda herf olsun dedik.
    if(arr[i] >= "a" && arr[i] <= "z") {
        // Eger i=0 ve ya butun herf ve simvollar olarsa false olsun dedik.Herf olar ancaq simvol olmaz!
        if(i===0 || i === arr.length) {
            console.log(false);
        }

        // Eger herfden evvelki ve sonraki + olmazsa, false olsun!
        if(arr[i]-1 !== "+" && arr[i]+1 !== "+") {
            console.log(false);
        }
    }
}
    
// Bunlar aid Deyilse True gotursun
console.log(true);