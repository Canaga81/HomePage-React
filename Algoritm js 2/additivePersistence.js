let num = 2718;

if(num < 10) { //! Eger verilen parametre bir haneli rakamsa 0 don
    console.log(0);
}

let sumOfDigits = sum(num);
let steps = 1;

while(sumOfDigits > 9) {
    console.log(sumOfDigits);
    steps++;
    sumOfDigits = sum(sumOfDigits);
}

console.log("steps:" + steps + " - " + "sumOfDigits:" + sumOfDigits);

// console.log(num);

function sum(n) {
    let sum = 0;

    const arr = n.toString().split('');

    for(let i=0; i<arr.length; i++) {
        sum += parseInt(arr[i]);
    }

    console.log(sum);
}