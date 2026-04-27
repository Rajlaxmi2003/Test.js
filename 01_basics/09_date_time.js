/*
console.log(myDate.toString());
console.log(myDate.toDateString());
console.log(myDate.toISOString());
console.log(myDate.toJSON());
console.log(myDate.toLocaleDateString());
console.log(myDate.toLocaleString());
OUTPUT
Sun Mar 15 2026 11:37:58 GMT+0530 (India Standard Time)
Sun Mar 15 2026
2026-03-15T06:07:58.017Z
2026-03-15T06:07:58.017Z
15/3/2026
15/3/2026, 11:37:58 am
*/

/*
const myDate= new Date()

console.log(myDate);

console.log(myDate.toString());
console.log(myDate.toDateString());



console.log(myDate.toISOString());

console.log(myDate.toJSON());

console.log(myDate.toLocaleDateString());

console.log(myDate.toLocaleString());

console.log(myDate.toLocaleTimeString());

console.log(typeof myDate);

OUTPUT
2026-04-27T03:25:38.616Z
Mon Apr 27 2026 08:55:38 GMT+0530 (India Standard Time)
Mon Apr 27 2026
2026-04-27T03:25:38.616Z
2026-04-27T03:25:38.616Z
4/27/2026
4/27/2026, 8:55:38 AM
8:55:38 AM
object

*/



/*
let myCreatedDate= new Date(2023, 0, 23)
console.log(myCreatedDate.toDateString());
OUTPUT : Mon Jan 23 2023
*/



/*
let myCreatedDate= new Date(2026, 3, 27, 5, 3)
console.log(myCreatedDate.toLocaleString());
OUTPUT
4/27/2026, 5:03:00 AM
*/



/*
let myCreatedDate= new Date("2023-01-23");
console.log(myCreatedDate.toLocaleString());
OUTPUT
1/23/2023, 5:30:00 AM

*/



//+++++++++++++++ TIME +++++++++++++


/*
let myTimeStamp=  Date.now()
console.log(myTimeStamp);

let myCreatedDate= new Date("2023-01-23");
console.log(myCreatedDate.getTime());

OUTPUT
1777262263698
1674432000000

*/

/*
let newDate= new Date()
console.log(newDate);   // 2026-04-27T04:06:54.924Z
console.log(newDate.getMonth());     //3 means april
console.log(newDate.getMonth()+1);   //4 means april, to make user clear
console.log(newDate.getDay());       //1 means monday


console.log(`The day is ${newDate.getDay()} and the month is: ${newDate.getMonth()+1}`);

OUTPUT
2026-04-27T04:13:46.544Z
3
4
1
The day is 1 and the month is: 4

*/
/*
let newDate= new Date()
console.log(newDate.toLocaleString('default',{
    weekday:"long"
}));

console.log(newDate.toLocaleString('default',{
    month:"long"
}));

OUTPUT
Monday
April

*/


const newDate= new Date();
console.log(`The day is ${newDate.toLocaleString('default',{
    weekday:"long"})} and the month is: ${newDate.toLocaleString('default',{
    month:"long"
})}`);