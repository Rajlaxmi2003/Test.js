/*

function caluculateCartPrice(num1){
            return num1;
}
console.log(caluculateCartPrice(200));
    // OUTPUT: 200
*/




/*
    // WE WANT OT ADD MANY ARGUMENTS BUT DONT KNOW HOW MANY
    // USING REST OPERATOR

function caluculateCartPrice(...num1){
            return num1;
}
console.log(caluculateCartPrice(200,390,500));
//OUTPUT
[ 200, 390, 500 ]
*/








//WHAT HAPPEN IF WE WILL PASS THREE PARAMETERS FIRST TWO WILL BE KNOWN OTHERS ARE TO BE GROUPED USING REST OPERATOR

function caluculateCartPrice(num1,num2,...num3){
            return num3;
}
//console.log(caluculateCartPrice(200,390,500,600,700));

//OUTPUT:
//[ 500, 600, 700 ]




/*
const user={
    username:"hitesh",
    price: 199
}
function handleObject(anyObject){
    console.log(`Username is ${anyObject.username} and price is ${anyObject.price}`);
}
handleObject(user)

*/



/*

//  IF WE WANT TO TAKE MULTIPLE USERS


const user1={
    username:"hitesh",
    price: 199
}
const user2={
    username:"hitesh Sir",
    price: 199
}


function handleObject(user){
    console.log(`Username is ${user.username} and price is ${user.price}`);
}
handleObject(user1)
handleObject(user2)
// OUTPUT
// Username is hitesh and price is 199
// Username is hitesh Sir and price is 199

*/






// DIRECTLY PASSING AN OBJECT WITHOUT PRIOR CREATION
function handleObject(user){
    console.log(`Username is ${user.username} and price is ${user.price}`);
}
handleObject({
    username:"Sam",
    price:2000
})







/*

//+++++++++++++++ ARRAY +++++++++++++

const myNewArray=[200,300,400,500]

function secondValueArray(getArray){
                    return getArray[1];
}
console.log(secondValueArray(myNewArray));

*/




/*

const myNewArray=[200,300,400,500]

function secondValueArray(getArray){
                    console.log(`Elements at 1st index is ${myNewArray[1]}`);
                    console.log(`Elements at 1st index is ${myNewArray[2]}`);
                    
}
secondValueArray(myNewArray)

*/


// ANOTHER WAY WITHOUT PRIOR DECLARATION OF AN ARRAY


function secondValueArray(getArray){
                    return getArray[1];
}
console.log(secondValueArray([10,20,30]));

