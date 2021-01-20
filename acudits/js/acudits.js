
var url = "http://api.icndb.com/jokes/random";
var inici = true;
var msg1 = "Aquí tens l'acudit:";
var msg2 = "Aquí tens un altre:";

$(document).ready(function () {
    $('#btnAcudit').click(function (e) { 
        e.preventDefault();
        userFech();
    });
});

function userGet(){
    $.getJSON(url,
        function (data, textStatus, jqXHR) {
            $('#hInfo').text('');
            $('#pText').text('');
            if (textStatus==='success'){
                var msg = (inici) ? mag1 : msg2;
                inici = false;
                $('#hInfo').text(msg);
                $('#pText').text(data.value.joke);
            }else{
                $('#hInfo').text('Vaja, no he trobat cap!');
            }
        }
    );

}

function userFech(){
    $('#hInfo').text('');
    $('#pText').text('');
    fetch(url)
    .then(function(response) {
        return response.json();
    })
    .then(function(data) {
        if (data.type==='success'){
            var msg = (inici) ? msg1 : msg2;
            inici = false;
            $('#hInfo').text(msg);
            $('#pText').text(data.value.joke);
        }else{
            $('#hInfo').text('Vaja, no he trobat cap!');
        }
    })
    .catch(function(err) {
        $('#hInfo').text('Hi ha problemes!');
        console.error(err);
    });
}