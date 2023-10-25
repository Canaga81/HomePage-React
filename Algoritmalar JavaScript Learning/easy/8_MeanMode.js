export const meanMode = (arr) => {

    const mean = kalkulatorMean(arr);

    const mode = kalkulatorMode(arr);

    return mean === mode ? 1 : 0;
    
}

const kalkulatorMean = (arr) => {

    let sum = 0;

    for (let index = 0; index < arr.length; index++) {
        sum += arr[index];
    }

    return sum / arr.length;

}


const kalkulatorMode = (arr) => {

    let freq = {};

    for(j=0; j<arr.length; j++) {
        if(arr[j] in freq) {
            freq[arr[j]] = freq[arr[j]] + 1;
        }
        else {
            freq[arr[j]] = 1;
        }
    }

    const max = Math.max(...Object.values(freq));

    return iterateOverObj(freq, max);

}

const iterateOverObj = (freq, max) => {

    for(let j in freq) {
        if(freq[j] === max) {
            return parseInt(j);
        }
    }

}