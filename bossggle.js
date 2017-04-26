$(document).ready(function(){

  $(".flex-box").each(function(index, box){
    $(box).text(addLetter())
  })

  $(".flex-box").click(function(){
    $(this).css("background","orange");
    var letter = $(this).text()
    word.push(letter);
    $('.unfinished-word').text(word.join(""))
  })

  $(".sub-button").click(function() {
    $('.words').css("color", "red");

  })
  $(".clear-button").click(function() {
    $('.unfinished-word').remove();
  })

})


var word = [];

var letters="ABCDEFGHIJKLMNOPQRSTUVWXYZ"

function addLetter() {
  var index= Math.floor(Math.random() * letters.length) +1;
  return letters[index -1];
}
