$(document).ready(function() {

    //Variables

    var buttonTitles = ["yay", "annoyed", "omg", "devestated", "whatever", "lol", "happy", "bye", "angry", "desperate"];
    var buttonHTML = '';
    var gifs = [];



    ////////////////////////////// Functions ///////////////////////////////


  // Display Buttons
    function renderButtons() {
        $("#buttons-view").empty();

        for (var i = 0; i < buttonTitles.length; i++) {
            var a = $("<button>");
            a.addClass("emotion");
            a.attr("data-name", movies[i]);
            a.text(movies[i]);
            $("#buttons-view").append(a);
        }
    };

    // When a button is clicked
    $("#add-movie").on("click", function(event) {
        event.preventDefault();
        var emotion = $("#emotion-input").val().trim();
        buttonTitles.push(emotion);
        renderButtons();
    });

    // Re-render the HTML to display the appropriate content (API Code)
    function displayGifs() {
        var emotion = $(this).attr("data-name");
        var queryURL = "http://api.giphy.com/v1/gifs/search?q=" + emotion + "&api_key=Z7UtmkF42WDI9goZAOmkReUnPqsptynl&limit=20&rating=pg";

        //AJAX Call
        $.ajax({
            url: queryURL,
            method: "GET"
          }).then(function(response) {

            console.log(queryURL);
          });
    };

    
    ////////////////////////////// Working Code ///////////////////////////////

    //Call the createButtons function
    createButtons();

    /////// Respond to the Click Events ///////

    //Event Listener for button clicked
    

    /////// Display the Gif contents from the Click Event ///////


    /////// Add Button  ///////


});
