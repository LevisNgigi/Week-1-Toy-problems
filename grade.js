function getGrad() {
    //Prompts the user to enter a mark between 0 and 100.
  let mark = parseFloat(prompt("Enter the student's mark (0-100): "));
  //Validates the input
  if (mark < 0 && mark > 100) {
    alert("Mark must be between 0 and 100");
    return;
  }
  //Prints a letter grade based on the mark
  if (mark >= 80) {
    console.log("Grade: A");
  } else if (mark >= 60 && mark < 80) {
    console.log("Grade: B");
  } else if (mark >= 49 && mark < 60) {
    console.log("Grade: C");
  } else if (mark >= 40 && mark < 50) {
    console.log("Grade: D");
  } else {
    console.log("Grade: E");
  }
}
getGrad();