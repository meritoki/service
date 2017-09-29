
SET foreign_key_checks = 0;
DROP TABLE IF EXISTS `ContractorProcedure`;
SET foreign_key_checks = 1;
CREATE TABLE `ContractorProcedure` (
    `idContractorProcedure` int NOT NULL AUTO_INCREMENT,
    `idProcedure` int NOT NULL,
    `permission` int DEFAULT 0,
    `owner` boolean DEFAULT true,
    `idContractor` int NOT NULL,
    PRIMARY KEY (`idContractorProcedure`),
    FOREIGN KEY (`idProcedure`) REFERENCES `Proc`(`idProcedure`)
        ON DELETE CASCADE,
    FOREIGN KEY (`idContractor`) REFERENCES `Contractor`(`idContractor`)
);