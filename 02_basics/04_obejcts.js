// singleton objects
//const tinder_user=new Object()
const tinder_user={}
tinder_user.id="123abc"
tinder_user.name="Sammy"
tinder_user.isloggedIn=false;
//console.log(tinder_user)
const regularUser={
    email:"pks@gmail.com",
    fullname:{
        userfullname:{
            firstname:"prajjawal",
            lastname:"singh"

        }
    }
}
//console.log(regularUser.fullname.userfullname.firstname)
const obj1={
    1:"a",
    2:"b"
}
const obj2={
    3:"c",
    4:"d"
}

//const obj3=Object.assign({},obj1,obj2)// if you didnt put  {} first then obj1 act as a target object and all the value from obj2 go in obj1
const obj3={...obj1,...obj2};
// console.log(obj3)
const users=[
    {
        id:1,
        email:"h@gmail.com"
    },
    {
        id:1,
        email:"h@gmail.com"
    },
    {
        id:1,
        email:"h@gmail.com"
    },
]
// users[0].email
// console.log(tinder_user)
// console.log(Object.keys(tinder_user))
// // destructuring in objects
const course={
    course_name:"js in hindi",
    price:"999",
    courseInstructor:"prajjawal"
}
//course.courseInstructor
const{courseInstructor:instructor}=course
console.log(instructor);
// methods
// const navbar=()=>{

// }
// API
// json {
//
//}














