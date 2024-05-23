/* primitive and non primitive data data */
// primitive
// 7 category : String ,Number,Boolean,null,undefined,Symbol,BigInt
 const id=Symbol('123')
 const anotherId=Symbol('123')
const bignumber=382868567826858525882n  
// console.log(id===anotherId)
// console.log(id==anotherId)
// reference (non primitive)
// array,objects,functions
const heroes=["saktiman","naagraj","doga"];

let mydetail={
    name:"prajjawal kumar singh",
    age:18
}
let myfunction=function(){
  console.log("hello world");
}

// stack(Primitive),heap(Non-Primitive)
let myname="prajjawlsingh"
let anothername=myname;
anothername="srikant"
console.table([myname,anothername])

let userone={
    email: "user@google.com",
    upid:"user@ybl"
}
let usertwo=userone
usertwo.email="jkkkkkk"
console.table([userone,usertwo]);

