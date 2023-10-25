export const SuperIncreasing = (arr) => {
    for(let i=1; i<arr.length; i++) {
        let sum = sumOfSubjects(arr, i);

        if(sum >= arr[i]) {
            return false
        }
    }

    return true;
}

const sumOfSubjects = (arr, index) => {
    let sum = 0;

    for(let j=0; j<index; j++) {
        sum += arr[j];
    }

    return sum;
}