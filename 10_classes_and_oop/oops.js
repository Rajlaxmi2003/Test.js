// const user={
//     username:"sneha",
//     loggedInCount: 8,
//     getUserDetails: function(){
//         console.log("Got User details from database");
        
//     }
// }

// console.log(user.username);
// console.log(user.getUserDetails());




// using this

// const user={
//     username:"sneha",
//     loggedInCount: 8,
//     getUserDetails: function(){
//         console.log(`username:${this.username}`);
        
//     }
// }

// console.log(user.username);
// console.log(user.getUserDetails());




// whats inside this

// const user={
//     username:"sneha",
//     loggedInCount: 8,
//     getUserDetails: function(){
//         console.log(`username:${this.username}`);
//         console.log(this);
        
//     }
// }

// console.log(user.username);
// console.log(user.getUserDetails());
// console.log(this);







// CONSTRUCTOR FUNCTION

function User(username,logInCount,isloggedIn){
    this.username=username;
    this.logInCount=logInCount;
    this.isloggedIn=isloggedIn
    return this
}
const userOne= new User("hitesh",8,true)
const userTwo= new User("sneha",12,false)

console.log(userOne);
console.log(userTwo);
