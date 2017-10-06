$(document).ready(function () {
    $("input[name='email-username']:checkbox").click(function (event) {
        console.log('email-username');
        var email = $("input[name='email']").val();
        if (this.checked) { // check select status
            if (email !== null) {
                $("input[name='name']").val(email);
            } else {
                alert('Please provide e-mail address', 'email-alert');
                this.checked = false;
            }
        } else {
            $("input[name='name']").val(u.name);
        }
    });

    $("input[name=password-new]").on('input', function (e) {

        var passwordNew = $("input[name=password-new]").val();
        var passwordConfirm = $("input[name=password-confirm]").val();
        if (passwordNew !== '') {
            if (passwordConfirm === '') {
                $("label[name='password-message']").text('CONFIRM PENDING');
            } else {
                if (passwordNew === passwordConfirm) {
                    $("label[name='password-message']").text('MATCH');
                } else {
                    $("label[name='password-message']").text('NO MATCH');
                }
            }
        } else {
            $("label[name='password-message']").text('');
        }
    });

    $("input[name=password-confirm]").on('input', function (e) {
        var passwordNew = $("input[name=password-new]").val();
        var passwordConfirm = $("input[name=password-confirm]").val();
        if (passwordConfirm !== '') {
            if (passwordNew === passwordConfirm) {
                $("label[name='password-message']").text('MATCH');
            } else {
                $("label[name='password-message']").text('NO MATCH');
            }
        } else {
            $("label[name='password-message']").text('');
        }
    });

    $("button[name='properties-save']").click(function (event) {
        console.log('properties-save');
        var name = $("input[name='name']").val() || null;
        var email = $("input[name='email']").val() || null;
        var passwordNew = $("input[name='password-new']").val() || null;
        var passwordConfirm = $("input[name='password-confirm']").val() || null;
        var url = $("input[name='url']").val();
        var idEmployee = $("input[name='id-employee']").val();
        var properties = {};
        if (passwordNew === passwordConfirm) {
            properties.name = name;
            properties.email = email;
            properties.password = passwordNew;
            console.log(name);
            console.log(email);
            console.log(passwordNew);
            var path = "/employee/" + idEmployee + "/properties";
            $.ajax({
                type: 'POST',
                url: url + path,
                dataType: "json",
                data: {
                    properties: JSON.stringify(properties)
                },
                xhrFields: {
                    withCredentials: true
                },
                success: function (data) {
                    if (data.status == 200) {
                        alert("Saved", "queue-alert");
                    } else {
                        alert("Error", "error-alert");
                    }
                }
            });

        } else {
            alert("New and Confirm Passwords do not match ", "password-alert");
        }
    });
});