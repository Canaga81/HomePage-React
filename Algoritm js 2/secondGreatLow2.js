let arr = [5, 6, 9, 7, 106, 98, 7, 12, 108];

let newArr = [];

arr.forEach((num) => {
    !newArr.includes(num) && newArr.push(num)
});

newArr.sort((a,b) => a-b);

if(newArr === 2) {
    console.log(newArr[0] + "-" + newArr[1]);
}
else {
    console.log(newArr[1] + "-" + newArr[newArr.length - 2]);
}