let str = prompt("Bir soz ve ya cumle giriniz: ");

let newStr = str.replace(/[a-z]/gi, (char) => {
    if(char === "z") {
        return "a";
    }
    else {
        return String.fromCharCode(char.charCodeAt() + 1);
    }
});

alert("Harflerin bir sonra gelen harflerle yazilmis formasi: " + newStr);