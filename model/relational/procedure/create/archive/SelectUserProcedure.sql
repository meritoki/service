DELIMITER $$
DROP PROCEDURE IF EXISTS selectUserProcedure$$
CREATE PROCEDURE selectUserProcedure(IN idUserA INT, IN idUserB INT, IN idProcedure INT)
    BEGIN
      drop temporary table if exists selectUserProcedure;
      create temporary table selectUserProcedure AS SELECT q.idUser, q.owner, q.permission, i.name AS identificationName,c.idInstruction, c.type AS instructionType, c.key AS instructionKey, c.mask AS instructionMask, c.statement AS instructionStatement, c.description AS instructionDescription, c.value AS instructionValue, c.duration AS instructionDuration, c.time AS instructionTime,c.maximum, c.minimum, c.step, c.activityDate AS instructionActivityDate, c.createDate AS instructionCreateDate, c.block, c.name AS instructionName, c.com AS instructionComment, c.applicable, c.label AS instructionLabel, p.idProcedure, p.name, p.label, p.createDate, p.activityDate, p.completeDate, p.type, p.guid, up2.type AS userProcedureType, sig.date AS signatureDate FROM UserProcedure up2 INNER JOIN (SELECT up.idUser, up.idProcedure, up.permission, up.owner FROM UserProcedure up WHERE up.idUser=1 AND up.permission>0) AS q ON q.idProcedure=up2.idProcedure INNER JOIN Proc p ON p.idProcedure = up2.idProcedure LEFT JOIN Instruction c ON p.idProcedure=c.idProcedure LEFT OUTER JOIN Signature sig ON sig.idProcedure=up2.idProcedure LEFT OUTER JOIN Identification i ON i.idUser=up2.idUser WHERE up2.idUser=1 AND up2.idProcedure='12' ORDER BY c.block ASC;

    END$$
DELIMITER ;
