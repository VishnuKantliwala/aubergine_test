
$('#btn_generate').click(() => {
    callAPI();
});

$('#btn_toggle').click(() => {

    if (lang == "en") {
        lang = "sr";
    } else {
        lang = "en";
    }

    callAPI();
});