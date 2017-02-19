SET foreign_key_checks = 0;
DROP TABLE IF EXISTS `Phone`;
SET foreign_key_checks = 1;
CREATE TABLE `Phone` (
    `idPhone` int NOT NULL AUTO_INCREMENT,
    `number` varchar(32) DEFAULT NULL,
    `idUser` int NOT NULL,
        `idAccount` int NOT NULL,
    PRIMARY KEY (`idPhone`),
    FOREIGN KEY (`idUser`) REFERENCES `User`(`idUser`),
        FOREIGN KEY (`idAccount`) REFERENCES `Account` (`idAccount`)
);
