SET foreign_key_checks = 0;
DROP TABLE IF EXISTS `Project`;
SET foreign_key_checks = 1;
CREATE TABLE `Project` (
    `idProject` int NOT NULL AUTO_INCREMENT,
    `idAccount` int NOT NULL,
    `name` varchar(128) NULL, 
    `number` varchar(128) NULL, 
    `createDate` datetime NOT NULL,
    `startDate` datetime NULL,
    `activityDate` datetime NULL,
    `completeDate` datetime NULL,
    PRIMARY KEY (`idProject`),
    FOREIGN KEY (`idAccount`) REFERENCES `Account` (`idAccount`)
);