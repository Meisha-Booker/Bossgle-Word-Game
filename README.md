# Bossgle

Specifications

These are the basic specs for Bossggle, broken into 5 stages. If you complete these specs, try taking on some of the Stretch specs.

Stage 1

 Repo is created on GitHub.
 The site looks the same as in the mockups (except without the same words/letters/points - those are just placeholders).
 Your repo includes the files: index.html, main.css, and bossggle.js.
Stage 2

 Clicking on a letter changes its color to orange.
 Clicking on a letter adds it to the word.
 The word is updated with each new letter.
Stage 3

 Pressing the “Submit” button submits the word for points.
 Pressing the “Clear” button clears the word and all selected letters.
 Pressing the “Reset” button clears the word, all selected letters, and generates a new set of letters on the board.
Stage 4

 Submitted words are added to the left in reverse chronological order (last word submitted is at the top).
 Submitted words are awarded 9 points per letter.
 Any word / combination of characters is allowed. There is no validation.
 Players start with a score of 0.
 The score is updated after each word is submitted.
Stage 5

 There is a link to the source code (your GitHub repo) in the bottom left.
 Repo is published as a GitHub pages site.
 The artifact produced is properly licensed, preferably with the MIT license.
Mockups

Try to mimic the following mockups as closely as you can. Note that some of the features in the mockups are part of the stretch specs - you don’t have to build those yet.

New Game

bossggle-mockup-blank

Mid Game

bossggle-mockup-mid-game

with comments

bossggle-mockup-mid-game-with-comments

Stretch

If you complete all of the specs listed above (the checkboxes), there’s no reason to stop there! Try building more advanced features with these stretch specs.

 Game uses real Boggle rules:
 Letters must all be connected (second letter must be a “neighbor” of the first letter, third letter must be a “neighbor” of the second, and so on).
 Words must be at least 3 letters long.
 Game is timed: players have 1 minute to make as many words as possible.
 Words must be real English words; non-English words don’t earn points. See Validating Words section for more information.
