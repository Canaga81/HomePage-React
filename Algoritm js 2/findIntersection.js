let strArr = ["1, 3, 5, 4, 7", "1, 2, 5, 4, 15"];

var a = strArr[0].split(", ");
var b = strArr[1].split(", ");

var result = a.filter(x => b.find(a => a === x));
console.log(result.length > 0 ? result.join(',') : false);