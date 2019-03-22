/*
creates a random number from 0 - length of the quotes array.
the function uses that number to pick an index number of the array and
the object associated is returned
*/
const getRandomQuote = () => {
  var randomNum = Math.floor(Math.random() * quotes.length);
  randomQuote = quotes[randomNum];
  return randomQuote
  }

// function that creates html and returns it
const html = () => {
  var newQuote = getRandomQuote();
  var pEnd = "</p>"
  var spEnd = "</span>"
  var html = "<p class='quote'>" + newQuote.quote + pEnd;
  html += "<p class='source'>" + newQuote.source;
  if (newQuote.citation.length > 0) {
    html += "<span class='citation'>" + newQuote.citation + spEnd;
  }
  if (newQuote.year != null) {
    html += "<span class='year'>" + newQuote.year + spEnd;
  }
  // first if statement incase the tag key wasn't defined
  if (typeof newQuote.tag !== 'undefined') {
    if (newQuote.tag.length > 0 ) {
      html += "<span class='year'>" + newQuote.tag + spEnd;
    }
  }
  return html
}

// gets div with id 'quote-box' and creates the html with the getRandomQuote function
const printQuote = () => {
  var newQuote = getRandomQuote();
  document.getElementById("quote-box").innerHTML = html(newQuote);
}

// calls the printQuote function once to display new quote on page load
printQuote();

// random hex number
const randomColour = () => {
  var randomNum = Math.floor( Math.random() * 16777215).toString(16);
  return randomNum;
}

// dom style with # and random hex number
const changeColour = () => {
  var newColour = randomColour();
  document.body.style.backgroundColor = '#' + newColour;
}

// prints a new quote everytime the "show another quote" button is clicked
document.getElementById('loadQuote').addEventListener("click", printQuote, false);

// shows new colour everytime the "show another quote" button is clicked
document.getElementById('loadQuote').addEventListener("click", changeColour, false);

// 20 second timer
const timedQuote = () => {
  var printTimer = setInterval(printQuote, 20000);
  var colourTimer = setInterval(changeColour, 20000);
}

// call the timer to change quote and colour
timedQuote();
