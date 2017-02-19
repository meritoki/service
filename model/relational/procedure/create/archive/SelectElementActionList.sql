DELIMITER $$
DROP PROCEDURE IF EXISTS selectElementActionList$$ 
CREATE PROCEDURE selectElementActionList(IN idElement INT)
    BEGIN
        DECLARE i INT;
        DECLARE p INT;
        DECLARE a VARCHAR(1024);
        DECLARE actionList VARCHAR(1024);
        SET i = idElement;
        SET actionList = '';
        REPEAT
            SELECT e.parent, GROUP_CONCAT(act.name) INTO p, a FROM Element e INNER JOIN ElementAction ea ON ea.idElement = e.idElement INNER JOIN `Action` act ON act.idAction = ea.idAction WHERE e.idElement=i;
            IF a != 'NULL' THEN
                SET actionList = CONCAT(actionList,a,',');
            END IF;
            SET i = p;
        UNTIL p = 0
        END REPEAT;
        SELECT actionList;
    END$$
DELIMITER ;