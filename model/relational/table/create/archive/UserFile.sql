SET foreign_key_checks = 0;
DROP TABLE IF EXISTS `UserFile`;
SET foreign_key_checks = 1;
CREATE TABLE `UserFile` (
    `idUserFile` int NOT NULL AUTO_INCREMENT,
    `idFile` int NOT NULL,
    `permission` int DEFAULT 0,
    `owner` boolean DEFAULT true,
    `addDate` datetime NULL,
    `idUser` int NOT NULL,
    `idAccount` int NOT NULL,
    PRIMARY KEY (`idUserFile`),
    FOREIGN KEY (`idFile`) REFERENCES `File`(`idFile`)
        ON DELETE CASCADE,
    FOREIGN KEY (`idUser`) REFERENCES `User`(`idUser`),
    FOREIGN KEY (`idAccount`) REFERENCES `Account` (`idAccount`)
);
