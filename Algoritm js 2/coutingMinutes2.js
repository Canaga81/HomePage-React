let time = "9:00am-10:00am";

const times = time.split('-');

let time1 = {};
let time2 = {};

time1.meridien = times[0].slice(-2);
time1.hour = parseInt(times[0].split(':')[0]);
time1.minute = parseInt(times[0].slice(-4,-2));

time2.meridien = times[1].slice(-2);
time2.hour = parseInt(times[1].split(':')[0]);
time2.minute = parseInt(times[1].slice(-4,-2));

let minutes = 0;
let result = 0;

if(time1.meridien === time2.meridien) {
    minutes = (time2.hour*60 + time2.minute) - (time1.hour*60 + time1.minute);
    result = minutes > 0 ? minutes : 24*60 + minutes;
}
else {
    minutes = (time2.hour*60 + time2.minute) - (time1.hour*60 + time1.minute);
    result = 12*60 + minutes;
}

console.log(result);