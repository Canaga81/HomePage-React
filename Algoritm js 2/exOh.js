let str = "xooxox";

let x = 0;
let o = 0;

[...str].forEach((item) => {
    item === "x" ? x = x+1 : o = o+1;
});

console.log(x === o ? true : false);