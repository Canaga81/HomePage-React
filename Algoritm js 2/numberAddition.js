let str = "88Hello 3World";

const strArr = str.split('');

let numberArr = [];

for(let i=0; i<strArr.length; i++) {

    let lastI = numberArr.length - 1;

    if((/[^0-9]/).test(strArr[i])) { //! Dongudeki karakter rakam degilse
        numberArr.push(strArr[i]);
    }
    else { //! Dongudeki karakter eger rakamsa

        if(numberArr.length === 0) {
            numberArr.push(strArr[i]);
        }
        else if((/[0-9]/).test(numberArr[lastI])) { //! Array bos degil ve arrayin icerisindeki son deger rakamsa
            numberArr[lastI] = numberArr[lastI] + strArr[i];
        }
        else if((/[^0-9]/).test(numberArr[lastI])) { //! eger array bos degil ve son degeri rakam degilse
            numberArr.push(strArr[i]);
        }

    }

}

calculateSum(numberArr)

function calculateSum(arr) {
    let sum = 0;

    for(let j=0; j<arr.length; j++) {
        if(arr[j].match(/\d+/)) { //! 1 ve 1'den fazla basamaga sahip rakamlarin olup-olmamasini gosterir(match)
            sum += parseInt(arr[j]);
        }
    }

    console.log(sum);
}