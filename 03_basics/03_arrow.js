const user={
    name:"prajjwal",
    price:999,
    welcomeMessage:function(){
       console.log(`${this.name} ,welcome to websites`);
       console.log(this);
    }
}
// console.log(user.welcomeMessage());
// user.name="pks"
// console.log(user.welcomeMessage());
//console.log(this);// when you are at node environment then it will be empty
// function chai(){
//     let username="hitesh"
//     console.log(this.username)
// }
// chai()
// const two=()=>{
//     let username="hitesh"
//     console.log(this);
// }
// two()
// const addtwo=(num1,num2)=>{
//     return num1+num2;
// }
// const addtwo=(num1,num2)=>  num1+num2
// const addwo=(num3,num4)=> (num1+num2)
// const username1=(num2,num3)=>({user:"p"})
// console.log(username1(3,4));

