export const longestWord = (arr) => {

    const firstArr = CreateArr(arr[0], arr[1]);
    const secondArr = CreateArr(arr[2], arr[3]);

    let intersection = [];

    firstArr.map((item) => {
        if(secondArr.indexOf(item) > -1) intersection.push(item);
    });

    return intersection.length >= arr[arr.length - 1] ? true : false;

}

function CreateArr(x, y) {
    let subSum = [];

    for(let i=x; i<=y; i++) {
        subSum.push(i);
    }

    return subSum;
}