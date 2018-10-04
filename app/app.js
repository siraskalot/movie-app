// @gokuvinoth 03/Oct/2018
// to retrive the movie list from api and display in the app.html
//------ improments required to reuse functions in creating elements

// Calling the movie result api

const xhr = new XMLHttpRequest();
xhr.responseType = "json";
xhr.onreadystatechange = () => {
  if (xhr.readyState === XMLHttpRequest.DONE) {
    console.log(xhr.response);
    // function call to process api result
    displayResult(xhr.response);
  }
};
// url to call api
xhr.open("GET", "https://salty-sea-40504.herokuapp.com/movies");
xhr.send();

displayResult = response => {
  let responseData = response;
  console.log(responseData[0]);

  // creating a paren div Element
  let movieElement = document.createElement("div");
  movieElement.setAttribute("class", "movie");

  //   looping to create elements for number of items returned
  for (let i = 0; i < responseData.length; i++) {
    // creating a h2 Element
    let movieTitle = document.createElement("h2");
    movieTitle.setAttribute("class", "movie-title");
    movieTitle.setAttribute("id", "movietitle");
    movieTitle.innerHTML = responseData[i].title;
    // append the final h2 to parent div Element
    movieElement.appendChild(movieTitle);
    console.log(movieTitle);

    // create img element
    let movieImage = document.createElement("img");
    movieImage.setAttribute("class", "movie-poster");
    movieImage.setAttribute("id", "movieposter");
    movieImage.setAttribute("src", responseData[i].poster);
    movieImage.setAttribute("alt", "hero and heroine");
    console.log(movieImage);
    // append the final image element to parent div Element
    movieElement.appendChild(movieImage);
    console.log(movieElement);

    // create a ul element for show time
    let listContainer = document.createElement("ul");
    listContainer.setAttribute("class", "movie-info");
    listContainer.setAttribute("id", "movieinfo");
    let listshowTime = document.createElement("li");
    listshowTime.setAttribute("class", "movie-show-time");
    listshowTime.setAttribute("id", "movieshowtime");
    let listshowTimeMoreInfo = document.createElement("a");
    listshowTimeMoreInfo.setAttribute("class", "movie-more-info");
    listshowTimeMoreInfo.setAttribute("id", "moviemoreinfo");
    listshowTimeMoreInfo.setAttribute("href", "#");
    listshowTimeMoreInfo.innerHTML =
      responseData[i].sessions[0].sessionDateTime[0];
    //   append the chile elements to parent div element
    listshowTime.appendChild(listshowTimeMoreInfo);
    listContainer.appendChild(listshowTime);

    // create a ul element
    let listLanguage = document.createElement("li");
    listLanguage.setAttribute("class", "movie-language");
    listLanguage.setAttribute("id", "movielanguage");
    listLanguage.innerHTML = responseData[i].language;
    listContainer.appendChild(listLanguage);
    console.log(listContainer);
    //   append the child elements to parent div element
    movieElement.appendChild(listContainer);
  }
  console.log(movieElement);

  //   create final element and append to display the full content in HTML
  let resultElement = document.querySelector("#movies");
  resultElement.appendChild(movieElement);
};
