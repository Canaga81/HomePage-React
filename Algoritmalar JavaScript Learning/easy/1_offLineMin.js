export const offLineMin = (strArr) => {
    
    const [index, sumE] = E_info(strArr);

    const numberArr = strArr.splice(0, index + 1).filter(char => char != "E");

    return numberArr.sort((a, b) => a-b).splice(0, sumE);


    
    
}

function E_info(strArr) {
    let index = "";
    let freq_E = 0;

    for(let i=0; i<strArr.length; i++) {
        if(strArr[i] === "E") index = i, freq_E += 1
    }

    return [index, freq_E];
}




// const arr = strArr.splice(0, strArr.lastIndexOf("E") + 1);

//     let harfler = [];
//     let rakamlar = [];

//     for(let i=0; i<arr.length; i++) {
//         if((/[^0-9]/).test(arr[i])) {
//             harfler.push(arr[i]);
//         }
//         else {
//             rakamlar.push(arr[i]);
//         }
//     }

//     return rakamlar.sort((a, b) => a-b).splice(0, harfler.length);