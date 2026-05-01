//++++++ REDUCE +++++++++++++=
/*
const myNums=[1,2,3]
const myTotal=myNums.reduce(function(acc,currval)
{
    return acc+currval
},0
)
console.log(myTotal);

*/



/*
const myNums=[1,2,3]
const myTotal=myNums.reduce(function(acc,currval)
{
    console.log(`acc:${acc} and currval:${currval}`);
    
    return acc+currval
},0
)
console.log(myTotal);
*/



//+++++++++ USING ARROW FUNCTION ++++++++++++++

const myNums=[1,2,3]
const myTotal=myNums.reduce((acc,currval)=>acc+currval,0)
//console.log(myTotal);






const shoppingCart=[
    {
            itemName:"js course",
            price:2999
},
    {
            itemName:"python course",
            price:2000
},
    {
            itemName:"data Science course",
            price:1299
},
    {
            itemName:"cpp course",
            price:5999
},
]

const priceTopay=shoppingCart.reduce((acc, item)=>acc + item.price,0)

console.log(priceTopay);
