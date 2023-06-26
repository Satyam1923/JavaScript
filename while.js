const prompt=require("prompt-sync")({sigint:true});
let n = prompt("enter a number : ")
n = Number.parseInt(n);
while(n){
    console.log(n);
    n--;
}