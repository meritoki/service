SET foreign_key_checks = 0;
DROP TABLE IF EXISTS `Account`;
SET foreign_key_checks = 1;
CREATE TABLE `Account` (
  `idAccount` int(11) NOT NULL AUTO_INCREMENT,
  `guid` varchar(1024) NOT NULL,
  `name` varchar(1024) NULL,
  `identification` varchar(1024) NOT NULL,
  PRIMARY KEY (`idAccount`)
)
