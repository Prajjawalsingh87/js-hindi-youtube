const coding = ["js", "ruby", "java", "python"];
// coding.forEach(function (val) {
//     console.log(val);
// })
// coding.forEach(val => {
//     console.log(val);
// });
// function print(val){
//     console.log(val)
// }
// coding.forEach(print)
// coding.forEach((item,indx,arr)=>{
// console.log(item,indx,arr)
// })

const mycoding =[
    { 
        languagename:"javascript",
        languagefilename:"js"
    },
    { 
        languagename:"python",
        languagefilename:"py"
    },
    { 
        languagename:"c++",
        languagefilename:"cpp"
    }
]
mycoding.forEach((item)=>{
     console.log(item.languagefilename);
})
