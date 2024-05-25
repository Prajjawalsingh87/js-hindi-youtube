// singleton  construtor se jo benega object wo singleton object hai 
// Object.create  {singleton object}
//object literals when we write our own objects
const mySym=Symbol("key1")
const JsUser={
   name:"prajjawal",
   "full name ":"prajjawal kumar singh",
   [mySym]:"mykey1",
   age:18,
   location:"gorakhpur",
   email:"singhprajjawal87@gmail.com",
   isLoggedIn:false,
   lastLoginDays:["Monday","Saturday"]
}
// console.log(JsUser.name);
// console.log(JsUser["name"]); // best way to access value by using pair
// console.log(JsUser["full name "]);
// console.log(JsUser[mySym])

// JsUser.email="sprajjawalsingh@gmail.com"
// Object.freeze(JsUser);// after this chnage will not propagate in objects
// JsUser.email="pks@gmail.com"
// console.log(JsUser)
JsUser.greeting=function(){
    console.log("hello JS user ")
}
JsUser.greetingTwo=function(){
    console.log(`hello JS user,${this["full name "]}`)
}
console.log(JsUser.greetingTwo())

