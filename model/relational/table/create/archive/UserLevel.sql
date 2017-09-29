SET foreign_key_checks = 0;
DROP TABLE IF EXISTS `UserLevel`;
SET foreign_key_checks = 1;
CREATE TABLE `UserLevel` (
    `idUserLevel` int NOT NULL AUTO_INCREMENT,
    `idUser` int NOT NULL,
    `idLevel` int NOT NULL,
    `idAccount` int NOT NULL,
    `createDate` datetime NULL,
    `startDate` datetime NULL,
    `activityDate` datetime NULL,
    `endDate` datetime NULL,
    `index` int NOT NULL,
    PRIMARY KEY (`idUserLevel`),
    FOREIGN KEY (`idAccount`) REFERENCES `Account` (`idAccount`),
    FOREIGN KEY (`idLevel`) REFERENCES `Level`(`idLevel`),
    FOREIGN KEY (`idUser`) REFERENCES `User`(`idUser`)
);
