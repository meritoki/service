SET foreign_key_checks = 0;
DROP TABLE IF EXISTS `FileElement`;
SET foreign_key_checks = 1;
CREATE TABLE `FileElement` (
    `idFileElement` int NOT NULL AUTO_INCREMENT,
    `idFile` int NOT NULL,
    `addDate` datetime NULL,
    `idElement` int NOT NULL,
    PRIMARY KEY (`idFileElement`),
    FOREIGN KEY (`idFile`) REFERENCES `File`(`idFile`)
        ON DELETE CASCADE,
    FOREIGN KEY (`idElement`) REFERENCES `Element`(`idElement`)
);