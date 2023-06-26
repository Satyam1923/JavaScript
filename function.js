const prompt=require("prompt-sync")({sigint:true});
let a = 1;
let b= 2;
let c = 3;

function average(a,b,c){
    return (a+b+c)/2;
}

console.log("Average of a and b is ",average(a,b,c))