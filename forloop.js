const prompt=require("prompt-sync")({sigint:true});
let sum = 0;
let n = prompt("Enter value of n ");
for(let i =1;i<=n;i++){
    sum+=i;
}
console.log("Sum of your n natural number is : "+sum)
console.log(i);
// let obj={
//     harry:90,
//     shubh:45,
//     shivika:56,
//     rititka:57,
//     shiv:23
// }
// for(let a of "Harry"){
//     console.log(a)
// }