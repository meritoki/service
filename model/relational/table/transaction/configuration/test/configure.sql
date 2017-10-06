
BEGIN;
SET @idAccount = 1;
INSERT INTO `Account` (`idAccount`,`guid`,`identification`) VALUES (@idAccount,'4d73d200-70e4-11e5-a5be-000c2907b940','test');
SET @idUser = 1;
INSERT INTO `User` (`idUser`,`idAccount`,`name`,`password`,`registerDate`,`activityDate`,`login`,`role`) VALUES (@idUser,@idAccount,'jorodriguez1988@yahoo.com','$2a$10$FQe5x9FGf4C160hiQsubCOCAF8guhkMoCISRVjG4ku4ul1x4XHacO','2015-06-16 09:34:58','2015-06-16 09:34:58',146,'general-manager');
INSERT INTO `Email` (`address`, `idUser`,`idAccount`) VALUES ('jorodriguez1988@yahoo.com',@idUser,@idAccount);
INSERT INTO `Identification` (`idAccount`,`firstName`,`middleName`,`middleInitial`,`lastName`,`name`,`sex`,`guid`,`idUser`) VALUES (@idAccount,'Joaquin',null,null,'Rodriguez','Joaquin Rodriguez','M','0fbfa716-70e4-11e5-a5be-000c2907b940',@idUser);
SET @idUser = 2;
INSERT INTO `User` (`idUser`,`idAccount`,`name`,`password`,`registerDate`,`activityDate`,`login`,`role`) VALUES (@idUser,@idAccount,'test','$2a$10$FQe5x9FGf4C160hiQsubCOCAF8guhkMoCISRVjG4ku4ul1x4XHacO','2015-06-16 09:34:58','2015-06-16 16:54:00',41,'quality-manager');
INSERT INTO `Email` (`address`, `idUser`,`idAccount`) VALUES ('test@outlook.com',@idUser,@idAccount);
INSERT INTO `Phone` (`idAccount`,`number`, `idUser`) VALUES (@idAccount,'3015148700',@idUser);
INSERT INTO `Identification` (`idAccount`,`firstName`,`middleName`,`middleInitial`,`lastName`,`name`,`sex`,`guid`,`idUser`) VALUES (@idAccount,'test',null,null,'test','Test','M','4d73d200-70e4-11e5-a5be-000c2907b940',@idUser);
-- source ./model/relational/table/transaction/client/meritbuilders/recorder.sql
COMMIT;
