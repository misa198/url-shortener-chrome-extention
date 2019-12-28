const accessToken = "YOUR_TOKEN_KEY"

$(document).ready(() => {
    $("#creat").click(() => {
        let urlRes = $("#input").val();
        var params = {
            "long_url" : urlRes           
        };

        $.ajax({
            url: "https://api-ssl.bitly.com/v4/shorten",
            cache: false,
            dataType: "json",
            method: "POST",
            contentType: "application/json",
            beforeSend: function (xhr) {
                xhr.setRequestHeader("Authorization", "Bearer " + accessToken);
            },
            data: JSON.stringify(params)
        })
        .done(function (data) {
            $("#input-result").val(data.link);
        })
        .fail(function (err) {
            $("#input-result").val("Your URL is not valid");
        });
    });
});

$("#copy").click(() => {
    var copyText = document.getElementById("input-result");
    copyText.select();
    copyText.setSelectionRange(0, 99999)
    document.execCommand("copy");
    $("#copy-img").replaceWith(
        '<img id="copy-img" src="./icons/tick.png" alt="copy">'
    );
    setTimeout(() => {
        $("#copy-img").replaceWith(
            '<img id="copy-img" src="./icons/copy.png" alt="copy">'
        );
    }, 1500)
});