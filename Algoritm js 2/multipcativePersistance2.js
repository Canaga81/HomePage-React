let num = 14;

let result = multiply(num);
let steps = 1;

if(result < 10) {
    console.log(0);
}

while(result > 9) {
    // console.log(result);
    steps++;
    result = multiply(result);
}

console.log(steps);

function multiply(num) {
    const numArr = num.toString().split('');

    let multiply = 1;

    for(let i=0; i<numArr.lenght; i++) {
        multiply *= numArr[i]
    }

    console.log(multiply);
}

multiply(num);