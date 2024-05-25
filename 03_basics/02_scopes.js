
{ }// scope  it come when conditional statement came,loop,function like this only
if (1) {
    let a = 10;
    const b = 20;
    var c = 30;
}
//console.log(a);
//console.log(b);
//console.log(c);



// nested scope 
function one(){
    const username="prajjawal"
    function two(){
        const website="youtube"
        console.log(username)
    }
    //console.log(website);
    //two()
}
one()
if(true){
    const username="pks"
    if(username=="pks"){
        const website=" codeforces"
        //console.log(username+website)
    }
    //console.log(website)
}
//console.log(username)
//*************************************************************interesting *****************************************/
// function addone(num){
//     return num+1;
// }
// addone(5)
console.log(addone(5));
function addone(num){
    return num+1;
}
console.log(addtwo(6));// here it act as varibles and we cannt get varible before assign any value 
let addtwo=function(num){
    return num+2;
}










