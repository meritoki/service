DELIMITER $$
DROP PROCEDURE IF EXISTS migrateEmployeeProcedureCondition$$ 
CREATE PROCEDURE migrateEmployeeProcedureCondition()
    BEGIN
        DECLARE i INT;
        DECLARE p INT;
        DECLARE a VARCHAR(1024);
        DECLARE pList VARCHAR(1024);
        declare id int;
        declare finished int default 0;
        declare cur cursor for select idProcedure from Proc;
        DECLARE CONTINUE HANDLER FOR NOT FOUND SET finished = 1;
        
        -- alter table SelectElement add `procedureList` VARCHAR(1024);
        open cur;
        procedureLoop: LOOP
            fetch cur INTO id;
            IF finished = 1 THEN 
                LEAVE procedureLoop;
            END IF;
            SET i = id;
            drop temporary table if exists ProcedureInstruction;
            create temporary table ProcedureInstruction AS SELECT DISTINCT p.idProcedure, p.type From Proc p inner join Instruction i ON i.idProcedure = p.idProcedure inner join InstructionElement ie on ie.idInstruction=i.idInstruction inner join Element e on e.idElement=ie.idElement where e.idElement=i group by idProcedure ASC;
            select group_concat(se.idProcedure) into @pList From SelectEmployeeProcedureInstruction se ;
            update SelectElement sel set sel.procedureList=@pList where sel.idElement=i;
        end loop procedureLoop;
        close cur;
    END$$
DELIMITER ;