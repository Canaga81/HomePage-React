let arr = ["hello", "world", "after", "all"];

arr.sort((a, b) => b.length - a.length);

console.log(arr[2]);