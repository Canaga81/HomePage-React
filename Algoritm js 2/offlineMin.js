let strArr = ["5","4","6","E","1","7","E","E","3","2"];

function str(strArr) {
    const [index, freqE] = E_Info(strArr);

    const numberArr = strArr.splice(0, index+1);

    console.log(numberArr);
}



function E_info(strArr) {
    let index = "";
    let freq_E = 0;

    for(let i=0; i<strArr.length; i++) {
        if(strArr[i] === "E") index = i, freq_E += 1;
    }

    console.log(index, freq_E);
}