//   create final element and append to display the full content in HTML
let resultElement = document.querySelector('#movies');

// Calling the movie result api

const xhr = new XMLHttpRequest();
xhr.responseType = 'json';
xhr.onreadystatechange = () => {
  if (xhr.readyState === XMLHttpRequest.DONE) {
    // function call to process api result
    resultElement.innerHTML = xhr.response
      .map(data => renderHtml(data))
      .join('\n');
    console.log(xhr.response.map(data => renderHtml(data)).join('\n'));
  }
};
// url to call api
xhr.open('GET', 'https://salty-sea-40504.herokuapp.com/movies');
xhr.send();

// mapping response to respective HTML elements
renderHtml = responseData => {
  return `<div class="movie">
    <h2 class="movie-title" id="movietitle">${responseData.title}</h2>
    <img class="movie-poster" id="movieposter" src="${
      responseData.poster
    }" alt="hero and heroine">
    <ul class="movie-info" id="movieinfo">
        <li class="movie-show-time" id=movieshowtime><a class="movie-more-info" id="moviemoreinfo" href="#">${
          responseData.sessions[0].sessionDateTime[0]
        }</a></li>
        <li class="movie-language" id="movielanguage">${
          responseData.language
        }</li>
    </ul>
</div>`;
};
