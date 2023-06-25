const prompt=require("prompt-sync")({sigint:true});
let a = prompt("enter 1 or 0");
a = Number.parseInt(a);
console.log("you entered"+(a>0)?"1":"0");