$(document).ready(function () {

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

    // When a new button is added
    $("#add-emotion").on("click", function (event) {
        event.preventDefault();
        var emotion = $("#emotion-input").val().trim();
        buttonTitles.push(emotion);
        renderButtons();
    });

    // Render the HTML to display the appropriate content (API Code)
    function displayGifs() {
        var emotion = $(this).attr("data-name");
        var queryURL = "http://api.giphy.com/v1/gifs/search?q=" + emotion + "&api_key=Z7UtmkF42WDI9goZAOmkReUnPqsptynl&limit=20";

        //AJAX Call
        $.ajax({
            url: queryURL,
            method: "GET"
        }).then(function (response) {
            //First emptys the div container
            $("#gifs-appear-here").empty();
            //Variable to hold the response data
            var results = response.data;

            for (var i = 0; i < results.length; i++) {
                //Creating the div to hold the gif information
                var gifDiv = $("<div class='gif'>");

                //Displaying the Rating of the gif
                var p = $("<p>").text("Rating: " + results[i].rating);

                //Displaying the Image of the gif
                var gifImage = $("<img>");
                gifImage.addClass("image-fluid");
                gifImage.attr("src", results[i].images.fixed_height.url);

                // Appending the paragraph and image tag to the animalDiv
                gifDiv.append(p);
                gifDiv.append(gifImage); 
                
                //Add the selected gifs to the html div
                $("#gifs-appear-here").append(gifDiv);
            };
        });

    };


    ////////////////////////////// Working Code ///////////////////////////////

    // Adding a click event listener to all elements with a class of "emotion-btn"
    $(document).on("click", ".emotion-btn", displayGifs);

    // Calling the renderButtons function to display the intial buttons
    renderButtons();

});
