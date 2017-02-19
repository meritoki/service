SET foreign_key_checks = 0;
DROP TABLE IF EXISTS `User`;
SET foreign_key_checks = 1;
CREATE TABLE `User` (
    `idUser` int NOT NULL AUTO_INCREMENT,
    `idAccount` int NOT NULL,
    `name` varchar(64) NOT NULL,
    `password` varchar(64) NOT NULL,
    `registerDate` datetime NOT NULL,
    `activityDate` datetime NOT NULL,
    `login` int DEFAULT 1,
    `role` varchar(64) NOT NULL,
    PRIMARY KEY (`idUser`),
    FOREIGN KEY (`idAccount`) REFERENCES `Account`(`idAccount`)
) ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=latin1;
SET foreign_key_checks = 0;  