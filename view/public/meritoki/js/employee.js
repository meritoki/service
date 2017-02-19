$(document).ready(function () {
    $("#employee-table").tablesorter();
    //    Procedure
    $("input[type='button'].button#procedure").click(function (event) {
        var value = $(this).val();
        if (value === 'PROCEDURE') {
            if ($('.employee-messanger').hasClass('visible')) {
                $('.employee-messanger').toggleClass('visible', false);
                $('.employee-messanger').toggleClass('hidden', true);
                $('#messanger').toggleClass('visible', true);
                $('#messanger').toggleClass('hidden', false);
            }
            $('#procedure').toggleClass('visible', false);
            $('#procedure').toggleClass('hidden', true);
            $('.employee-procedure').toggleClass('visible', true);
            $('.employee-procedure').toggleClass('hidden', false);
            $('.select').toggleClass('visible', true);
            $('.select').toggleClass('hidden', false);
        }
    });

    $("input[type='button'].button#hide-procedure").click(function (event) {
        var value = $(this).val();
        if (value === 'HIDE PROCEDURE') {
            $('.employee-procedure').toggleClass('visible', false);
            $('.employee-procedure').toggleClass('hidden', true);
            $('#procedure').toggleClass('visible', true);
            $('#procedure').toggleClass('hidden', false);
            $('.select').toggleClass('visible', false);
            $('.select').toggleClass('hidden', true);
        }
    });

    //    Project
    $("input[type='button'].button#messanger").click(function (event) {
        var value = $(this).val();
        if (value === 'MESSANGER') {
            if ($('.employee-procedure').hasClass('visible')) {
                $('.employee-procedure').toggleClass('visible', false);
                $('.employee-procedure').toggleClass('hidden', true);
                $('#procedure').toggleClass('visible', true);
                $('#procedure').toggleClass('hidden', false);
            }
            $('#messanger').toggleClass('visible', false);
            $('#messanger').toggleClass('hidden', true);
            $('.employee-messanger').toggleClass('visible', true);
            $('.employee-messanger').toggleClass('hidden', false);
            $('.select').toggleClass('visible', true);
            $('.select').toggleClass('hidden', false);
        }
    });

    $("input[type='button'].button#hide-messanger").click(function (event) {
        var value = $(this).val();
        if (value === 'HIDE PROJECT') {
            $('.employee-messanger').toggleClass('visible', false);
            $('.employee-messanger').toggleClass('hidden', true);
            $('#messanger').toggleClass('visible', true);
            $('#messanger').toggleClass('hidden', false);
            $('.select').toggleClass('visible', false);
            $('.select').toggleClass('hidden', true);
        }
    });

    //Select All
    $("input[name='employee-b-select-all']:checkbox").click(function (event) {
        if (this.checked) { // check select status
            $("input[name='employee-b-select']:checkbox").each(function () {
                this.checked = true; //select all checkboxes with class "checkbox1"
            });
        } else {
            $("input[name='employee-b-select']:checkbox").each(function () {
                this.checked = false; //deselect all checkboxes with class "checkbox1"
            });
        }
    });

    //Apply
    $("input[type='button'].button#apply-procedure").click(function (event) {
        console.log("apply-procedure");
        var u = $("input[name='url']").val();
        var count = 0;
        var idProcedure = $("#procedure-select option:selected").val();
        var idEmployeeA = $("#employee-a-select option:selected").val();
        var permissionA = $("input[name='employee-a-permission']:checked").val();
        var ownerA = 1;
        var idEmployeeB;
        var permissionB = $("input[name='employee-b-permission']:checked").val();
        var ownerB = 1;
        var flag = true;
        if (idEmployeeA !== undefined && idEmployeeA !== "undefined") {
            var path = "/employee/" + idEmployeeA + "/procedure/" + idProcedure;
            $("input[name='employee-b-select']:checkbox").each(function (index) {
                if (this.checked) {
                    flag = false;
                    idEmployeeB = this.value;
                    if (idEmployeeB !== undefined && idEmployeeB !== "undefined") {
                        if (idEmployeeA !== idEmployeeB) {
                            if (permissionB === 1) { //Read only
                                ownerB = 0;
                            } else {
                                ownerA = 0;
                            }
                            var path = "/employee/" + idEmployeeB + "/procedure/" + idProcedure;
                            var data = {
                                idEmployeeA: idEmployeeA,
                                permissionA: permissionA,
                                ownerA: ownerA,
                                permissionB: permissionB,
                                ownerB: ownerB,
                            };
                            $.ajax({
                                type: "POST",
                                url: u + path,
                                dataType: "json",
                                contentType: "application/json; charset=utf-8",
                                data: JSON.stringify(data),
                                xhrFields: {
                                    withCredentials: true
                                },
                                success: function (data) {
                                    if (data.status == 200) {
                                        count = count + 1;
                                        console.log("apply-procedure 200 " + count);
                                        $("h1[name='" + idEmployeeA + "-h1']#count").text('+ ' + count);
                                    } else if (data.status === 500) {
                                        alert('error applying procedure');
                                    }
                                },
                                error: function (data) {
                                    if (data.status === 500) {
                                        alert('error applying procedure');
                                    }
                                }

                            });
                        }
                    }
                }
            });
            if (flag) {
                var data = {
                    idEmployeeA: null,
                    permissionA: null,
                    ownerA: null,
                    permissionB: permissionA,
                    ownerB: ownerA,
                };
                $.ajax({
                    type: "POST",
                    url: u + path,
                    dataType: "json",
                    contentType: "application/json; charset=utf-8",
                    data: JSON.stringify(data),
                    xhrFields: {
                        withCredentials: true
                    },
                    success: function (data) {
                        if (data.status == 200) {
                            count = count + 1;
                            console.log("apply-procedure 200 " + count);
                            $("h1[name='" + idEmployeeA + "-h1']#count").text('+ ' + count);
                        }
                    }
                });


            }
        }
    });

    $("input[type='button'].button#apply-project").click(function (event) {
        console.log('apply-project');
        var u = $("input[name='url']").val();
        var permission = $("input[name='permission']:checked").val();
        var owner = 1;
        var idProcedure = $("#procedure-select option:selected").val();
        var idEmployee;
        var employeeidentificationname;
        var employeeIDEmployee = $("#employee option:selected").val();
        var employeePermission = $("input[name='employeepermission']:checked").val();
        var employeeOwner = 0;
        var count = 0;
        $("input[name='employeeselect']:checkbox").each(function (index) {
            if (this.checked) {
                idEmployee = this.value;
                employeeidentificationname = $("input[name=employee" + idEmployee + "]").val();
                var path = "/project/" + idProcedure
                if (idEmployee !== undefined && idEmployee !== "undefined") {
                    path = path + "/employee/" + idEmployee;
                    $.ajax({
                        type: 'POST',
                        url: u + path,
                        dataType: "json",
                        data: {
                            permission: permission,
                            owner: owner,
                            employeeIDEmployee: employeeIDEmployee,
                            employeePermission: employeePermission,
                            employeeOwner: employeeOwner,
                            employeeidentificationname: employeeidentificationname
                        },
                        xhrFields: {
                            withCredentials: true
                        },
                        success: function (data) {
                            if (data.status == 200) {
                                count = count + 1;
                                console.log('apply-project 200');
                                $("h1[name='" + idEmployee + "-h1']#count").text('+ ' + count);
                            }
                        }
                    });
                }
            }
        });
    });
});
