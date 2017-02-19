SET foreign_key_checks = 0;
DROP TABLE IF EXISTS `ProjectProcedure`;
SET foreign_key_checks = 1;
CREATE TABLE `ProjectProcedure` (
    `idProjectProcedure` int NOT NULL AUTO_INCREMENT,
    `idProcedure` int NOT NULL,
    `idProject` int NOT NULL,
    `idAccount` int NOT NULL,
    PRIMARY KEY (`idProjectProcedure`),
    FOREIGN KEY (`idProcedure`) REFERENCES `Proc`(`idProcedure`)
        ON DELETE CASCADE,
    FOREIGN KEY (`idProject`) REFERENCES `Project`(`idProject`),
    FOREIGN KEY (`idAccount`) REFERENCES `Account` (`idAccount`)
);
