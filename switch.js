const prompt=require("prompt-sync")({sigint:true});
let a = prompt("Enter number between 1 to 3 ? ")
a = Number.parseInt(a)
switch(a){
    case 1:
        console.log("You entered number 1")
        break;
    case 2:
        console.log("Your entered number 2");
        break;
    case 3:
        console.log("You entered number 3");
        break;
    default:
        console.log("Invalid input");
        break;
}