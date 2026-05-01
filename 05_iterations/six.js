const coding=["js","rb","python","cpp","java"]

const values=coding.forEach((item)=>{
    //console.log(item);
    return item
})
//console.log(values);
// here when we return a value to the variable it will show undefined, to solve this we use filter


//+++++++++++ FILTER ++++++++++++
// const myNums=[1,2,3,4,5,6,7,8,9,10]
// const newNums=myNums.filter((num)=>num>4)
//console.log(newNums);


// also

const myNums=[1,2,3,4,5,6,7,8,9,10]
const newNums=myNums.filter((num)=>{
        return num>4
})
//console.log(newNums);





//+++++++++++++ MORE EXAMPLES ++++++++++++

const books=[
    {
        title:'Book One',genre:'Fiction',publish:1981,edition:2004
    },
    {
        title:'Book Two',genre:'Non-fiction',publish:2002,edition:2008
    },
    {
        title:'Book Three',genre:'History',publish:1998,edition:2012
    },
    {
        title:'Book Four',genre:'Fiction',publish:2009,edition:2009
    },
    {
        title:'Book Five',genre:'History',publish:1998,edition:2011
    },
    {
        title:'Book Two',genre:'non-fiction',publish:1992,edition:2008
    },
]

let userBooks=books.filter((bk)=>bk.genre==='History')
userBooks=books.filter((item)=>{
    return item.publish>=1995 && item.genre==='History'
})
console.log(userBooks);



