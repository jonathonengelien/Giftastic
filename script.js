$(document).ready(function() {

    //Variables

    var buttonTitles = ["yay", "annoyed", "omg", "devestated", "whatever", "lol", "happy", "bye", "angry", "desperate"];
    var buttonHTML = '';
    var gifs = [];



    ////////////////////////////// Functions ///////////////////////////////


  // Display Buttons
    function renderButtons() {
        $("#buttons-appear-here").empty();
        console.log("I'm working!");

        for (var i = 0; i < buttonTitles.length; i++) {
            var a = $("<button>");
            a.addClass("emotion-btn");
            a.attr("data-name", buttonTitles[i]);
            a.text(buttonTitles[i]);
            $("#buttons-appear-here").append(a);
        }
    };

    // When a button is clicked
    $("#add-emotion").on("click", function(event) {
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

    // Adding a click event listener to all elements with a class of "emotion-btn"
    //$(document).on("click", ".emotion-btn", displayGifs);

    // Calling the renderButtons function to display the intial buttons
    renderButtons();

});
