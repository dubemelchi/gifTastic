$(document).ready(function(){

// initial array of gifs:
var gifs = ["dog","cat"];

// function to re-render the html to display content:
function displayGifs(){

  var gifs = $(this).attr("data-name");
  var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + "&api_key=bfSM6gDpQPTtJZvy6MHqRxjOd7aOKkzw&limit=10";

  $.ajax({
    url: queryURL,
    method: "GET"
  }).then(function(response) {

    var gifDiv = $("<div class='gifs'>");

    var rating = response.rated;

    var pRating = $("<p>").text("Rating: " + rating);

    gifDiv.append(pRating);
    
  })

}



})