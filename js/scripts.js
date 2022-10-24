//capture the text as an array

function getSentence(event) {
  event.preventDefault();
  const userInput = document.getElementById('sentences').value;
  console.log(userInput);
  let words = userInput.split(" ");
  console.log(words);
};

window.addEventListener('load', function() {
  document.querySelector('form').addEventListener('submit',  getSentence());
})