SET foreign_key_checks = 0;
DROP TABLE IF EXISTS `Organization`;
SET foreign_key_checks = 1;
CREATE TABLE `Organization` (
    `idOrganization` int NOT NULL AUTO_INCREMENT,
    `idAccount` int NOT NULL,
    `name` varchar(128) NULL, 
    `createDate` datetime NOT NULL,
    `activityDate` datetime NULL,
    PRIMARY KEY (`idOrganization`),
    FOREIGN KEY (`idAccount`) REFERENCES `Account` (`idAccount`)
);
