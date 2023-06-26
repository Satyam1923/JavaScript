const prompt=require("prompt-sync")({sigint:true});
let  a = prompt("Enter a number ");
a = Number.parseInt(a);
if(a%2==0){
    console.log("It is an even number "+ a);
}
else {
    console.log("It is an odd number "+a);
}