UPDATE `management`.`Proc`
SET label=`name`, name="Employee Evaluation"
WHERE `name` LIKE "Employee Evaluation%" AND activityDate!='0000-00-00 00:00:00';
UPDATE `management`.`Proc`
SET label = REPLACE (label, 'Employee Evaluation ', '')
WHERE label LIKE 'Employee Evaluation%';

UPDATE `management`.`Proc`
SET label=`name`, name="Project Completion Checklist"
WHERE `name` LIKE "Project Completion Checklist%";
UPDATE `management`.`Proc`
SET label = REPLACE (label, 'Project Completion Checklist ', '')
WHERE label LIKE 'Project Completion Checklist%';
