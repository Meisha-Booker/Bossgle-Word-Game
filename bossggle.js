$(document).ready(function(){

  $(".flex-box").each(function(index, box){
    $(box).text(addLetter())
  })
    var alwaysArray= []
  $(".flex-box").click(function(){
    $(this).css("background","orange");

    // Grab one letter and push to array.
    var letter = $(this).text()
    word.push(letter);

    // Join all the letters.
    var finalWord= word.join("");

    // This is the final word score.
    // Each letter is 9 points.
    var wordScore= (finalWord.length * 9)
    console.log(wordScore);

    // var newArray = []
    // newArray.push([finalWord, wordScore])
    alwaysArray.push(finalWord)
    console.log(finalWord);

    $('.unfinished-word').text(finalWord);

    $(".sub-button").click(function() {
      $(".flex-box").css("background","white");

      $('.words').text(finalWord + " " + wordScore);

      $('.score-right').text(wordScore);
      word = []
      console.log(alwaysArray);

      $('.unfinished-word').text();
        // var completedWord = $('.unfinished-word').text(word.join(""));
        // $(".sub-button").click(function() {
        //   $('.words').replace(completedWord);
    })

    // $(".sub-button").click(function() {
    //   $('.words').text(finalWord);

  })

  $(".clear-button").click(function() {
    $('.unfinished-word').remove();
  })

  $(".reset-button").click(function() {
    $('.unfinished-word').remove();
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

function scoreCalculator() {

}
