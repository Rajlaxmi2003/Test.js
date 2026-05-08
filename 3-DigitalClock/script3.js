const clock= document.getElementById('clock')
//const clock= document.querySelector('#clock')

setInterval(function(){      // setInterval is used to set ki kitne intervals ke baad repeat karna chahiye
    let date = new Date();
    //console.log(date.toLocaleTimeString());      // ye console mein display karane ke liye hai bas
    clock.innerHTML= date.toLocaleTimeString();
    
},1000);    // this 1000 means after every second, 2000 means after every 2 sec