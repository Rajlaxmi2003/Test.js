/*const name= "Rajlaxmi Kumari ";
const repoCount= 50
// console.log(name + repoCount);   // OLD / OUTDATED

console.log(`Hello my name is ${name.toLowerCase()} and my repo count is ${repoCount}`);

let score= 85;
console.log(`Result: ${score>=50? "Pass": "Fail"}`);
OUTPUT:
Result: Pass
*/


const gameName= new String('Sneha')
/*console.log(gameName[0]);
console.log(gameName[4]);
console.log(gameName[8]);
OUTPUT:
S
a
undefined

*/
/*
console.log(gameName.__proto__);
console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(6));
console.log(gameName.indexOf('i'));
OUTPUT:
{}
5
SNEHA
           // EMPTY SPACE BECAUSE INDEX 6 IS EMPTY
-1         BECAUSE i is NOT FOUND

*/


/*
const newString=gameName.substring(0,4)
console.log(newString);

//const anotherString= gameName.slice(0,-1)
//console.log(anotherString);

const anotherString= gameName.slice(-4,6)
console.log(anotherString);

OUTPUT
Sneh
neha

*/




/*const newStringOne="   Sneha   "
console.log(newStringOne);
console.log(newStringOne.trim());
OUTPUT
   Sneha   
Sneha
*/


const url="https://hitesh.com/hitesh%20choudhary"
console.log(url.replace('%20','-'));
console.log(url.includes('sneha'));



const gameName1= "hitesh-hc-kumar"
console.log(gameName1.split('-'));


const gameName2= "hitesh hc kumar"
console.log(gameName2.split(' '));


const gameName3= "hitesh_hc_kumar"
console.log(gameName3.split('_'));
/*
OUTPUT:
[ 'hitesh', 'hc', 'kumar' ]
[ 'hitesh', 'hc', 'kumar' ]
[ 'hitesh', 'hc', 'kumar' ]

*/