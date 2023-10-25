const num = Number(prompt("Lutfen bir rakam giriniz: "));

let fact = 1;

for (let i = 2; i <= num; i++) {
    fact *= i;
}

alert("Rakaminiz: " + fact);