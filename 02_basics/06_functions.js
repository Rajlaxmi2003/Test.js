
/*
function sayMyName(){
                        console.log("H");
                        console.log("I");
                        console.log("T");
                        console.log("E");
                        console.log("S ");
                        console.log("H");
                }
                sayMyName()
*/

/*
                function addTwoNumbers(num1, num2)
                {
                    let result=num1 + num2 
                    return result
                }
                const result=addTwoNumbers(3,5)
                console.log("Result:",result);
                */


                //ALSO WE CAN 
/*
                function addTwoNumbers(num1, num2)
                {
                    //let result=num1 + num2 
                    //return result
                    return num1 + num2 
                }
                const result=addTwoNumbers(3,5)
                console.log("Result:",result);
        */

/*
function loginUserMessage(username){
                    return `${username} just logged in`
                    }
            console.log(loginUserMessage());
            //OUTPUT
            //undefined just logged in  
*/


//USING IF STATEMENT TO CHECK IF THE USERNAME IS UNDEFINED


/*
function loginUserMessage(username){
    if(username===undefined){
        console.log("Please enter a username");
    }
                    return `${username} just logged in`
                    }
            console.log(loginUserMessage());

//OUTPUT:
//Please enter a username
//undefined just logged in

*/



//TO RETURN A VALUE IF FOUND UNDEFINED AND NOT PRINT THE USERNAME LOGGED IN PART
/*
function loginUserMessage(username){
    if(username===undefined){
        console.log("Please enter a username");
        return
    }
                    return `${username} just logged in`
                    }
            console.log(loginUserMessage());
//OUTPUT:
//Please enter a username
//undefined

*/



// ANOTHER WAY USING NOT OPERATOR

/*
function loginUserMessage(username){
    if(!username){
        console.log("Please enter a username");
        return
    }
                    return `${username} just logged in`
                    }
            console.log(loginUserMessage());
OUTPUT
Please enter a username
undefined

*/




            //SUPPOSE WE WILL PASS A DEFAULT VALUE
function loginUserMessage(username="sam"){
    if(!username){
        console.log("Please enter a username");
        return
    }
                    return `${username} just logged in`
                    }
            console.log(loginUserMessage("Riya"));

