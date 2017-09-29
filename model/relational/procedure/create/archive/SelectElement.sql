DELIMITER $$
DROP PROCEDURE IF EXISTS selectElement$$ 
CREATE PROCEDURE selectElement(IN idE INT)
    BEGIN
        drop temporary table if exists SelectElement;
        create temporary table SelectElement AS select e.idElement,e.guid,l.name AS levelName,l.label AS levelLabel,l.hexCode AS levelHexCode from Element e INNER JOIN ElementLevel el ON el.idElement=e.idElement INNER JOIN Level l ON l.idLevel=el.idLevel where e.terminal=1 AND e.match = 0 and e.idElement=idE;
        call updateSelectElementName();
        call updateSelectElementAction();
        call updateSelectElementProcedureList();
        select idElement,SUBSTRING(guid,1,8) AS id, name,levelName AS `level`,levelLabel AS `color`,levelHexCode AS hexCode,`action`,procedureList from SelectElement;
    END$$
DELIMITER ;