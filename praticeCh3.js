const prompt=require("prompt-sync")({sigint:true});
let marks = {
    harry:90,
    satyam:85,
    shubham:9,
    lovish:56,
    monika:4
}
//Problem 1
for(let i=0;i<Object.keys(marks).length;i++){
    console.log("the marks of "+Object.keys(marks)[i]+" are "+ marks[Object.keys(marks)[i]]);
}

//Problem 2
for(let key in marks){
    console.log("marks of "+key+" is "+marks[key])
}

//Problem 3
let cn = 4;
let i ;
while(i!=cn){
i= prompt("Enter a number ? ");}
console.log("you have entered a correct number")

//Problem 4
const mean =(a,b,c,d)=>{
    return (a+b+c+d)/4
}
console.log(mean(4,5,6,7))