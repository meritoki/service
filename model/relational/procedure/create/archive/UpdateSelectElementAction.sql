DELIMITER $$
DROP PROCEDURE IF EXISTS updateSelectElementAction$$ 
CREATE PROCEDURE updateSelectElementAction()
    BEGIN
        DECLARE i INT;
        DECLARE j INT;
        DECLARE p INT;
        DECLARE a VARCHAR(1024);
        DECLARE actionList VARCHAR(1024);
        declare id int;
        declare finished int default 0;
        declare cur cursor for 
            select idElement from SelectElement;
        DECLARE CONTINUE HANDLER FOR NOT FOUND SET finished = 1;
        alter table SelectElement add `action` varchar(1024);
        open cur;
        test: LOOP
            fetch cur INTO id;
            IF finished = 1 THEN 
                LEAVE test;
            END IF;
            SET i = id;
            SET j = id;
            SET actionList = '';
            REPEAT
                SELECT e.parent, GROUP_CONCAT(act.name) INTO p, a FROM Element e INNER JOIN ElementAction ea ON ea.idElement = e.idElement INNER JOIN `Action` act ON act.idAction = ea.idAction WHERE e.idElement=i;
                IF a != 'NULL' THEN
                    SET actionList = CONCAT(actionList,a,',');
                END IF;
                SET i = p;
            UNTIL p = 0
            END REPEAT;
            update SelectElement sel set sel.action=actionList where sel.idElement=j;
        end loop test;
        close cur;
    END$$
DELIMITER ;