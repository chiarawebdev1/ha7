let recievedData = [];
let allTitleWords = [];
let suggestions = [];
const inputField = document.querySelector('input');

// Get JSON Data from server route and parse it
function getData () {
  $.get("/get-articles", function(data, status){
    return recievedData = JSON.parse(data);
  });
}

// Fill the allTitleWords Array with all the splitted words from each title
function createTitleWordsArray (array) {
  // PREFIX: 
  allTitleWords = [];

  // Split all the words
  array.forEach(element => {
    let ElementTitleWords = element.title.split(' ');
    // Push every word to the array
    ElementTitleWords.forEach(word => {
      allTitleWords.push(word.toLowerCase());
    });
  });
}

// Check if search term is found in allTitleWords
function  createSuggestionsArray(value) {
  // PREFIX: 
  suggestions = [];

  allTitleWords.forEach(word => {
    if (word.endsWith('.')) {
      word = word.slice(0, -1);
    } 
    if (word.startsWith(value) === true && word.length >= 3) {
        suggestions.push(word);
      }   
  });
}

// Render up to 5 suggestion words
function displaySuggestions (array, value) {
  const suggest = document.querySelector('#suggestions');
  if (value !== '') {
    suggest.innerHTML = `
      <ul>
        <li><span class="sugg-span" onclick="searchIt(this)">${typeof array[0] == 'undefined' ? '' : array[0] }</span></li>
        <li><span class="sugg-span" onclick="searchIt(this)">${typeof array[1] == 'undefined' ? '' : array[1] }</span></li>
        <li><span class="sugg-span" onclick="searchIt(this)">${typeof array[2] == 'undefined' ? '' : array[2] }</span></li>
        <li><span class="sugg-span" onclick="searchIt(this)">${typeof array[3] == 'undefined' ? '' : array[3] }</span></li>
        <li><span class="sugg-span" onclick="searchIt(this)">${typeof array[4] == 'undefined' ? '' : array[4] }</span></li>
      </ul>
    `;
  } else {
    suggest.innerHTML = '';
  }
}

// Submit form with clicked searchTerm
function searchIt (target) {
  let searchTerm = target.textContent;
  inputField.value = searchTerm;
  document.querySelector('#search-form').submit();
}

// Start suggestions
function inputKeyupEvent (){
  const searchValue = inputField.value.toLowerCase();
  // ERROR: recievedData is undefined on first call
  getData();
  createTitleWordsArray(recievedData);
  createSuggestionsArray(searchValue);
  displaySuggestions(suggestions, searchValue);
}

// Eventlistener for input field
inputField.addEventListener("keyup", inputKeyupEvent);