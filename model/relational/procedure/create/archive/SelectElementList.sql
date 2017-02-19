DELIMITER $$
DROP PROCEDURE IF EXISTS selectElementName$$ 
CREATE PROCEDURE selectElementList()#IN idElement INT)
    BEGIN
        DECLARE i INT;
        DECLARE p INT;
        DECLARE n VARCHAR(1024);
        DECLARE idElement INT;
        DECLARE name VARCHAR(1024);
        DECLARE maximum INT;
        SELECT max(idElement) INTO maximum FROM Element;
        SET i = idElement;
        SET name = '';
        REPEAT
            SET idElement = maximum;
            SET maximum = maximum - 1;
            REPEAT
                SELECT e.parent, e.name, e.idElement INTO p, n, idElement FROM Element e WHERE e.terminal=1 AND e.idElement=idElement;
                SET name = CONCAT(name,n,' ');
                SET i = p;
            UNTIL p = 0
            END REPEAT;
            SELECT idElement, name;
        UNTIL maximum = 0
        END REPEAT;
        
    END$$
DELIMITER ;