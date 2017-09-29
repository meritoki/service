
SET foreign_key_checks = 0;
DROP TABLE IF EXISTS `UserTag`;
SET foreign_key_checks = 1;
CREATE TABLE `UserTag` (
    `idUserTag` int NOT NULL AUTO_INCREMENT,
    `idTag` int NOT NULL,
    `idAccount` int NOT NULL,
    `permission` int DEFAULT 0,
    `owner` boolean DEFAULT true,
    `startDate` datetime NOT NULL,
    `endDate` datetime NULL,
    `idUser` int NOT NULL,
    PRIMARY KEY (`idUserTag`),
    FOREIGN KEY (`idTag`) REFERENCES `Tag`(`idTag`)
        ON DELETE CASCADE,
    FOREIGN KEY (`idUser`) REFERENCES `User`(`idUser`),
    FOREIGN KEY (`idAccount`) REFERENCES `Account` (`idAccount`)
);
