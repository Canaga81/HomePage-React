let arr = [5,3,3,3,3,3,1];

let sum = 0;
let sum_index = 0;

for(let i=0; i<arr.length; i++) {

    sum += arr[i];

    sum_index = sum / arr.length;
    
}

// console.log(sum_index);


let freq = {};
let max = {}

for(let j=0; j<arr.length; j++) {
    if(arr[j] in freq) {
        freq[arr[j]] += 1
    }
    else {
        freq[arr[j]] = 1;
    }

    max = Math.max(...Object.values(freq));
    
}

// console.log(max);

for(let j in freq) {
    if(freq[j] === max) {
        // console.log(parseInt(j));

        if(sum_index === parseInt(j)) {
            console.log(true);
        }
        else {
            console.log(false);
        }
    }
}