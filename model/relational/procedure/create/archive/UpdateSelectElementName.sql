DELIMITER $$
DROP PROCEDURE IF EXISTS updateSelectElementName$$ 
CREATE PROCEDURE updateSelectElementName()
    BEGIN
        DECLARE i INT;
        DECLARE j INT;
        DECLARE p INT;
        DECLARE n VARCHAR(1024);
        DECLARE element VARCHAR(1024);
        declare id int;
        declare finished int default 0;
        declare cur cursor for 
            select idElement from SelectElement;
        DECLARE CONTINUE HANDLER FOR NOT FOUND SET finished = 1;
        alter table SelectElement add name varchar(1024);
        open cur;
        test: LOOP
            fetch cur INTO id;
            IF finished = 1 THEN 
                LEAVE test;
            END IF;
            SET j = id;
            SET i = id;
            SET element = '';
            REPEAT
                SELECT e.parent, e.name INTO p, n FROM Element e WHERE e.idElement=i;
                SET element = CONCAT(element,n,' ');
                SET i = p;
            UNTIL p = 0
            END REPEAT;
            update SelectElement sel set sel.name=element where sel.idElement=j;
        end loop test;
        close cur;
    END$$
DELIMITER ;