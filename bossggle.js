$(document).ready(function(){
    var alwaysArray = []
    var letter;
    var finalWord;
    var wordScore;
  $(".flex-box").each(function(index, box){
    $(box).text(addLetter())
  })

  $(".flex-box").click(function(){
    $(this).css("background","orange");

    // Grab one letter and push to array.
    letter = $(this).text()
    word.push(letter);

    // Join all the letters.
    finalWord = word.join("");

    // This is the final word score.
    // Each letter is 9 points.
    wordScore = (finalWord.length * 9)
    console.log(wordScore);

    alwaysArray.push(finalWord)
    console.log(finalWord);

    $('.unfinished-word').text(finalWord);
  })

    $(".sub-button").click(function() {
      $(".flex-box").css("background","white");

      var newWord = document.createElement('p')
      newWord.innerText = finalWord + " " + wordScore
      document.querySelector('.words').appendChild(newWord);

      $('.score-right').text(wordScore);
      word = []
      console.log(alwaysArray);
      $('.unfinished-word').text();
    })

  $(".clear-button").click(function() {
    $(".flex-box").css("background","white");
    $('.unfinished-word').remove();
  })

  $(".reset-button").click(function() {
    $(".flex-box").css("background","white");
    $('.unfinished-word').detach();
    $(".flex-box").each(function(index, box) {
      $(box).text(addLetter())
    })
  })
})



var word = [];

var letters="ABCDEFGHIJKLMNOPQRSTUVWXYZ"

function addLetter() {
  var index= Math.floor(Math.random() * letters.length) +1;
  return letters[index -1];
}
