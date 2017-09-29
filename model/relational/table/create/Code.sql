SET foreign_key_checks = 0;
DROP TABLE IF EXISTS `Code`;
SET foreign_key_checks = 1;
CREATE TABLE `Code` (
    `idCode` int NOT NULL AUTO_INCREMENT,
    `idAccount` int NOT NULL,
    `redirectURI` VARCHAR(1024) DEFAULT NULL,
    `value` VARCHAR(1024) DEFAULT NULL,
    `idUser` int NOT NULL,
    `idClient` int NOT NULL,
    PRIMARY KEY (`idCode`),
    FOREIGN KEY (`idAccount`) REFERENCES `Account`(`idAccount`),
    FOREIGN KEY (`idUser`) REFERENCES `User`(`idUser`),
    FOREIGN KEY (`idClient`) REFERENCES `Client`(`idClient`)
) ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=latin1;
SET foreign_key_checks = 0;
