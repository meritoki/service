$(document).ready(function () {

    $("input[type='button'].button#all").click(function (event) {
        console.log('all');
        var value = $(this).val();
        if (value === 'ALL') {
            $('.procedure-read').toggleClass('visible', true);
            $('.procedure-read').toggleClass('hidden', false);

            $('.procedure-write').toggleClass('visible', true);
            $('.procedure-write').toggleClass('hidden', false);

            $('.procedure-execute').toggleClass('visible', true);
            $('.procedure-execute').toggleClass('hidden', false);

            $('.li-read').css('display', 'block');
            $('.li-write').css('display', 'block');
            $('.li-execute').css('display', 'block');
        }
    });

    $("input[type='button'].button#read").click(function (event) {
        console.log('read');
        var value = $(this).val();
        if (value === 'READ') {
            $('.procedure-read').css('display', 'block');
            $('.procedure-write').css('display', 'none');
            $('.procedure-execute').css('display', 'none');
        }
    });

    $("input[type='button'].button#write").click(function (event) {
        console.log('write');
        var value = $(this).val();
        if (value === 'WRITE') {
            $('.procedure-read').css('display', 'none');
            $('.procedure-write').css('display', 'block');
            $('.procedure-execute').css('display', 'none');
        }
    });

    $("input[type='button'].button#execute").click(function (event) {
        console.log('execute');
        var value = $(this).val();
        if (value === 'EXECUTE') {
            $('.procedure-read').css('display', 'none');
            $('.procedure-write').css('display', 'none');
            $('.procedure-execute').css('display', 'block');
        }
    });

    $("input[type='button'].button#project").click(function (event) {
        console.log('execute');
        var value = $(this).val();
        if (value === 'PROJECT') {
            $('.employee').css('display', 'none');
            $('.project').css('display', 'block');
        }
    });

    $("input[type='button'].button#employee").click(function (event) {
        console.log('execute');
        var value = $(this).val();
        if (value === 'EMPLOYEE') {
            $('.project').css('display', 'none');
            $('.employee').css('display', 'block');
        }
    });

    $("input[name='projectselectall']:checkbox").click(function (event) {
        if (this.checked) { // check select status
            $("input[name='projectselect']:checkbox").each(function () {
                this.checked = true; //select all checkboxes with class "checkbox1"               
            });
        } else {
            $("input[name='projectselect']:checkbox").each(function () {
                this.checked = false; //deselect all checkboxes with class "checkbox1"                       
            });
        }
    });

    $('input[name=option]:radio').on('change', function () {
        var value = $(this).val();
        if (value === 'scale') {
            $('#instruction').toggleClass('visible', false);
            $('#instruction').toggleClass('hidden', true);

        } else if (value === 'instruction') {
            $('#instruction').toggleClass('visible', true);
            $('#instruction').toggleClass('hidden', false);
        }
    });

    $('input:radio').on('change', function () {
        var u = $("input[name='url']").val();
        var value = $(this).val();
        var idUser = $("input[name='iduser']").val();
        var idProcedure = $("input[name='idprocedure']").val();
        var idInstruction = $("input[name='" + $(this).attr("name") + "-idinstruction']").val();
        if (typeof (idInstruction) !== undefined && typeof (idProcedure) !== undefined) {
            console.log('idInstruction=' + idInstruction);
            console.log('idProcedure=' + idProcedure);
            var mean = $("input[name='" + idInstruction + "-mean']").val();
            if ((Math.round(Number(mean)) + '') !== value) {
                $("[name='" + idInstruction + "-div']").toggleClass('visible', true);
                $("[name='" + idInstruction + "-div']").toggleClass('hidden', false);
            } else {
                $("[name='" + idInstruction + "-div']").toggleClass('visible', false);
                $("[name='" + idInstruction + "-div']").toggleClass('hidden', true);
            }
            if (typeof (idUser) === 'undefined') {
                var path = "/procedure/" + idProcedure + "/instruction/" + idInstruction;
                $.ajax({
                    type: 'POST',
                    url: u + path,
                    dataType: "json",
                    data: {
                        value: value
                    },
                    xhrFields: {
                        withCredentials: true
                    },
                    success: function (data) {
                        if (data.success) {
                            if (value > -2) {
                                if (value == -1) {
                                    $("table[name='" + idInstruction + "-table']").css('background-color', 'gray');
                                } else {
                                    $("table[name='" + idInstruction + "-table']").css('background-color', 'green');
                                }
                            }
                        }
                    }
                });
            } else { //demo procedure
                if (value > -2) {
                    if (value == -1) {
                        $("table[name='" + idInstruction + "-table']").css('background-color', 'gray');
                    } else {
                        $("table[name='" + idInstruction + "-table']").css('background-color', 'green');
                    }
                }
            }
        }
    });

    $("input[type='button'].button#comment").click(function (event) {
        var u = $("input[name='url']").val();
        var idUser = $("input[name='iduser']").val();
        var idInstruction = $(this).attr("name");
        var idProcedure = $("input[name='idprocedure']").val();
        var comment = $("textarea[name='" + idInstruction + "-textarea']").val();
        if (typeof (idUser) === 'undefined') {
            if (typeof (idInstruction) !== undefined && typeof (idProcedure) !== undefined) {
                var path = "/procedure/" + idProcedure + "/instruction/" + idInstruction + "/comment";
                $.ajax({
                    type: 'POST',
                    url: u + path,
                    dataType: "json",
                    data: {
                        comment: comment
                    },
                    xhrFields: {
                        withCredentials: true
                    },
                    success: function (data) {
                        if (data.success) {
                            alert("Comment Saved", "comment-alert");
                        } else {
                            alert("Comment Save Failure", "comment-alert");
                        }
                    }
                });
            }
        } else {
            alert("Comment Saved", "comment-alert");
        }
    });

    $("input[type='button'].button#delete").click(function (event) {
        console.log('delete');
        var u = $("input[name='url']").val();
        var idProcedure = $(this).attr("name");
        var path = "/procedure/" + idProcedure
        $.ajax({
            type: 'DELETE',
            url: u + path,
            dataType: "json",
            xhrFields: {
                withCredentials: true
            },
            success: function (data) {
                if (data.status == 200) {
                    $("[name='" + idProcedure + "-procedure-execute'].procedure-execute").css('display', 'none');
                    $("[name='" + idProcedure + "-procedure-write'].procedure-write").css('display', 'none');
                }
            }
        });
    });

    $("input[type='button'].button#not-applicable").click(function (event) {
        console.log('not-applicable');
        var u = $("input[name='url']").val();
        var idProcedure = $(this).attr("name");
        var path = "/procedure/" + idProcedure
        $.ajax({
            type: "POST",
            url: u + path,
            dataType: "json",
            data: {
                "applicable": false
            },
            xhrFields: {
                "withCredentials": true
            },
            success: function (data) {
                if (data.status == 200) {
                    console.log('not-applicable 200');
                    $("[name='" + idProcedure + "-procedure-write'].procedure-write").css('background-color', 'gray');
                    $("input[type='button'].button#not-applicable").toggleClass('visible', false);
                    $("input[type='button'].button#not-applicable").toggleClass('hidden', true);
                    window.location.reload();

                }
            }
        });
    });

    $("input[type='button'].button#queue").click(function (event) {
        console.log('queue');
        var u = $("input[name='url']").val();
        var idUser = $("input[name='iduser']").val();
        var idInstruction = $(this).attr("name");
        var idProcedure = $("input[name='idprocedure']").val();
        if (typeof (idUser) === 'undefined') {
            if (typeof (idInstruction) !== undefined) {
                var path = "/queue/" + 1 + "/instruction/" + idInstruction;
                $.ajax({
                    type: 'POST',
                    url: u + path,
                    dataType: "json",
                    xhrFields: {
                        withCredentials: true
                    },
                    success: function (data) {
                        if (data.status == 200) {
                            alert("Added To Queue", "queue-alert");
                        } else {
                            alert("Add Queue Error", "error-alert");
                        }
                    }
                });
            }
        } else {
            alert("Comment Saved", "comment-alert");
        }
    });
    $("input[type='button'].button#sign").click(function (event) {
        console.log('sign');
        var u = $("input[name='url']").val();
        var idProject = $("input[name='idproject']").val();
        var idEmployee = $("input[name='idemployee']").val();
        var idProcedure = $("input[name='idprocedure']").val();
        var path = "/procedure/" + idProcedure
        $.ajax({
            type: 'POST',
            url: u + path,
            dataType: "json",
            data: {
                idProject: idProject,
                idEmployee: idEmployee
            },
            xhrFields: {
                withCredentials: true
            },
            success: function (data) {
                if (data.status === 200) {
                    console.log('sign 200');
                    window.location.reload();

                } else if (data.status === 500) {
                    console.log('sign 500');
                    alert("Signature Failure, Please Complete", "sign-alert");
                }
            }
        });
    });
});