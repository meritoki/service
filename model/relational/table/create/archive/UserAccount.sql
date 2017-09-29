SET foreign_key_checks = 0;
DROP TABLE IF EXISTS `UserAccount`;
SET foreign_key_checks = 1;
CREATE TABLE `UserAccount` (
    `idUserAccount` int NOT NULL AUTO_INCREMENT,
    `idUser` int NOT NULL,
    `idAccount` int NOT NULL,
    PRIMARY KEY (`idUserAccount`),
    FOREIGN KEY (`idUser`) REFERENCES `User`(`idUser`),
    FOREIGN KEY (`idAccount`) REFERENCES `Account`(`idAccount`)
);