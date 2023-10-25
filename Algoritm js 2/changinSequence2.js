let arr = ["1","2","4","6","4","3","1"];
// let arr = ["10","9","8","7","6","12","13"];
// let arr = ["1","2","4","6","7","3","1"];

let newArr = [];
let tendency = "increasing";

for (let i = 1; i < arr.length; i++) {
    newArr.push(arr[i] - arr[i-1]);
}

if(newArr[0] < 0) tendency = "decreasing";

if(tendency === "increasing") {
    for(let i=0; i<newArr.length; i++) {
        if(newArr[i] < 1) console.log(i);
    }
}

if(tendency === "decreasing") {
    for(let i=0; i<newArr.length; i++) {
        if(newArr[i] > 0) console.log(i);
    }
}


console.log(-1);