const prompt=require("prompt-sync")({sigint:true});
let a = prompt("Hey what's your age? ")
a = Number.parseInt(a)
if(a>0){
    console.log("this is an valid age")
}
else 
{
    console.log("this is an invalid age")
}