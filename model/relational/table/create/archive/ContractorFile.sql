SET foreign_key_checks = 0;
DROP TABLE IF EXISTS `ContractorFile`;
SET foreign_key_checks = 1;
CREATE TABLE `ContractorFile` (
    `idContractorFile` int NOT NULL AUTO_INCREMENT,
    `idFile` int NOT NULL,
    `permission` int DEFAULT 0,
    `owner` boolean DEFAULT true,
    `addDate` datetime NULL,
    `idContractor` int NOT NULL,
    PRIMARY KEY (`idContractorFile`),
    FOREIGN KEY (`idFile`) REFERENCES `File`(`idFile`)
        ON DELETE CASCADE,
    FOREIGN KEY (`idContractor`) REFERENCES `Contractor`(`idContractor`)
);