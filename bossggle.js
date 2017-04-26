$(document).ready(function(){

  $(".flex-box").each(function(index, box){
    $(box).text(addLetter())
  })

  $(".flex-box").click(function(){
    $(this).css("background","orange");
    var letter = $(this).text()
    word.push(letter);
    var finalWord= word.join("");
    $('.unfinished-word').text(finalWord);
    $(".sub-button").click(function() {
      $('.words').text(finalWord);
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
