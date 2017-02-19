SET foreign_key_checks = 0;
DROP TABLE IF EXISTS `EmployeeFile`;
SET foreign_key_checks = 1;
CREATE TABLE `EmployeeFile` (
    `idEmployeeFile` int NOT NULL AUTO_INCREMENT,
    `idFile` int NOT NULL,
    `idAccount` int NOT NULL,
    `permission` int DEFAULT 0,
    `owner` boolean DEFAULT true,
    `addDate` datetime NULL,
    `idEmployee` int NOT NULL,
    PRIMARY KEY (`idEmployeeFile`),
    FOREIGN KEY (`idFile`) REFERENCES `File`(`idFile`)
        ON DELETE CASCADE,
    FOREIGN KEY (`idEmployee`) REFERENCES `Employee`(`idEmployee`)
);