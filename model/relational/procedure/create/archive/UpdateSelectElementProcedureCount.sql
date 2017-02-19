DELIMITER $$
DROP PROCEDURE IF EXISTS updateSelectElementProcedureCount$$ 
CREATE PROCEDURE updateSelectElementProcedureCount()
    BEGIN
        DECLARE i INT;
        DECLARE p INT;
        DECLARE a VARCHAR(1024);
        DECLARE inspectionCount INT default 0;
        DECLARE sessionCount INT default 0;
        DECLARE testCount INT default 0;
        declare id int;
        declare finished int default 0;
        declare cur cursor for select idElement from SelectElement;
        DECLARE CONTINUE HANDLER FOR NOT FOUND SET finished = 1;
        alter table SelectElement add `inspectionCount` int default 0;
        alter table SelectElement add `sessionCount` int default 0;
        alter table SelectElement add `testCount` int default 0;
        open cur;
        test: LOOP
            fetch cur INTO id;
            IF finished = 1 THEN 
                LEAVE test;
            END IF;
            SET i = id;
            drop temporary table if exists SelectEmployeeProcedureInstruction;
            create temporary table SelectEmployeeProcedureInstruction AS SELECT p.idProcedure, p.type From Proc p inner join Instruction i ON i.idProcedure = p.idProcedure inner join InstructionElement ie on ie.idInstruction=i.idInstruction inner join Element e on e.idElement=ie.idElement where e.idElement=i group by idProcedure ASC;
            select se.idProcedure, se.type,count(*) into @p,@a, @inspectionCount From SelectEmployeeProcedureInstruction se where se.type='inspection';
            update SelectElement sel set sel.inspectionCount=@inspectionCount where sel.idElement=i;
            select se.idProcedure, se.type,count(*) into @p,@a,@sessionCount From SelectEmployeeProcedureInstruction se where se.type='session';
            update SelectElement sel set sel.sessionCount=@sessionCount where sel.idElement=i;
            select se.idProcedure, se.type,count(*) into @p,@a,@testCount From SelectEmployeeProcedureInstruction se where se.type='test';
            update SelectElement sel set sel.testCount=@testCount where sel.idElement=i;
        end loop test;
        close cur;
    END$$
DELIMITER ;