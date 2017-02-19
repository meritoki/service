SET foreign_key_checks = 0;
DROP TABLE IF EXISTS `Location`;
SET foreign_key_checks = 1;
CREATE TABLE `Location` (
    `idLocation` int NOT NULL AUTO_INCREMENT,
    `address` varchar(45) DEFAULT NULL,
    `apartment` varchar(45) DEFAULT NULL,
    `suite` varchar(45) DEFAULT NULL,
    `unit` varchar(45) DEFAULT NULL,
    `city` varchar(45) DEFAULT NULL,
    `state` varchar(45) DEFAULT NULL,
    `zipCode` varchar(45) DEFAULT NULL,
    `idUser` int NOT NULL,
        `idAccount` int NOT NULL,
    PRIMARY KEY (`idLocation`),
    FOREIGN KEY (`idUser`) REFERENCES `User`(`idUser`),
    FOREIGN KEY (`idAccount`) REFERENCES `Account`(`idAccount`)
);
