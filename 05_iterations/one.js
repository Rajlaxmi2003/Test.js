// ++++++++++++++ FOR LOOP +++++++++++++++
for (let i = 0; i <= 10; i++) {
    const element = i;
   // console.log(element);
    
}


//+++++++++++  IF ELSE inside loop ++++++++++++
for (let j = 0; j <=10; j++) {
    const element = j;
    if(element==5){
       // console.log("5 is best number");
        
    }
    //console.log(element);
    
}



//+++++++++++ loop inside loop +++++++++++
for (let i = 0; i <=10; i++) {
            //console.log(`Outer loop value: ${i}`);
    for (let j = 0; j <=10; j++) {
            //console.log(`Inner loop value ${j} and inner loop ${i}`);
            
    }
    
}




//+++++++   table ++++++++++++

for (let i = 0; i <=10; i++) {
            //console.log(`Outer loop value: ${i}`);
    for (let j = 0; j <=10; j++) {
           // console.log(i + '*' + j + '=' + i*j);
            
    }
    
}



//++++++++ ARRAY +++++++++++++
let myArr=["flash", "batman", "superman"]
for (let index = 0; index < myArr.length; index++) {
    const element = myArr[index];
    //console.log(element);
    
}



//++++++++ BREAK AND CONTINUE ++++++++++

for (let index = 0; index <=20; index++) {
    if(index==5){
        //console.log(`Detected 5`);
        break;
    }
    //console.log(`value of i is ${index}`);
    
}



for (let index = 0; index <=20; index++) {
    if(index==5){
        console.log(`Detected 5`);
        continue;
    }
    console.log(`value of i is ${index}`);
    
}

