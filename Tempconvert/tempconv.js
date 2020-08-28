let type = prompt("Type C for Celsius , F for Fahrenheit");
let temp = parseFloat(prompt("Enter Your Temp "));
let c;
let f;
document.write("Your source temperature in : " + type.toUpperCase() + "<br/>");
document.write("Your temperature is " + temp + "<br/>");
if (type.toLowerCase() == "c") {
    f = temp * 9 / 5 + 32;
    temp = f;
} else if (type.toLowerCase() == "f") {
    c = (temp - 32) * 5 / 9;
    temp = c;
}
document.write("Temperature in " + type.toUpperCase() + " : " + temp + "<br/>");