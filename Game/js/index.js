var myCards = document.getElementById('container');
var resultsArray = [];
var counter = 0;
var text = document.getElementById('text');
var seconds = 00;
var tens = 00;
var appendTens = document.getElementById("tens");
var appendSeconds = document.getElementById("seconds");
var Interval ;
var pause = false;


var images = [
    'chicken',
    'cow',
    'dog',
    'fox',
    'monkey',
];

function message() {
var s = document.getElementById('selectId');
var selectId = s.options[s.selectedIndex].value;
if(selectId == '1') {
     var  testtt = images.push("qwew", "вфыыфв", "ывфвыфв")
   } else if(selectId == '2') {
       var testt = images.push("qwewq", "выввыв")
       alert("it equals microphone")
   } else if(selectId == '3') {
      images.push("qwewq")
   }
}

message();

myForm.onclick = function() {
    if(add) {
        var pu = images.push("wew","wew");
        add = false;
    } else {
        var pu = images.push("wew","wew");
        add  = true;
    }
    return false;
}


var pauseButton = document.getElementById('pause');
var timers = [];
var clone = images.slice(0);
var cards = images.concat(clone);


function shuffle(o){
    var m = o.length, t, i;
          while (m) {
            i = Math.floor(Math.random() * m--);
            t = o[m];
            o[m] = o[i];
            o[i] = t;
          }
          return o;
        }


shuffle(cards);

for (var i = 0; i < cards.length; i++) {
  card = document.createElement('div');
  card.dataset.item = cards[i];
  card.dataset.view = "card";
  myCards.appendChild(card);

  card.onclick = function () {

    if (this.className != 'flipped' && this.className != 'correct'){
        this.className = 'flipped';
        var result = this.dataset.item;
        resultsArray.push(result);
        clearInterval(Interval);
        Interval = setInterval(startTimer, 10);
    }

    if (resultsArray.length > 1) {

if (resultsArray[0] === resultsArray[1]) {
        check("correct");
        counter ++;
        win();
        resultsArray = [];
      } else {
        check("reverse");
        resultsArray = [];
      }
    }
  }
};


var check = function(className) {

  var x = document.getElementsByClassName("flipped");
  setTimeout(function() {

    for(var i = (x.length - 1); i >= 0; i--) {
      x[i].className = className;
    }

  },500);

}

var win = function () {

  if(counter === 5) {
    clearInterval(Interval);
    text.innerHTML = "Вы играли " + seconds + ":" + tens;
  }

}

function startTimer () {
  tens++;

  if(tens < 9){
    appendTens.innerHTML = "0" + tens;
  }

  if (tens > 9){
    appendTens.innerHTML = tens;

  }

  if (tens > 99) {
    seconds++;
    appendSeconds.innerHTML = "0" + seconds;
    tens = 0;
    appendTens.innerHTML = "0" + 0;
  }

  if (seconds > 9){
    appendSeconds.innerHTML = seconds;
  }
}

	pauseButton.onclick = function() {
		if(pause) {
			myCards.classList.remove("paused");
			pause = false;
            clearInterval(Interval);
		} else {
			myCards.classList.add("paused");
			pause = true;
            clearInterval(Interval);
		}
		return false;
	}
