const course={
    coursename:"JS in hindi",
    price: "999",
    courseIntructor:"hitesh"
}
console.log(course.courseIntructor);
//const{courseIntructor}=course
//console.log(courseIntructor);

/*
OUTPUT:
hitesh
hitesh

*/

const{courseIntructor:instructor}=course
console.log(instructor);
/*
OUTPUT:
hitesh*/
