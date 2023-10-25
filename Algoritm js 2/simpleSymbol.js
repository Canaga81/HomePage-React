let str = "++d+===+c++==+a+";

//! Cozum 1

// const arr = str.split('');
// let controlArr = [];

// arr.forEach((char) => {
//     if((/[a-zA-Z]/).test(char)) {
//         if(arr[arr.indexOf(char) - 1] === "+" && arr[arr.indexOf(char) + 1] === "+") {
//             controlArr.push(1);
//         }
//         else {
//             controlArr.push(-1);
//         }
//     }
// });

// console.log(controlArr);

// if(controlArr.includes(-1)) {
//     console.log(false);
// }
// else {
//     console.log(true);
// }


//! Cozum 2

let arr = str.toLowerCase().split('');

for(i=0; i<arr.length; i++) {
    if(arr[i] >= "a" && arr[i] <= "z") {
        if(i === 0 && i === arr.length) {
            console.log(false);
        }

        if(arr[i-1] !== "+" || arr[i+1] !== "+") {
            console.log(false);
        }
    }
}

console.log(true);