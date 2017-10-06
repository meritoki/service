$(document).ready(function () {
    $("input[type='button'].button#add-procedure").click(function (event) {
        console.log('add-procedure');
        var value = $(this).val();
        if (value === 'ADD PROCEDURE') {
            if ($('.project-employee').hasClass('visible')) {
                $('.project-employee').toggleClass('visible', false);
                $('.project-employee').toggleClass('hidden', true);
                $('#add-employee').toggleClass('visible', true);
                $('#add-employee').toggleClass('hidden', false);
            }
            $('.project-procedure').toggleClass('visible', true);
            $('.project-procedure').toggleClass('hidden', false);
            $('#add-procedure').toggleClass('visible', false);
            $('#add-procedure').toggleClass('hidden', true);
            $('.select').toggleClass('visible', true);
            $('.select').toggleClass('hidden', false);
        }
    });
    $("input[type='button'].button#hide-procedure").click(function (event) {
        console.log('hide-procedure');
        var value = $(this).val();
        if (value === 'HIDE PROCEDURE') {
            $('.project-procedure').toggleClass('visible', false);
            $('.project-procedure').toggleClass('hidden', true);
            $('#add-procedure').toggleClass('visible', true);
            $('#add-procedure').toggleClass('hidden', false);
            $('.select').toggleClass('visible', false);
            $('.select').toggleClass('hidden', true);
        }
    });
    $("input[type='button'].button#add-employee").click(function (event) {
        console.log('add-employee');
        var value = $(this).val();
        if (value === 'ADD EMPLOYEE') {
            if ($('.project-procedure').hasClass('visible')) {
                $('.project-procedure').toggleClass('visible', false);
                $('.project-procedure').toggleClass('hidden', true);
                $('#add-procedure').toggleClass('visible', true);
                $('#add-procedure').toggleClass('hidden', false);
            }
            $('.project-employee').toggleClass('visible', true);
            $('.project-employee').toggleClass('hidden', false);
            $('#add-employee').toggleClass('visible', false);
            $('#add-employee').toggleClass('hidden', true);
            $('.select').toggleClass('visible', true);
            $('.select').toggleClass('hidden', false);
        }
    });
    $("input[type='button'].button#hide-employee").click(function (event) {
        console.log('hide-employee');
        var value = $(this).val();
        if (value === 'HIDE EMPLOYEE') {
            $('.project-employee').toggleClass('visible', false);
            $('.project-employee').toggleClass('hidden', true);
            $('#add-employee').toggleClass('visible', true);
            $('#add-employee').toggleClass('hidden', false);
            $('.select').toggleClass('visible', false);
            $('.select').toggleClass('hidden', true);
        }
    });
    $("input[name='project-select-all']:checkbox").click(function (event) {
        if (this.checked) { // check select status
            $("input[name='project-select']:checkbox").each(function () {
                this.checked = true; //select all checkboxes with class "checkbox1"    
            });
        } else {
            $("input[name='project-select']:checkbox").each(function () {
                this.checked = false; //deselect all checkboxes with class "checkbox1"  
            });
        }
    });
    $("input[type='button'].button#apply-procedure").click(function (event) {
        console.log('apply-procedure');
        var u = $("input[name='url']").val();
        var idProcedure = $("#procedure-select option:selected").val();
        var projectPermission = $("input[name='project-permission']:checked").val();
        var projectOwner = 1;
        var idProject;
        var projectName;
        var projectNumber;
        var buildingName;
        var buildingNumber;
        var employeeIDEmployee = $("#employee-select option:selected").val();
        var employeePermission = $("input[name='employee-permission']:checked").val();
        var employeeOwner = 0;
        var count = 0;
        var labelList = [];
        var label;
        var building;
        $("input[name='project-select']:checkbox").each(function () {
            if (this.checked) {
                idProject = this.value;
                for (i = 0; i < projectList.length; i++) {
                    if (projectList[i].idProject == idProject) {
                        projectName = projectList[i].name;
                        projectNumber = projectList[i].number;
                        label = ((projectName != null) ? projectName : '') + ' ' + ((projectNumber != null) ? projectNumber : '');
                        if (typeof (projectList[i].buildingList) !== "undefined" && projectList[i].buildingList.length > 0) {
                            for (j = 0; j < projectList[i].buildingList.length; j++) {
                                building = projectList[i].buildingList[j];
                                buildingName = building.name;
                                buildingNumber = building.number;
                                labelList.push(label + ' ' + ((buildingName != null) ? buildingName : '') + ' ' + ((buildingNumber != null) ? buildingNumber : ''));
                            }
                        } else {
                            labelList.push(label);
                        }
                    }
                }
                console.log(labelList);
                for (k = 0; k < labelList.length; k++) {
                    label = labelList[k];
                    var path = "/procedure/" + idProcedure
                    if (idProject !== undefined && idProject !== "undefined") {
                        path = "/employee/" + employeeIDEmployee + "/project/" + idProject + path;
                        $.ajax({
                            type: 'POST',
                            url: u + path,
                            dataType: 'json',
                            data: {
                                projectPermission: projectPermission,
                                projectOwner: projectOwner,
                                employeeIDEmployee: employeeIDEmployee,
                                employeePermission: employeePermission,
                                employeeOwner: employeeOwner,
                                label: label
                            },
                            xhrFields: {
                                withCredentials: true
                            },
                            success: function (data) {
                                if (data.status == 200) {
                                    count = count + 1;
                                    console.log('apply-procedure 200 ' + count);

                                    $("h1[name='" + idProject + "-h1']#count").text('+ ' + count);
                                }
                            }
                        });
                    }
                }
            }
        });
    });
});