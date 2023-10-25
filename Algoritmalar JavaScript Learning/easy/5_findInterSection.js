export const findIntersection = () => {


//! 1-Yeni bir Array tipinde degisken tanimla.

    let interSection = []

//! 2-split(), replace().

    const set1 = arr[0].replace(/\s/g, "").split(',')
    const set2 = arr[1].replace(/\s/g, "").split(',')

//! 3-forEach() kullanark butun array icerisindeki karakterlerin diger array icerisinde olup olmadigini kontrol edicez.
    //! Varsa tanimladigimiz yeni array degiskeni icerisine bu degeri koyucaz.

    set2.forEach(item => {
        if(set1.includes(item)) {
            interSection.push(item);
        }
    });    

//! 4-Eger tanimlamis oldugumuz array bossa return false, bos degilse de array icerisindeki degerleri string halinde 
    //! return edicez.

    if(interSection.length != 0) {
        return interSection.toString();
    }
    else {
        return false;
    }
    
}


// ["1, 3, 4, 7, 13", "1, 2, 4, 13, 15"]



/*
    Find Intersection

    FindIntersection(strArr) read the array of strings stored in strArr 
    which will contain 2 elements: the first element will represent 
    a list of comma-separated numbers sorted in ascending order, 
    the second element will represent a second list of 
    comma-separated numbers (also sorted). Your goal is to return 
    a comma-separated string containing the numbers that occur in 
    elements of strArr in sorted order. If there is no intersection, 
    return the string false.

*/