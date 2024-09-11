"use strict";
//
let alienColors = "green";
// write an if-else chain.
// If the alien's color is green.
// print a statment that the player just earned 5 points for shooting the alien.
if (alienColors === "green") {
    console.log("player just earned 5 points for shooting the alien.");
}
else {
    console.log("player just earned 10 points.");
}
// If the alien's color isn't green, print a statment that
// the player just earned 10 points.
alienColors = "yellow";
if (alienColors === "green") {
    console.log("player just earned 5 points for shooting the alien.");
}
else {
    console.log("player just earned 10 points.");
}
