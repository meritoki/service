SET foreign_key_checks = 0;
DROP TABLE IF EXISTS `EmployeeTeam`;
SET foreign_key_checks = 1;
CREATE TABLE `EmployeeTeam` (
    `idEmployeeTeam` int NOT NULL AUTO_INCREMENT,
    `idTeam` int NOT NULL,
    `permission` int DEFAULT 0,
    `owner` boolean DEFAULT true,
    `startDate` datetime NOT NULL,
    `endDate` datetime NULL,
    `idEmployee` int NOT NULL,
    PRIMARY KEY (`idEmployeeTeam`),
    FOREIGN KEY (`idTeam`) REFERENCES `Team`(`idTeam`)
        ON DELETE CASCADE,
    FOREIGN KEY (`idEmployee`) REFERENCES `Employee`(`idEmployee`)
);