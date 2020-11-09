var lang = "en";
function callAPI() {
    $('#btn_generate').hide(200);
    $('#btn_toggle').hide(200);
    $('#btn_download').hide(200);

    $('#quote_result').text("Loading...");
    $('#author_result').text("");

    fetch('https://programming-quotes-api.herokuapp.com/quotes/random/lang/' + lang)
        .then(
            function (response) {
                response.json().then(function (data) {
                    $('#btn_generate').show(200);
                    $('#btn_toggle').show(200);
                    $('#btn_download').show(200);

                    if (lang == "en") {
                        $('#quote_result').text("\"" + data.en + "\"");
                    } else {
                        $('#quote_result').text("\"" + data.sr + "\"");
                    }

                    $('#author_result').text("- " + data.author);
                    $('#image_name').text(data.author);
                });
            }
        )
        .catch(function (err) {
            console.log('Fetch Error :-S', err);
        });
}
callAPI();