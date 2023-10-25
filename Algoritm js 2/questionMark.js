let str = "acc?7??sss?3rr1??????5";


res = false;

for(i=0; i<=str.length; i++) {
    for(j=i+1; j<=str.length; j++) {
        if(Number(str[i]) + Number(str[j]) === 10) {
            res = true;

            if(str.slice(i,j).split("?").length - 1 < 3) {
                console.log(false);
            }
        }
    }
}

console.log(true);