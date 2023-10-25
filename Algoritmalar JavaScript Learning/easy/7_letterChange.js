export const letterChange = (str) => {
    let newStr = str.toLowerCase().replace(/[a-z]/gi, (char) => {
        if(char === "z") {
            return "a";
        }
        else {
            return String.fromCharCode(char.charCodeAt() + 1);
        }
    });

    return newStr;
}