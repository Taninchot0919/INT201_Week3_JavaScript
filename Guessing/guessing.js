//Math.floor เป็นการปัดเศษ
let randnum = Math.floor((Math.random() * 10) + 1);
let yournum = parseInt(prompt("Enter Your Guessing Number 1-10"));
if (yournum == randnum){
    document.write("Congratulation");
} else if (yournum < 1 || yournum > 10) {
    document.write("Please Enter Number 1-10");
} else if (randnum < yournum) {
    document.write("Too high,The number is " + randnum);
} else {
    document.write("Too low, The number is " + randnum);
}