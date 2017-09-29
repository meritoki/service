SET foreign_key_checks=0
DROP TABLE IF EXISTS `Material`
SET foreign_key_checks=1
CREATE TABLE `Material` (
    `idMaterial` INT NOT NULL AUTO_INCREMENT,
    `commonName` VARCHAR(256) NOT NULL,
    `chemicalName` VARCHAR(256) NOT NULL,
    `date` datetime NULL,
    PRIMARY KEY (`idMaterial`)
);