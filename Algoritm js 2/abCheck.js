//! Cozum 1

let str = "lane borrowed";

const arr = str.toLowerCase().split("");
let controlArr = [];

arr.forEach((char) => {
    if(char === "a" && arr[arr.indexOf(char) + 4] === "b") {
        controlArr.push(true);
    }
});

console.log(controlArr.includes(true) ? true : false);

//! Cozum 2

// console.log(str.search("a...b") > -1 ? true : false);