SET foreign_key_checks = 0;
DROP TABLE IF EXISTS `Tag`;
SET foreign_key_checks = 1;
CREATE TABLE `Tag` (
    `idTag` int NOT NULL AUTO_INCREMENT,
    `idAccount` int NOT NULL,
    `identification` varchar(1024) NULL,
    `type` varchar(2048) NULL,
    PRIMARY KEY (`idTag`),
    FOREIGN KEY (`idAccount`) REFERENCES `Account` (`idAccount`)
);
