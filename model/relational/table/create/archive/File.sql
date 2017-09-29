SET foreign_key_checks = 0;
DROP TABLE IF EXISTS `File`;
SET foreign_key_checks = 1;
CREATE TABLE `File` (
    `idFile` int NOT NULL AUTO_INCREMENT,
    `idAccount` int NOT NULL,
    `label` varchar(1024) NULL, 
    `path` varchar(2048) NULL,
    `name` varchar(1024) NULL, 
    `extension` varchar(128) NULL,
    `createDate` datetime NOT NULL,
    `activityDate` datetime NULL,
    PRIMARY KEY (`idFile`),
    FOREIGN KEY (`idAccount`) REFERENCES `Account` (`idAccount`)
);