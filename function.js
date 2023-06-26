const prompt=require("prompt-sync")({sigint:true});
let a = 1;
let b= 2;
let c = 3;

function onePlusAvg(a,b,c){
    return Math.round(1+(a+b+c)/2);
}

console.log("one plus average of a,b,c "+ onePlusAvg(a,b,c))