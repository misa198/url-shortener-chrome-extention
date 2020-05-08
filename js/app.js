const baseURL = 'https://www.misalink.tk';

window.onload = function () {
    document.getElementById("url").focus();
}

const sendReq = () => {
    $("#input-result").val("Creating...");
    const url = $('#url').val();
    const password = $('#password').val();
    const body = {};
    if (password !== '') body.password = password;
    body.link = url;

    axios.post(`${baseURL}/document/encode`, body)
    .then(res => {
        if (res.data.message) $('#result').val('URL is invalid');
        if (res.data.code) $('#result').val(`${baseURL}/${res.data.code}`);
    });
}

$(document).ready(() => {
    $('#form').on('submit', (e) => {
        e.preventDefault();
        sendReq();
    });
});

$("#copy-button").click(() => {
    var copyText = document.getElementById("result");
    copyText.select();
    copyText.setSelectionRange(0, 99999)
    document.execCommand("copy");
});
