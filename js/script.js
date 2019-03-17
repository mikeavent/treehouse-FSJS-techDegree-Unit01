/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// quotes can be found in js/quotes.js


/*
function creates a random number from 0 - 9 and returns
an object assosiated with the index number of the array is randomaly chosen
the object is returned
*/
function getRandomQuote() {
  var randomNum = Math.floor(Math.random() * 10);
  randomQuote = quotes[randomNum];
  return randomQuote
  }

//console.log(getRandomQuote());

/*
function which creates DOM Elements with the random quote, source and if
available the citation and year which are use a conditional statement which
bases it's decision on whether or not it has any characters.
*/

function printQuote() {
  var newQuote = getRandomQuote();
  var element = document.getElementById("quote-box").getElementsByClassName("quote")[0];
  element.innerHTML = newQuote.quote;
  var element = document.getElementById("quote-box").getElementsByClassName("source")[0];
  element.innerHTML = newQuote.source;
    if (newQuote.citation.length > 0) {
      var span1 = document.createElement('span');
      var insidePara = document.getElementById("quote-box").getElementsByTagName("p")[1];
      insidePara.appendChild(span1).setAttribute("class", "citation");
      element = document.getElementsByTagName("span")[0];
      element.innerText = newQuote.citation;
    }
    if (newQuote.year.length > 0) {
      var span2 = document.createElement('span');
      insidePara.appendChild(span2).setAttribute("class", "year");
      element = document.getElementsByTagName("span")[1];
      element.innerText = newQuote.year;
    }
}

document.getElementById('loadQuote').addEventListener("click", printQuote, false);
