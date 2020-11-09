$(document).ready(function () {
    var element = $("#download_div"); // global variable
    var getCanvas; // global variable

    $("#btn_download").on('click', function () {


        var container = $("#download_div")[0]; // full page 
        html2canvas(container).then(function (canvas) {
            var link = document.createElement("a");
            document.body.appendChild(link);
            link.download = $('#image_name').text() + ".png";
            link.href = canvas.toDataURL("image/png");
            link.target = '_blank';
            link.click();
        });

    });

});