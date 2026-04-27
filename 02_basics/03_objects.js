// OBJECT LITERALS

/*
const JsUser={ 
    name:"Hitesh",
    age:18,
    location:"Jaipur",
    email:"hitesh@gmail.com",
    lastLoggedIn:["Monday","Friday"]
}
console.log(JsUser.email);
console.log(JsUser["email"]);

OUTPUT
hitesh@gmail.com
hitesh@gmail.com
*/



// SUPPOSE WE DECLARE A SYMBOL
const mySym= Symbol("key1")
const JsUser={ 
    name:"Hitesh",
    [mySym]:"mykey1",
    age:18,
    location:"Jaipur",
    email:"hitesh@gmail.com",
    lastLoggedIn:["Monday","Friday"]
}
//console.log(JsUser[mySym])



//  TO CHANGE THE VALUE OF KEY



JsUser.email="hitesh@gmail.com";
//console.log(JsUser["email"]);


//TO FREEZE

//Object.freeze(JsUser)
JsUser.email="hitesh@google.com"
//console.log(JsUser);



// TO ADD A FUNCTION AS A KEY 

JsUser.greeting=function(){
    console.log("Hello Js User");
}
//console.log(JsUser.greeting);
console.log(JsUser.greeting());


JsUser.greetingTwo=function(){
    console.log(`Hello Js User, ${this.name}`);
}
console.log(JsUser.greetingTwo());
