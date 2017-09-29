SET foreign_key_checks = 0;
DROP TABLE IF EXISTS `UserSession`;
SET foreign_key_checks = 1;
CREATE TABLE `UserSession` (
    `idUserSession` int NOT NULL AUTO_INCREMENT,
    `idSession` int NOT NULL,
    `permission` int DEFAULT 0,
    `owner` boolean DEFAULT true,
    `idUser` int NOT NULL,
    PRIMARY KEY (`idUserSession`),
    FOREIGN KEY (`idSession`) REFERENCES `Sess`(`idSession`)
        ON DELETE CASCADE,
    FOREIGN KEY (`idUser`) REFERENCES `User`(`idUser`)
);
