SET foreign_key_checks = 0;
DROP TABLE IF EXISTS `Team`;
SET foreign_key_checks = 1;
CREATE TABLE `Team` (
    `idTeam` int NOT NULL AUTO_INCREMENT,
    `idAccount` int NOT NULL,
    `name` varchar(128) NULL, 
    `number` varchar(128) NULL, 
    `createDate` datetime NOT NULL,
    `activityDate` datetime NULL,
    `completeDate` datetime NULL,
    PRIMARY KEY (`idTeam`),
    FOREIGN KEY (`idAccount`) REFERENCES `Account` (`idAccount`)
);