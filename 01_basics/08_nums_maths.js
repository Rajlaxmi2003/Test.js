/*
const score= 400;
console.log(score);
console.log(typeof score);


const balance= new Number(100);
console.log(balance);
console.log(typeof balance);




console.log(balance.toString());
console.log(typeof balance);
console.log(balance.toString().length);


OUTPUT
400
number
[Number: 100]
object
100
object
3

*/


/*
const newNumber= new Number(200);
console.log(newNumber.toFixed(1));

const otherNumber= new Number(1223.4556);
console.log(otherNumber.toPrecision(3));


OUTPUT
200.0
1.22e+3
*/

/*
const number= 1000000;
console.log(number.toLocaleString());
console.log(number.toLocaleString('en-IN'));

OUTPUT
1,000,000
10,00,000
*/



// ++++++++++++++++++++++ MATHS +++++++++++++++++++

/*
console.log(Math);                 //Object [Math] {}
console.log(Math.abs(-4));           //4
console.log(Math.abs(4));            //4
console.log(Math.round(4.4));        //4
console.log(Math.round(4.9));        //5
console.log(Math.ceil(4.3));         //5
console.log(Math.floor(4.9));         //4


*/



console.log(Math.random());

console.log(Math.random()*10);

console.log((Math.random()*10)+1);

console.log(Math.floor(Math.random()*10)+1);


const min=10;
const max=20;

console.log(Math.random()*(max-min+1));
console.log(Math.floor(Math.random()*(max-min+1)));
console.log(Math.floor(Math.random()*(max-min+1))+ min);


OUTPUT
0.3719622867583633
9.500653606902983
4.926785926038562
10
9.40398564934844
10
17