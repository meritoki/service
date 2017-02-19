DELIMITER $$
DROP PROCEDURE IF EXISTS selectElementProcedureList$$
CREATE PROCEDURE selectElementProcedureList(IN idElement INT)
    BEGIN
        drop temporary table if exists SelectEmployeeProcedureInstruction;
        create temporary table SelectEmployeeProcedureInstruction AS
        SELECT p.idProcedure,p.name,p.type,i.idInstruction From Proc p inner join Instruction i ON i.idProcedure = p.idProcedure inner join InstructionElement ie on ie.idInstruction=i.idInstruction inner join Element e on e.idElement=ie.idElement INNER JOIN UserProcedure up ON up.idProcedure=p.idProcedure where e.idElement=idElement AND up.permission=3;
        select idProcedure, name,type From SelectEmployeeProcedureInstruction group by idProcedure ASC;
    END$$
DELIMITER ;
