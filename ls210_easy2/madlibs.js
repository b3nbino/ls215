/**
 * Madlibs is a simple game where you create a story template with "blanks" for words.
 * You, or another player, then construct a list of words and place them into the story,
 * creating an often silly or funny story as a result.
 *
 * Create a simple madlib program that prompts for a noun, a verb, an adverb, and an adjective,
 * and injects them into a story that you create.
 *
 * Data Structures:
 *  Input: User input strings
 *  Output: String
 *  In-between: None
 *
 * Algorithm:
 *  1. Gather user input
 *  1.5? Validate input
 *  2. Log string
 */

function madlib() {
  let rlsync = require("readline-sync");
  let noun = rlsync.question("Enter a noun: ");
  let verb = rlsync.question("Enter a verb: ");
  let adjective = rlsync.question("Enter an adjective: ");
  let adverb = rlsync.question("Enter an adverb: ");

  console.log(
    `The Mayor haneded the ${noun} to the superhero. The superhero ${
      verb + "ed"
    } away in his ${adjective} suit ${adverb}.`
  );
}

madlib();

// Enter a noun: dog
// Enter a verb: walk
// Enter an adjective: blue
// Enter an adverb: quickly

// // console output
// Do you walk your blue dog quickly? That's hilarious!
