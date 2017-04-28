$(document).ready(function(){
    var alwaysArray = []
    var letter;
    var finalWord;
    var wordScore;
    var totalScore = 0;
    var word = [];
    var idElement;
  $(".flex-box").each(function(index, box) {
    $(box).text(addLetter())
  })
  let ids = []
  $(".flex-box").click(function(){
    ids.push(this.id)
    idElement= document.getElementById(this.id);
    if (!idElement.disabled){
      var letter = idElement.innerHTML;
      finalWord += letter;

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

    $('.unfinished-word').html(finalWord);
    idElement.disabled = true;
  }
})

  //Submits word to the scoreboard
  $(".sub-button").click(function() {
    console.log(idElement);
    if (finalWord.length > 2) {
    $(".flex-box").css("background","moccasin");
    //Creates new paragraph element to append to words section
    var newWord = document.createElement('p')
    newWord.innerText = finalWord + " " + wordScore
    document.querySelector('.words').appendChild(newWord);
    $('.words').prepend(newWord);

    //Adds total score to scoreboard
    $(".score-right").each(function() {
        totalScore += wordScore;
        $(this).text(totalScore);
    });
    word = []
    console.log(alwaysArray);
    while (ids.length > 0) {
      let currentId = ids.shift()
      document.querySelector('#'+ currentId).disabled = false;
    }
    ids = [];
    word = [];
    ids.disabled = false;
  }
  else {
      alert("Please submit three letters or more!")
  }
})

    //Clears the box color and removes current word

  $(".clear-button").click(function() {
    $(".flex-box").css("background","moccasin");
    $('.unfinished-word').remove();
  })

  $(".reset-button").click(function() {
      location.reload();
    })
  })
//})


var letters="ABCDEFGHIJKLMNOPQRSTUVWXYZ"

function addLetter() {
  var index= Math.floor(Math.random() * letters.length) +1;
  return letters[index -1];
}

new messages
