SET foreign_key_checks = 0;
DROP TABLE IF EXISTS `Email`;
SET foreign_key_checks = 1;
CREATE TABLE `Email` (
    `idEmail` int NOT NULL AUTO_INCREMENT,
    `address` varchar(32) DEFAULT NULL,
    `idUser` int NOT NULL,
    `idAccount` int NOT NULL,
    PRIMARY KEY (`idEmail`),
    FOREIGN KEY (`idUser`) REFERENCES `User`(`idUser`),
        FOREIGN KEY (`idAccount`) REFERENCES `Account`(`idAccount`)
);
