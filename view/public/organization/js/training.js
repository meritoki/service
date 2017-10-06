$(document).ready(function () {
    $("input[type='button'].button#start").click(function (event) {
        var u = $("input[name='url']").val();
        var value = $(this).val();
        var idEmployee = $("input[name='id-employee']").val();
        var value = $(this).val();
        console.log('start');
        var path = "/employee/" + idEmployee + "/training";
        $.ajax({
            type: 'POST',
            url: u + path,
            dataType: "json",
            data: {
                start: true
            },
            xhrFields: {
                withCredentials: true
            },
            success: function (data) {
                if (data.status === 200) {
                    alert("Success");
                    $('#start').toggleClass('visible', false);
                    $('#start').toggleClass('hidden', true);
                    $('#stop').toggleClass('visible', true);
                    $('#stop').toggleClass('hidden', false);
                }
            }
        });
    });
});
