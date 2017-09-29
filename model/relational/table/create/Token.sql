SET foreign_key_checks = 0;
DROP TABLE IF EXISTS `Token`;
SET foreign_key_checks = 1;
CREATE TABLE `Token` (
    `idToken` int NOT NULL AUTO_INCREMENT,
    `idAccount` int NOT NULL,
    `idUser` int NOT NULL,
    `idClient` int NOT NULL,
    `value` varchar(1024) DEFAULT NULL,
    PRIMARY KEY (`idToken`),
    FOREIGN KEY (`idAccount`) REFERENCES `Account`(`idAccount`),
    FOREIGN KEY (`idUser`) REFERENCES `User`(`idUser`),
    FOREIGN KEY (`idClient`) REFERENCES `Client`(`idClient`)
) ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=latin1;
SET foreign_key_checks = 0;
