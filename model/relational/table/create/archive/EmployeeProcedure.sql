
SET foreign_key_checks = 0;
DROP TABLE IF EXISTS `EmployeeProcedure`;
SET foreign_key_checks = 1;
CREATE TABLE `EmployeeProcedure` (
    `idEmployeeProcedure` int NOT NULL AUTO_INCREMENT,
    `idProcedure` int NOT NULL,
    `permission` int DEFAULT 0,
    `owner` boolean DEFAULT true,
    `idEmployee` int NOT NULL,
    PRIMARY KEY (`idEmployeeProcedure`),
    FOREIGN KEY (`idProcedure`) REFERENCES `Proc`(`idProcedure`)
        ON DELETE CASCADE,
    FOREIGN KEY (`idEmployee`) REFERENCES `Employee`(`idEmployee`)
);