let arr = [5, 6, 9, 7, 106, 98, 7, 12, 108];

//! Cift degerlerden Kurtul

newArr = [];

arr.forEach((num) => {
    !newArr.includes(num) && newArr.push(num); //! ---> Tekrarlanan rakamlari temizlemek ucun yazilan kod parcacigi.
});

newArr.sort((a,b) => a-b); //! ---> Kicikden-boyuye rakamlari duzenlemek icin yazilan kod parcacigi.

if(newArr.length === 2) { //! ---> Eger reqem sayi 2 olarsa ele heminki sekilde dondurur,coxdursa en kicik ve en boyuk 2-ci reqemi dondurur.
    console.log(newArr[0] + "-" + newArr[1]);
}
else {
    console.log(newArr[1] + "-" + newArr[newArr.length-2]);
}