SET foreign_key_checks = 0;
DROP TABLE IF EXISTS `ProjectFile`;
SET foreign_key_checks = 1;
CREATE TABLE `ProjectFile` (
    `idProjectFile` int NOT NULL AUTO_INCREMENT,
    `idFile` int NOT NULL,
    `permission` int DEFAULT 0,
    `owner` boolean DEFAULT true,
    `addDate` datetime NULL,
    `idProject` int NOT NULL,
        `idAccount` int NOT NULL,
    PRIMARY KEY (`idProjectFile`),
    FOREIGN KEY (`idFile`) REFERENCES `File`(`idFile`)
        ON DELETE CASCADE,
    FOREIGN KEY (`idProject`) REFERENCES `Project`(`idProject`),
        FOREIGN KEY (`idAccount`) REFERENCES `Account` (`idAccount`)
);
