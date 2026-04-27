
/*
const myArr= [1,2,3,4]
const myHeros= ["Shaktiman","Naagraj"]
const myArr2= new Array(1,2,3,4,5)

console.log(myArr[1]);    // 2
console.log(myHeros[3]);   //undefined
console.log(myArr2[4]);    //5



//Array Methods

myArr.push(6)
myArr.push(10)
myArr.push(8)
myArr.pop()
console.log(myArr);



myArr.unshift(9)
myArr.unshift(8)
myArr.shift()
console.log(myArr);



console.log(myArr.includes(19));
console.log(myArr.indexOf(9));



const newArr= myArr.join();
console.log(myArr);
console.log(newArr);
console.log(typeof newArr);




*/


// SLICE AND SPLICE


const myArr= [1,2,3,4,5]
console.log("A", myArr);

const myn1= myArr.slice(1,3);
console.log(myn1);
console.log("B", myArr);

const myn2= myArr.splice(1,3);
console.log(myn2);
console.log("B", myArr);
