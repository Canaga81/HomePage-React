let array = [2,4,6,8,10];

let fark = array[1] - array[0];
let aritmetic = true;

let bolme = array[1] / array[0];
let geometric = true;

for(i=2; i<array.length; i++) {
    if(array[i] - array[i-1] != fark) {
        aritmetic = false;
    }

    if(array[i] / array[i-1] != bolme) {
        geometric = false;
    }
}

if(aritmetic === true) {
    console.log("Aritmeticdir !");
}
else if(geometric === true) {
    console.log("Geometricdir !");
}
else {
    console.log("Hic biri degil !");
}