$(document).ready(function(){

// initial array of gifs:
var gifs = ["meow","woof"];

console.log(gifs);

// function to re-render the html to display content:
function displayGifs(){

  var gif = $(this).attr("data-name");
  var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + gif + "&api_key=bfSM6gDpQPTtJZvy6MHqRxjOd7aOKkzw&limit=10";

  $.ajax({
    url: queryURL,
    method: "GET"
  }).then(function(response) {

    //console.log(queryURL);

    //console.log(response);
    // div to hold the gifs:
    var gifDiv = $("<div class='gif'>");

    // variable for rating:
    var rating = response.rated;

    var pRating = $("<p>").text("Rating: " + rating);

    gifDiv.append(pRating);

    var gifResults = response.data;

    var gifImage = $("<img>").attr("src", gifResults);

    //gifImage.attr("src", gifURL);

    gifDiv.append(gifImage);

    $("#gif-view").prepend(gifDiv);

  })

}

function renderButtons(){

$("#buttons-view").empty();

for (var i = 0; i < gifs.length; i++) {

  var a = $("<button>");

  a.addClass("gif-btn");

  a.attr("data-name", gifs[i]);

  a.text(gifs[i]);

  $("#buttons-view").append(a);
}

}

$("#add-gif").on("click", function(event){

event.preventDefault();

var gif = $("#gif-input").val().trim();

gifs.push(gif);

renderButtons();

})

$(document).on("click", ".gif-btn", displayGifs);


renderButtons();


})