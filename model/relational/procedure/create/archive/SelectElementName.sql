DELIMITER $$
DROP PROCEDURE IF EXISTS selectElementName$$ 
CREATE PROCEDURE selectElementName(IN idElement INT)
    BEGIN
        DECLARE i INT;
        DECLARE j INT;
        DECLARE p INT;
        DECLARE n VARCHAR(1024);
        DECLARE element VARCHAR(1024);
        SET j = idElement;
        SET i = idElement;
        SET element = '';
        REPEAT
            SELECT e.parent, e.name INTO p, n FROM Element e WHERE e.idElement=i;
            SET element = CONCAT(element,n,' ');
            SET i = p;
        UNTIL p = 0
        END REPEAT;
        SELECT element;
    END$$
DELIMITER ;