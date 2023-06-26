const prompt=require("prompt-sync")({sigint:true});
let  a = prompt("Enter a number ");
a = Number.parseInt(a);

let b ={
    c:"hello",
    d:"world"
}
if(a%2==0){
    console.log("It is an even number "+ a);
}
else {
    console.log("It is an odd number "+a);
}
console.log(b["c"]+" "+b["d"]);