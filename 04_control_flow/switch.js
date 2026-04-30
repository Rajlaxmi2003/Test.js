/*switch (key) {
    case value:
        
        break;

    default:
        break;
}
*/



const month=3;
switch(month) {
    case 1:
        console.log("January");
        
        break;
    case 2:
        console.log("February");
        
        break;
    case 3:
        console.log("March");
        
        break;
    case 4:
        console.log("April");
        
        break;
    case 5:
        console.log("May");
        
        break;

    default:
        console.log("None of the above");
        
        break;
}




//++++++++++++ TRUTHY AND FALSY ++++++++++++++

const userEmail="h@gmail.com"
if(userEmail){
    console.log("got");
}else{
    console.log("Not got");
}




const userEmail1=""
if(userEmail1){
    console.log("got");
}else{
    console.log("Not got");
}




const userEmail2=[]
if(userEmail2.length===0){
    console.log("got");
}else{
    console.log("Not got");
}




const userEmail3=[]
if(Object.keys(userEmail3).length===0){
    console.log("got");
}else{
    console.log("Not got");
}






//++++++++++++  NULLISH COALESCING OPERATOR(??) ++++++++++++++++++

    let val1;
    val1=5??10;
    console.log(val1);
    

    let val2;
    val2= null ?? 10;
    console.log(val2);
    

    let val3;
    val3= undefined ?? 15;
    console.log(val3);
    
let val4;
    val4= null ?? 15 ?? 20;
    console.log(val4);
    





    //+++++++++++ TERNARY OPERATOR +++++++++++++++

    const iceTeaPrice= 100;
    iceTeaPrice<=80? console.log("less than 80"): console.log("More than 80");
    
    