/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// quotes can be found in js/quotes.js


/*
function creates a random number from 0 - length of the quotes array.
the function uses that number to pick an index number of the array and
the object associated is returned
*/
function getRandomQuote() {
  var randomNum = Math.floor(Math.random() * quotes.length);
  //console.log(randomNum);
  randomQuote = quotes[randomNum];
  return randomQuote
  }

//console.log(getRandomQuote());

// function that creates html and returns it
function html() {
  var newQuote = getRandomQuote();
  var pEnd = "</p>"
  var spEnd = "</span>"
  var html = "<p class='quote'>" + newQuote.quote + pEnd;
  html += "<p class='source'>" + newQuote.source;
  if (newQuote.citation.length > 0) {
    html += "<span class='citation'>" + newQuote.citation + spEnd;
  }
  if (newQuote.year.length > 0) {
    html += "<span class='year'>" + newQuote.year + spEnd;
  }
  return html
}

// function gets div with id 'quote-box' and creates the html with the
// getRandomQuote function
function printQuote() {
  var newQuote = getRandomQuote();
  document.getElementById("quote-box").innerHTML = html(newQuote);
}

// calls the printQuote function once to display new quote on page load
printQuote();

// prints a new quote everytime the "show another quote" button is clicked
document.getElementById('loadQuote').addEventListener("click", printQuote, false);
