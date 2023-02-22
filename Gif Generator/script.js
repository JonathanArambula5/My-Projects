function myFunction(){

var searchTerm = document.querySelector('searchTerm').value;

fetch(
  'https://api.giphy.com/v1/gifs/search?q=' +
  searchTerm+ 
 '&api_key=ptRmQvo0nOL7SWpzgUMMsvm15TcmgbpL'
)

.then(function(response) {
  return response.json();
})
.then(function(response) {
  console.log(response.data[0]);
  var responseContainerEl = document.querySelector('#response-container');
  responseContainerEl.innerHTML = '';
  var gifImg = document.createElement('img');
  gifImg.setAttribute('src', response.data[0].images.fixed_height.url);
  responseConatinerEl.appendChild(gifing);
});
}