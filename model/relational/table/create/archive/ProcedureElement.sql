SET foreign_key_checks = 0;
DROP TABLE IF EXISTS `ProcedureElement`;
SET foreign_key_checks = 1;
CREATE TABLE `ProcedureElement` (
    `idProcedureElement` int NOT NULL AUTO_INCREMENT,
    `idProcedure` int NOT NULL,
    `idElement` int NOT NULL,
        `idAccount` int NOT NULL,
    PRIMARY KEY (`idProcedureElement`),
    FOREIGN KEY (`idProcedure`) REFERENCES `Proc`(`idProcedure`),
    FOREIGN KEY (`idElement`) REFERENCES `Element`(`idElement`),
        FOREIGN KEY (`idAccount`) REFERENCES `Account` (`idAccount`)
);
