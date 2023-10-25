let arr = [5,3,3,3,3,3,1];

const mean = calculateMean(arr);

const mode = calculateMode(arr);

console.log(mean === mode ? 1 : 0);


function calculateMean(arr) {
    let sum = 0;

    for(let i=0; i<arr.length; i++) {
        sum += arr[i];
    }

    // console.log(sum / arr.length);
}


function calculateMode(arr) {
    let freq = {};

    for(let j=0; j<arr.length; j++) {
        if(arr[j] in freq) {
            freq[arr[j]] = freq[arr[j]] + 1;
        }
        else {
            freq[arr[j]] = 1;
        }
    }

    const max = Math.max(...Object.values(freq))
    
    // console.log(max);

    console.log(iterateOverObj(freq, max));
}

function iterateOverObj(freq, max) {
    for(let j in freq) {
        if(freq[j] === max) {
            console.log(parseInt(j));
        }
    }
}