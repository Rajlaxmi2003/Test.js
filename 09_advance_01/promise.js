//creation


const promiseOne= new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log('Async task is completed');
        resolve()
        
    },1000)
})

// consumption
promiseOne.then(function(){
    console.log('Promise is consumed');
    
})



// ANOTHER WAY

new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log('Async task 2');
        resolve()
    },1000)
    
}).then(function(){
    console.log('Async 2 resolved');
    
})






const promiseThree= new Promise(function(resolve,reject){
    setTimeout(function(){
        resolve({username:"Sneha",email:"rajlaxmik@example.com"})
    },1000)
})

promiseThree.then(function(user){
    console.log(user);
    
})







const promiseFour= new Promise(function(resolve,reject){
    setTimeout(function(){
        let error=false
        if(!error){
            resolve({username:"sneha",password:"123"})
        }else{
            reject('ERROR: Something went wrong')
        }
    },1000)
})

promiseFour
.then((user)=>{
    console.log(user);
    return user.username
}).then((username)=>{
    console.log(username);
    
}).catch(function(error){
    console.log(error);
    
}).finally(()=>{
    console.log('Promise is either resolved or rejected');
    
})




// USING async and await

const promiseFive= new Promise(function(resolve,reject){
    setTimeout(function(){
        let error=true
        if(!error){
            resolve({username:"Javascript",password:"123"})
        }else{
            reject('ERROR: JS went wrong')
        }
    },1000)
})


async function consumePromiseFive() {
    try{
        const response=await promiseFive
        console.log(response);
        
    }
    catch(error){
        console.log(error);
        
    }
}
consumePromiseFive()






// to read the API
// async function getAllUsers() {
//     try {
//         const response= await fetch('https://api.github.com/users/rajlaxmikumari')

//         const data= await response.json()
//         console.log(data);
        
//     } catch (error) {
//         console.log("E:",error);
        
//     }
// }
// getAllUsers()







// .then() .catch() format

fetch('https://api.github.com/users/rajlaxmikumari')
.then((response)=>{
    return response.json()
})
.then((data)=>{
    console.log(data);
    
}).catch((error)=>console.log(error)
)

