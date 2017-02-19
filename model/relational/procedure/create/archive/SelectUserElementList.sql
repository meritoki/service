DELIMITER $$
DROP PROCEDURE IF EXISTS selectUserElementList$$
CREATE PROCEDURE selectUserElementList(IN idUserA int, IN idUserB int)
    BEGIN
        DECLARE idA INT;
        DECLARE idB INT;
        SET idA=idUserA;
        SET idB=idUserB;
        drop temporary table if exists SelectUserProcedure;
        drop temporary table if exists SelectElement;
        create temporary table SelectUserProcedure
          AS SELECT e.idElement,
          i.idProcedure, i.idInstruction, i.name, i.statement, i.description, i.type, i.maximum, i.minimum, i.step, i.block, i.label, i.value, i.duration, i.key
          FROM UserProcedure up1
          INNER JOIN (
            SELECT up2.idUser, up2.idProcedure, up2.permission, up2.owner
            FROM UserProcedure up2
            WHERE up2.permission<2)
          AS q ON q.idProcedure=up1.idProcedure
          INNER JOIN Proc p1 ON p1.idProcedure=up1.idProcedure
          INNER JOIN Instruction i ON i.idProcedure = p1.idProcedure
          LEFT OUTER JOIN InstructionElement ie ON ie.idInstruction=i.idInstruction
          LEFT OUTER JOIN Element e ON ie.idElement=e.idElement
          WHERE up1.idUser=idB
          AND ((up1.owner=1 AND (p1.type='inspection' OR p1.type='test')) OR (p1.type='session'))
          AND i.value > -1;
          #GROUP BY i.name;
        create temporary table SelectElement
          AS SELECT e.idElement,e.guid,l.name AS levelName,l.label AS levelLabel,l.hexCode AS levelHexCode ,m.time ,m.average , m.rate , m.tester, m.instructor,m.student,m.inspector,m.inspection,m.session,m.test
          FROM Element e
          INNER JOIN ElementLevel el ON el.idElement=e.idElement
          INNER JOIN Level l ON l.idLevel=el.idLevel
          LEFT OUTER JOIN Measurement m ON m.idMeasurement=el.idMeasurement
          WHERE e.terminal=1 AND e.match = 0;
        call updateSelectElementName();
        call updateSelectElementAction();
        call updateSelectElementProcedureCount();
        SELECT se.idElement,SUBSTRING(guid,1,8) AS id, se.name,levelName AS `level`,levelLabel AS `color`,levelHexCode AS hexCode,`action`,testCount,inspectionCount,sessionCount,`time`,average,rate,tester,instructor,student,inspector,inspection,session,test,
        sup.idInstruction, sup.type, sup.value, sup.duration, sup.key,sup.maximum,sup.minimum
        FROM SelectElement se
        INNER JOIN SelectUserProcedure sup ON sup.idElement=se.idElement;
    END$$
DELIMITER ;
