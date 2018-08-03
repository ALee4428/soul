var quotes = [
  '"Be yourself. Everyone else is already taken."  -Oscar Wilde',
  '"You only live once, but if you do it right, once is enough."  -Mae West',
  '"Be the change you wish to see in the world."  -Mahatma Gandhi',
  '"If you tell the truth, you don\'t have to remember anything."  -Mark Twain',
  '"Always forgive your enemies. Nothing annoys them more."  -Oscar Wilde',
  '"Live as if you were to die tomorrow. Learn as if you were to live forever."  -Mahatma Gandhi',
  '"Courage is grace under pressure."  -Ernest Hemingway',
  '"Whoever is happy will make others happy too."  -Anne Frank',
  '"I\'ve not failed. I\'ve just found 10,000 ways that don\'t work."  -Thomas Eddison'
]

function newQuote(){
  var currentQuote = (Math.floor(Math.random() * quotes.length));
  document.getElementById("quote_box").innerHTML = quotes[currentQuote];
}
document.addEventListener('DOMContentLoaded', function() {
    newQuote();
}, false);
