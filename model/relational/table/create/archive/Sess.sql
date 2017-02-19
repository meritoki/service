SET foreign_key_checks = 0;
DROP TABLE IF EXISTS `Sess`;
SET foreign_key_checks = 1;
CREATE TABLE `Sess` (
    `idSession` int NOT NULL AUTO_INCREMENT,
    `idAccount` int NOT NULL,
    `name` varchar(128) NULL, 
    `duration` int NOT NULL,#milliseconds
    `createDate` datetime NOT NULL,
    `startDate` datetime NOT NULL,
    `endDate` datetime NULL,
    PRIMARY KEY (`idSession`),
    FOREIGN KEY (`idAccount`) REFERENCES `Account` (`idAccount`)
);