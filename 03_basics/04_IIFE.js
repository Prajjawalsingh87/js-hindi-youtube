(function chai(){
    console.log(`DB CONNECTED `)
})(); // named iFFI name is chai()
//always use semicolon to stop  
 // immediately invoked function expressions (IIFE)
// to remove global scope pollution we are using IIFE
((name)=>{
    console.log(`DB CONNECTED TWO ${name}`)
})("prajjawal")
// unnamed iffi