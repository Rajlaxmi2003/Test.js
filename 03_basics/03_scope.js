/*
let a=10;
const b=20;
var c=30;
console.log(a);
console.log(b);
console.log(c);

*/




/*
// USING SCOPE{}
if (true){
    let a=10;
const b=20;
var c=30;
}
console.log(a);//ERROR
console.log(b); //ERROR
console.log(c);  //30 THIS IS THE DRAWBACK OF VAR BECAUSE SCOPE KE BAHAR NAHI JANA CHAHIYE THA
*/





/*

//SUPPOSE ANOTHER PROGRAM GETS TO CODE AFTER THE PARTICULAR LINE
var c=3000;
if (true){
    let a=10;
const b=20;
var c=30;
}
console.log(c);
//OUTPUT:30 THIS IS THE PROBLEM IT SHOULD BE 3000

*/





/*
// TESTING LET
let a=3000;
if (true){
    let a=10;
const b=20;
var c=30;
}
console.log(a);
// OUTPUT:3000  THATS WHY IT IS PREFERABLE BECAUSE IT HELPS FROM BUGS
*/





/*
// PRINTING THE VALUE INSIDE THE SCOPE
let a=3000;
if (true){
    let a=10;
const b=20;
var c=30;
console.log("INNER:", a);

}
console.log(a);
//OUTPUT:
//INNER: 10
//3000
*/




//++++++++++++++SCOPE LEVEL AND MINI HOISTING++++++++++++

function one(){
    const username="hitesh"
    function two(){
        const website="youtube"
        console.log(username)
    }
   // console.log(website);
    two()
}
one()



if(true)
{
    const username="hitesh"
    if(username==="hitesh"){
        const website=" youtube"
        console.log(username + website);
    }
    //console.log(website);
    
}
//console.log(username);






