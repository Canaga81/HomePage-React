let num = 2718;

function AdditivePersistence(num) {
  let str = String(num);
  let arr = str.split('');

  let count = 0;

  while (arr.length > 1) {
    arr = String(arr.reduce(function (a, b) {
      return Number(a) + Number(b)
    })).split('');
    count++;
  }
  console.log(count);
}

AdditivePersistence(num);