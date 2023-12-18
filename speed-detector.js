//Get speed input from user
const speed = parseInt(prompt("Enter the speed of the car (km/h): "));

// set speed limit
const limit = 70;

//calculate number of points
let points = 0;
if (speed > limit) {
    const over = speed - limit;
    points = Math.floor(over / 5);
}

// print output
if (points <= 12){
    console.log(`Points: ${points}`);
} else {
    console.log("License suspended");
}