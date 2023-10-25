export const questionMark = (str) => {

// 1- str >- 5 kontrol et 

    if(str.length < 5) {
        return false;
    }

// 2- Soru isareti ve rakam olmayan butun degerleri temizle

    const newStr = str.replace(/[^0-9?]/g, "");

// 3- forEach icin string -> arraya cevir

    const arr = newStr.split('');

/* 4- forEach icerisinde kullanilicak degiskenlerin (sums, sun, iterator) tanimlanmasi */

    const sums = [];
    const sum = 0;
    const iterator = 0;

/* 5- forEach dongusu ile her bir rakam ve kendisinden sonraki 4. karakterin toplanarak sum degiskenine
esitlenmesi ve sonraki bu degerin sums array'ine eklenmesi */

    arr.forEach((item) => {
        sum = parseInt(item) + parseInt(arr[iterator + 4]);
        sums.push(sum);
    });
   

/* 6- Sums array'i icerisinde 10 degeri varsa true, yoksa false degerin donulmesi*/

    if(sums.includes(10)) {
        return true;
    }
    else {
        return false;
    }

}


/*
    Question Mark


    Have the function QuestionsMarks(str) take the str string parameter, 
    which will contain single digit numbers, letters, and question marks, 
    and check if there are exactly 3 question marks between every pair of 
    two numbers that add up to 10. If so, then your program should return
    the string true, otherwise it should return the string false. 
    If there aren't any two numbers that add up to 10 in the string, 
    then your program should return false as well.

    For example: if str is "arrb6???4xxbl5???eee5" then your program should 
    return true because there are exactly 3 question marks between 
    6 and 4, and 3 question marks between 5 and 5 at the end of the string.


*/