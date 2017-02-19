SET foreign_key_checks = 0;
DROP TABLE IF EXISTS `Client`;
SET foreign_key_checks = 1;
CREATE TABLE `Client` (
    `idClient` int NOT NULL AUTO_INCREMENT,
    `idAccount` int NOT NULL,
    `identification` varchar(1024) NOT NULL,
    `name` varchar(64) NOT NULL,
    `secret` varchar(64) NOT NULL,
    `registerDate` datetime NOT NULL,
    `activityDate` datetime NOT NULL,
    `login` int DEFAULT 1,
    PRIMARY KEY (`idClient`),
    FOREIGN KEY (`idAccount`) REFERENCES `Account`(`idAccount`)
) ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=latin1;
SET foreign_key_checks = 0;
