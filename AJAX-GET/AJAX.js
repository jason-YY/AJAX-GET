let words = ['unique', 'uncanny', 'pique', 'oxymoron', 'guise'];
console.log(words.every(words => words.length > 5));


console.log(words.some(function() {
    return words.length < 6;
  }));

  console.log(words.some(function(word) {
    return word.length < 6;
  }));
 
  let words = ['unique', 'uncanny', 'pique', 'oxymoron', 'guise'];

// Something is missing in the method call below

console.log(words.some(function(word) {
  return word.length < 6;
}));

// Use filter to create a new array

let interestingWords = words.filter(word => word.length > 5);

// Make sure to uncomment the code below and fix the incorrect code before running it

console.log(interestingWords.every(word =>  word.length > 5      ));



//AJAX
// Include data for accessing Google APIs

const apiKey = 'AIzaSyBsTWaGwGjPH4GRDwVD6nGZLDOF7CL6JVI';
const url = 'https://www.googleapis.com/urlshortener/v1/url'
const projection = 'FULL';

// Some page elements

const $inputField = $('#input');
const $expandButton = $('#expand');
const $shortenButton = $('#shorten');
const $responseField = $('#responseField');

// AJAX functions

function expandUrl() {
  const urlToExpand = url + '?key=' + apiKey +
'&shortUrl=' + $inputField.val();
  const xhr = new XMLHttpRequest;
  xhr.responseType = 'json';
  xhr.onreadystatechange = function(){
    if (xhr.readyState === XMLHttpRequest.DONE) {
  console.log(xhr.response);
      $responseField.append('<p>Your expanded url is: </p><p>' + xhr.response.longUrl + '</p>');
}
}
  xhr.open('GET', urlToExpand);
  xhr.send()
}

function shortenUrl() {

}

function expand() {
  $responseField.empty();
  expandUrl();
  return false;
}

function shorten() {
  $responseField.empty();
  shortenUrl();
  return false;
}

// Call functions on submit

$expandButton.click(expand);
$shortenButton.click(shorten);