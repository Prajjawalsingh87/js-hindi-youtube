const myarray=[0,1,2,3,4,5]
const new1=myarray.slice(0,4);
console.log("A",myarray)
console.log(new1)
const new2=myarray.splice(0,4);
console.log("B",myarray)
console.log(new2)
// splice not only include right most range but it also take it from orignal array a
// slice only take all element from left to right excluding the rightmost element in given range and it didnot reduce original array



