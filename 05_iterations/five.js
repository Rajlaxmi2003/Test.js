// for each loop

const programming=["js","rb","python","cpp","java"]
programming.forEach(function(val){
    //console.log(val);
    
})
//+++++ Arrow Function ++++++++++
programming.forEach((val)=>{
   // console.log(val);
    
})


//+++++++++++++++++++++

function printMe(item){
    //console.log(item);
}
programming.forEach(printMe)






//+++++++ ITEMS KA ARRAY WITH INDEX +++++++++++

programming.forEach((item,index,arr)=>{
   // console.log(item,index,arr);
    
})





//+++++++ Array ke andar object +++++++++++++
//[{} {} {}]

const myCoding=[
    {
        languageName:"javascript",
        languageFileName:"js"
    },
    {
        languageName:"java",
        languageFileName:"java"
    },
    {
        languageName:"python",
        languageFileName:"py"
    },
]
myCoding.forEach((item)=>{
    console.log(item.languageName);
    
})