const tinderUser={}

tinderUser.id="123abc"
tinderUser.name="Sam"
tinderUser.isLoggedIn= false

// console.log(tinderUser);



const regularUser={
    email:"some@gmail.com",
    fullname:{
        userfullname:{
        firstname: "Rajlaxmi",
        lastname:"Kumari"
        }
    }
}
//console.log(regularUser.fullname.userfullname);
//console.log(regularUser.fullname.userfullname.firstname);


//+++++++++ COMBINING OBJECT++++++++++
const obj1={1:"a",2:"b"}
const obj2={3:"a",4:"b"}
const obj3={4:"a",5:"b"}

// USING ASSIGN
//const obj4=Object.assign({},obj1,obj2,obj3);
//console.log(obj4);


// USING SPREAD 

const obj4={...obj1,...obj2,...obj3};
//console.log(obj4);



const user=[
    {
        id:1,
        email:"h@gmail.com"
    }
]

console.log(user);
console.log(user.email);
console.log(tinderUser);
console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));

// hasOwnProperty
console.log(tinderUser.hasOwnProperty('isLoggedIn'));
console.log(tinderUser.hasOwnProperty('isLogged'));



