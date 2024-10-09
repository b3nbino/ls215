/**
 * Build a program that asks the user to enter the length and width of a room in meters,
 * and then logs the area of the room to the console in both square meters and square feet.
 *
 * Note: 1 square meter == 10.7639 square feet
 *
 * Do not worry about validating the input at this time. Use the readlineSync.prompt method to collect user input.
 *
 * Example output:
 *
 * Enter the length of the room in meters:
 * 10
 * Enter the width of the room in meters:
 * 7
 * The area of the room is 70.00 square meters (753.47 square feet).
 *
 * - User must be asked to enter the length and width of the room separately
 * - The program logs the AREA of the room based on the user inputs
 *   - The area should be logged in both square METERS and square FEET
 * - The output should follow the same format as the example.
 *
 * Questions:
 * - Should the user be able to input things other than positive integers?
 *
 * Data Structures:
 * Input: Two user inputted strings that represent integers
 * Output: A string logged to the console containing the area in both square meters and square feet
 * In between: None
 *
 * Algorithm:
 * 1. Prompt the user for the length, then the width
 * 2. Calculate and format the area in meters
 * 3. Calculate and format the area in feet
 * 4. Log the result
 *
 */

function roomArea() {
  const SQUARE_METERS_TO_SQUARE_FEET = 10.7639;
  let rlsync = require("readline-sync");
  let length = rlsync.question("Enter the length of the room in meters: ");
  let width = rlsync.question("Enter the width of the room in meters: ");
  let areaInMeters = (Number(width) * Number(length)).toFixed(2);
  let areaInFeet = (areaInMeters * SQUARE_METERS_TO_SQUARE_FEET).toFixed(2);

  console.log(
    `The area of the room is ${areaInMeters} square meters (${areaInFeet} square feet).`
  );
}

roomArea(); //The area of the room is 70.00 square meters (753.47 square feet).
