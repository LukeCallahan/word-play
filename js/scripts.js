//capture the text as an array

function getSentence(event) {
  event.preventDefault();
  const userInput = document.getElementById('sentences').value;
  console.log(userInput);
  let words = userInput.split(" ");
  console.log(words[0]);
  let newArray= [];
  words.forEach(function(word) {
    
    if (word.length >= 3) {
    newArray.push(word);
    console.log(newArray);
    }
  });
  newArray.reverse();
  console.log(newArray);
  newArray.join();
  console.log(newArray);
  let h1 = document.createElement('h1');
  h1.append(newArray);
  document.body.append(h1);
  
};

window.addEventListener('load', function() {
  document.querySelector('form').addEventListener('submit',  getSentence);
})