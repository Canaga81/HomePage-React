let str = "Hello World1";

let newArr = [];

str.split('').forEach((elm) => {

    if((/[^a-zA-Z]/).test(elm)) {
        newArr.push(elm);
    }
    else if((/[a-z]/).test(elm)) {
        newArr.push(elm.toUpperCase());
    }
    else if((/[A-Z]/).test(elm)) {
        newArr.push(elm.toLowerCase());
    }
    
});

console.log(newArr.join(''));