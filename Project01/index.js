// a  = new Date();
// let date = a.toLocaleDateString();
// // let time = a.getDate() +" "+ a.getMonth() + ", "  + a.getHours() + " : " + a.getMinutes() + " : " + a.getSeconds();
// let time = a.getHours() + " : " + a.getMinutes() + " : " + a.getSeconds();
//document.getElementById('time').innerHTML = time + " on " + date;


let a;
let date;
let time;
const options = {weekday: 'long', year:'numeric',month: 'long', day: 'numeric'};
setInterval(() => {

a  = new Date();
date = a.toLocaleDateString(undefined, options);
time = a.getHours() + " : " + a.getMinutes() + " : " + a.getSeconds();
document.getElementById('time').innerHTML = time + " on " + date;

}, 1000);