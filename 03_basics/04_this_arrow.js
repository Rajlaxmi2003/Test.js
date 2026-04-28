/*const user={
    username:"hitesh",
    price:999,
    welcomeMessage: function(){
        console.log(`${this.username}, welcome to website`);
    }
}
user.welcomeMessage()
//OUTPUT: hitesh, welcome to website

user.username="sam"
user.welcomeMessage()
/*OUTPUT: 
hitesh, welcome to website
sam, welcome to website
*/






//++++++++++++++++++++++++++++
/*
const user={
    username:"hitesh",
    price:999,
    welcomeMessage: function(){
        console.log(`${this.username}, welcome to website`);
        console.log(this);
        
    }
}
user.welcomeMessage()
user.username="sam"
user.welcomeMessage()

/*OUTPUT
hitesh, welcome to website
{
  username: 'hitesh',
  price: 999,
  welcomeMessage: [Function: welcomeMessage]
}
sam, welcome to website
{
  username: 'sam',
  price: 999,
  welcomeMessage: [Function: welcomeMessage]
}
*/


/*


//+++++++++++++++++++++++++++++++++++++++++++

const user={
    username:"hitesh",
    price:999,
    welcomeMessage: function(){
        console.log(`${this.username}, welcome to website`);
        console.log(this);
        
    }
}
// user.welcomeMessage()
// user.username="sam"
// user.welcomeMessage()
console.log(this);
OUTPUT:
{}


//++++++++++++++++++++++++++++++++++


function chai(){
    console.log(this);
}
chai()

*/



//+++++++++++++++++++++++++++++++


//++++++++++++ ARROW FUNCTION +++++++++++++
//NORMAL FUNCTION
/*const addTwo= function(num1,num2){
    return num1+num2
}
console.log(addTwo(3,5));
*/




/*
//ARROW FUNCTION
const addTwo=(num1,num2)=>{
    return num1+num2;
}
console.log(addTwo(3,4));
*/



/*
//OR

const addTwo=(num1,num2)=>num1+num2
console.log(addTwo(3,4));
*/




//OR

const addTwo=(num1,num2)=>(num1+num2)
console.log(addTwo(3,4));


//OBJECT IN A FUNCTION USING ARROW 
const add=(num1,num2)=>({username:"Ankit"})
console.log(add(3,4));