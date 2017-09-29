
SET foreign_key_checks = 0;
DROP TABLE IF EXISTS `UserProject`;
SET foreign_key_checks = 1;
CREATE TABLE `UserProject` (
    `idUserProject` int NOT NULL AUTO_INCREMENT,
    `idProject` int NOT NULL,
    `permission` int DEFAULT 0,
    `owner` boolean DEFAULT true,
    `startDate` datetime NOT NULL,
    `endDate` datetime NULL,
    `idUser` int NOT NULL,
    `idAccount` int NOT NULL,
    PRIMARY KEY (`idUserProject`),
    FOREIGN KEY (`idProject`) REFERENCES `Project`(`idProject`)
        ON DELETE CASCADE,
    FOREIGN KEY (`idUser`) REFERENCES `User`(`idUser`),
        FOREIGN KEY (`idAccount`) REFERENCES `Account` (`idAccount`)
);
