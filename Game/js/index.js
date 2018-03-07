var myCards = document.getElementById('container'),
    resultsArray = [],
    result = 0,
    text = document.getElementById('text'),
    seconds = 00,
    tens = 00,
    appendTens = document.getElementById("tens"),
    appendSeconds = document.getElementById("seconds"),
    Interval ,
    pause = false;

var images = [
    'chicken',
    'cow',
    'dog',
    'fox',
    'monkey',
];

var pauseButton = document.getElementById('pause'),
    timers = [],
    clone = images.slice(0),
    cards = images.concat(clone);

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
