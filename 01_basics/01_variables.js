const accountId=144553
let accountEmail="prajjawalsingh.com"
var accountpassword="12345"
accountCity ="gorakhpur"// act as string 
//accountId=2 // not allowed 
let accountstate // undefined 
accountEmail="hc@hc.com"
accountpassword="21212121"
accountCity="bengluru"
console.log(accountId);
/*
  prefer not to use var 
  because of issue in block scope and functional scope
*/
console.table([accountId,accountEmail,accountCity,accountstate]);