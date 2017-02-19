SET foreign_key_checks = 0;
DROP TABLE IF EXISTS `UserProcedure`;
SET foreign_key_checks = 1;
CREATE TABLE `UserProcedure` (
    `idUserProcedure` int NOT NULL AUTO_INCREMENT,
    `idProcedure` int NOT NULL,
    `idUser` int NOT NULL,
    `permission` int DEFAULT 2,
    `owner` boolean DEFAULT true,
    `type` varchar(128),
      `idAccount` int NOT NULL,
    PRIMARY KEY (`idUserProcedure`),
    FOREIGN KEY (`idProcedure`) REFERENCES `Proc`(`idProcedure`)
        ON DELETE CASCADE,
    FOREIGN KEY (`idUser`) REFERENCES `User`(`idUser`),
        FOREIGN KEY (`idAccount`) REFERENCES `Account` (`idAccount`)
)
