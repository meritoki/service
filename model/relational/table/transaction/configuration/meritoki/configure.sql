
SET @idAccount = 1;
INSERT INTO `Account` (`idAccount`) VALUES (@idAccount);
source ./model/relational/table/insert/Organization.sql
source ./model/relational/table/insert/Resource.sql
source ./model/relational/table/insert/Element.sql
source ./model/relational/table/insert/Action.sql
source ./model/relational/table/insert/ElementAction.sql
source ./model/relational/table/insert/File.sql
#source ./model/relational/table/insert/Project.sql
#source ./model/relational/table/insert/Building.sql
source ./model/relational/table/insert/Level.sql
source ./model/relational/table/insert/ElementLevel.sql
source ./model/relational/table/insert/Queue.sql
BEGIN;
SET @idUser = 1;
INSERT INTO `User` (`idUser`,`idAccount`,`name`,`password`,`registerDate`,`activityDate`,`login`,`role`) VALUES (@idUser,@idAccount,'djg@meritbuilders.com','$2a$10$jaeADPhqXVidqgFfzlBmGe67ukee3Ay.klGA4xiLn5pj3OAed4WAe','0000-00-00 00:00:00','2015-06-16 09:34:58',146,'general-manager');
INSERT INTO `Email` (`address`, `idUser`,`idAccount`) VALUES ('djg@meritbuilders.com',@idUser,@idAccount);
INSERT INTO `Identification` (`idAccount`,`firstName`,`middleName`,`middleInitial`,`lastName`,`name`,`sex`,`guid`,`idUser`) VALUES (@idAccount,'David',null,null,'Gochenaur','David Gochenaur','Male','0fbfa716-70e4-11e5-a5be-000c2907b940',@idUser);
INSERT INTO `Tag` (`idAccount`,`type`,`identification`) VALUES ( @idAccount,'non-nfc','5431e0e5');
SET @idTag = LAST_INSERT_ID();
INSERT INTO `UserTag` (`idUser`,`idAccount`,`idTag`) VALUES (@idUser, @idAccount,@idTag);
INSERT INTO `Tag` (`idAccount`,`type`,`identification`) VALUES ( @idAccount,'non-nfc','7053ae36');
SET @idTag = LAST_INSERT_ID();
INSERT INTO `UserTag` (`idUser`,`idAccount`,`idTag`) VALUES (@idUser, @idAccount,@idTag);
INSERT INTO `Tag` (`idAccount`,`type`,`identification`) VALUES ( @idAccount,'non-nfc','d41184e9');
SET @idTag = LAST_INSERT_ID();
INSERT INTO `UserTag` (`idUser`,`idAccount`,`idTag`) VALUES (@idUser, @idAccount,@idTag);
INSERT INTO `Tag` (`idAccount`,`type`,`identification`) VALUES ( @idAccount,'non-nfc','a0ecac36');
SET @idTag = LAST_INSERT_ID();
INSERT INTO `UserTag` (`idUser`,`idAccount`,`idTag`) VALUES (@idUser, @idAccount,@idTag);
INSERT INTO `Employee` (`idAccount`,`idUser`,`hireDate`) VALUES (@idAccount,@idUser,'1987-01-01 00:00:00');
INSERT INTO `UserFile` (`idAccount`,`idUser`,`owner`,`permission`,`addDate`,`idFile`) VALUES (@idAccount,@idUser,1,3,'2015-07-01 00:00:00',1);
INSERT INTO `UserFile` (`idAccount`,`idUser`,`owner`,`permission`,`addDate`,`idFile`) VALUES (@idAccount,@idUser,1,3,'2015-07-01 00:00:00',2);
INSERT INTO `UserFile` (`idAccount`,`idUser`,`owner`,`permission`,`addDate`,`idFile`) VALUES (@idAccount,@idUser,1,3,'2015-08-23 00:00:00',3);
INSERT INTO `UserFile` (`idAccount`,`idUser`,`owner`,`permission`,`addDate`,`idFile`) VALUES (@idAccount,@idUser,1,3,'2015-08-23 00:00:00',4);
INSERT INTO `UserFile` (`idAccount`,`idUser`,`owner`,`permission`,`addDate`,`idFile`) VALUES (@idAccount,@idUser,1,3,'2015-08-23 00:00:00',5);
INSERT INTO `UserFile` (`idAccount`,`idUser`,`owner`,`permission`,`addDate`,`idFile`) VALUES (@idAccount,@idUser,1,3,'2015-08-23 00:00:00',6);
INSERT INTO `UserFile` (`idAccount`,`idUser`,`owner`,`permission`,`addDate`,`idFile`) VALUES (@idAccount,@idUser,1,3,'2015-08-23 00:00:00',7);
INSERT INTO `UserFile` (`idAccount`,`idUser`,`owner`,`permission`,`addDate`,`idFile`) VALUES (@idAccount,@idUser,1,3,'2015-08-23 00:00:00',8);
INSERT INTO `UserFile` (`idAccount`,`idUser`,`owner`,`permission`,`addDate`,`idFile`) VALUES (@idAccount,@idUser,1,3,'2015-08-23 00:00:00',9);
INSERT INTO `UserFile` (`idAccount`,`idUser`,`owner`,`permission`,`addDate`,`idFile`) VALUES (@idAccount,@idUser,1,3,'2015-08-23 00:00:00',10);
INSERT INTO `UserFile` (`idAccount`,`idUser`,`owner`,`permission`,`addDate`,`idFile`) VALUES (@idAccount,@idUser,1,3,'2015-08-23 00:00:00',11);
INSERT INTO `UserFile` (`idAccount`,`idUser`,`owner`,`permission`,`addDate`,`idFile`) VALUES (@idAccount,@idUser,1,3,'2015-08-23 00:00:00',12);
INSERT INTO `UserFile` (`idAccount`,`idUser`,`owner`,`permission`,`addDate`,`idFile`) VALUES (@idAccount,@idUser,1,3,'2015-08-23 00:00:00',13);
INSERT INTO `UserFile` (`idAccount`,`idUser`,`owner`,`permission`,`addDate`,`idFile`) VALUES (@idAccount,@idUser,1,3,'2015-08-23 00:00:00',14);
INSERT INTO `UserFile` (`idAccount`,`idUser`,`owner`,`permission`,`addDate`,`idFile`) VALUES (@idAccount,@idUser,1,3,'2015-08-23 00:00:00',65);
INSERT INTO `UserLevel` (`idUser`, `idLevel`,`idAccount`,`createDate`,`startDate`,`activityDate`,`endDate`) VALUES (@idUser,@gray,1,'2015-09-17 00:00:00', null,null,null);
source ./model/relational/table/transaction/configuration/meritbuilders/user-profile-image.sql
SET @idUser = 2;
INSERT INTO `User` (`idUser`,`idAccount`,`name`,`password`,`registerDate`,`activityDate`,`login`,`role`) VALUES (@idUser,@idAccount,'jerry@meritbuilders.com','$2a$10$FQe5x9FGf4C160hiQsubCOCAF8guhkMoCISRVjG4ku4ul1x4XHacO','0000-00-00 00:00:00','2015-06-16 16:54:00',41,'quality-manager');
INSERT INTO `Email` (`address`, `idUser`,`idAccount`) VALUES ('jerry@meritbuilders.com',@idUser,@idAccount);
INSERT INTO `Phone` (`idAccount`,`number`, `idUser`) VALUES (@idAccount,'3015148759',@idUser);
INSERT INTO `Employee` (`idAccount`,`idUser`,`hireDate`) VALUES (@idAccount,@idUser,'0000-00-00 00:00:00');
INSERT INTO `Tag` (`idAccount`,`type`,`identification`) VALUES ( @idAccount,'non-nfc','048b5ea2794880');
SET @idTag = LAST_INSERT_ID();
INSERT INTO `UserTag` (`idUser`,`idAccount`,`idTag`) VALUES (@idUser, @idAccount,@idTag);
INSERT INTO `Identification` (`idAccount`,`firstName`,`middleName`,`middleInitial`,`lastName`,`name`,`sex`,`guid`,`idUser`) VALUES (@idAccount,'Jerry',null,null,'Kopp','Gerald W. Kopp','Male','4d73d200-70e4-11e5-a5be-000c2907b940',@idUser);
INSERT INTO `UserFile` (`idAccount`,`idUser`,`owner`,`permission`,`addDate`,`idFile`) VALUES (@idAccount,@idUser,0,2,'2015-08-23 00:00:00',3);
INSERT INTO `UserFile` (`idAccount`,`idUser`,`owner`,`permission`,`addDate`,`idFile`) VALUES (@idAccount,@idUser,0,2,'2015-08-23 00:00:00',4);
INSERT INTO `UserFile` (`idAccount`,`idUser`,`owner`,`permission`,`addDate`,`idFile`) VALUES (@idAccount,@idUser,0,2,'2015-08-23 00:00:00',5);
INSERT INTO `UserFile` (`idAccount`,`idUser`,`owner`,`permission`,`addDate`,`idFile`) VALUES (@idAccount,@idUser,0,2,'2015-08-23 00:00:00',6);
INSERT INTO `UserFile` (`idAccount`,`idUser`,`owner`,`permission`,`addDate`,`idFile`) VALUES (@idAccount,@idUser,0,2,'2015-08-23 00:00:00',7);
INSERT INTO `UserFile` (`idAccount`,`idUser`,`owner`,`permission`,`addDate`,`idFile`) VALUES (@idAccount,@idUser,0,2,'2015-08-23 00:00:00',8);
INSERT INTO `UserFile` (`idAccount`,`idUser`,`owner`,`permission`,`addDate`,`idFile`) VALUES (@idAccount,@idUser,0,2,'2015-08-23 00:00:00',9);
INSERT INTO `UserFile` (`idAccount`,`idUser`,`owner`,`permission`,`addDate`,`idFile`) VALUES (@idAccount,@idUser,0,2,'2015-08-23 00:00:00',10);
INSERT INTO `UserFile` (`idAccount`,`idUser`,`owner`,`permission`,`addDate`,`idFile`) VALUES (@idAccount,@idUser,0,2,'2015-08-23 00:00:00',11);
INSERT INTO `UserFile` (`idAccount`,`idUser`,`owner`,`permission`,`addDate`,`idFile`) VALUES (@idAccount,@idUser,0,2,'2015-08-23 00:00:00',12);
INSERT INTO `UserFile` (`idAccount`,`idUser`,`owner`,`permission`,`addDate`,`idFile`) VALUES (@idAccount,@idUser,0,2,'2015-08-23 00:00:00',13);
INSERT INTO `UserLevel` (`idUser`, `idLevel`,`idAccount`,`createDate`,`startDate`,`activityDate`,`endDate`) VALUES (@idUser,@gray,1,'2015-09-17 00:00:00', null,null,null);
source ./model/relational/table/transaction/configuration/meritbuilders/user-profile-image.sql
source ./model/relational/table/transaction/test/metal-building-institute/mbi.sql
SET @idUser = 4;
INSERT INTO `User` (`idUser`,`idAccount`,`name`,`password`,`registerDate`,`activityDate`,`login`,`role`) VALUES (@idUser,@idAccount,'joaquin@meritbuilders.com','$2a$10$R7YLnRfQNMDVTAAAPswVU.nZCB/3GZ35suFpyvRwo7FAx0THs3qzW','0000-00-00 00:00:00','0000-00-00 00:00:00',0,'general-manager');
INSERT INTO `Employee` (`idAccount`,`idUser`,`hireDate`) VALUES (@idAccount,@idUser,'0000-00-00 00:00:00');
INSERT INTO `Tag` (`idAccount`,`type`,`identification`) VALUES ( @idAccount,'non-nfc','e4b6dfe5');
SET @idTag = LAST_INSERT_ID();
INSERT INTO `UserTag` (`idUser`,`idAccount`,`idTag`) VALUES (@idUser, @idAccount,@idTag);
INSERT INTO `Identification` (`idAccount`,`birthDate`,`firstName`,`middleName`,`middleInitial`,`lastName`,`name`,`sex`,`guid`,`idUser`) VALUES (@idAccount,'1988-11-19 00:00:00','Joaquin','Osvaldo','O','Rodriguez','Joaquin O. Rodriguez','Male','652da089-70e4-11e5-a5be-000c2907b940',@idUser);
INSERT INTO `UserLevel` (`idUser`, `idLevel`,`idAccount`,`createDate`,`startDate`,`activityDate`,`endDate`) VALUES (@idUser,@white,1,'2015-09-17 00:00:00', null,null,null);
source ./model/relational/table/transaction/configuration/meritbuilders/user-profile-image.sql
SET @idUser = 5;
INSERT INTO `User` (`idUser`,`idAccount`,`name`,`password`,`registerDate`,`activityDate`,`login`,`role`) VALUES (@idUser,@idAccount,'antonio@meritbuilders.com','$2a$10$faI5/nWulb2b.8GyXXEw8uwx10HK4Hd4ItmVfV1Wz2/ZCUKDww/ZO','0000-00-00 00:00:00','0000-00-00 00:00:00',0,'training-manager,safety-manager');
INSERT INTO `Email` (`address`, `idUser`,`idAccount`) VALUES ('antonio@meritbuilders.com',@idUser,@idAccount);
INSERT INTO `Phone` (`idAccount`,`number`, `idUser`) VALUES (@idAccount,'3015144956',@idUser);
INSERT INTO `Employee` (`idAccount`,`idUser`,`hireDate`) VALUES (@idAccount,@idUser,'0000-00-00 00:00:00');
#INSERT INTO `Tag` (`idAccount`,`type`,`identification`) VALUES ( @idAccount,'non-nfc','a402e1e5');
INSERT INTO `Identification` (`idAccount`,`firstName`,`middleName`,`middleInitial`,`lastName`,`name`,`sex`,`guid`,`idUser`) VALUES (@idAccount,'Antonio',null,null,'Ramirez','Antonio Ramirez Simancas','Male','6c217a22-70e4-11e5-a5be-000c2907b940',@idUser);
INSERT INTO `Tag` (`idAccount`,`type`,`identification`) VALUES ( @idAccount,'non-nfc','0418c5a2794881');
SET @idTag = LAST_INSERT_ID();
INSERT INTO `UserTag` (`idUser`,`idAccount`,`idTag`) VALUES (@idUser, @idAccount,@idTag);
INSERT INTO `Tag` (`idAccount`,`type`,`identification`) VALUES ( @idAccount,'non-nfc','4006ab36');
SET @idTag = LAST_INSERT_ID();
INSERT INTO `UserTag` (`idUser`,`idAccount`,`idTag`) VALUES (@idUser, @idAccount,@idTag);
INSERT INTO `UserFile` (`idAccount`,`idUser`,`owner`,`permission`,`addDate`,`idFile`) VALUES (@idAccount,@idUser,1,2,'2015-08-23 00:00:00',14);
INSERT INTO `UserLevel` (`idUser`, `idLevel`,`idAccount`,`createDate`,`startDate`,`activityDate`,`endDate`) VALUES (@idUser,@gray,1,'2015-09-17 00:00:00', null,null,null);
source ./model/relational/table/transaction/configuration/meritbuilders/user-profile-image.sql
SET @idUser = 6;
INSERT INTO `User` (`idUser`,`idAccount`,`name`,`password`,`registerDate`,`activityDate`,`login`,`role`) VALUES (@idUser,@idAccount,'eamaya','$2a$10$R7YLnRfQNMDVTAAAPswVU.nZCB/3GZ35suFpyvRwo7FAx0THs3qzW','0000-00-00 00:00:00','0000-00-00 00:00:00',0,'worker');
INSERT INTO `Employee` (`idAccount`,`idUser`,`hireDate`) VALUES (@idAccount,@idUser,'0000-00-00 00:00:00');
INSERT INTO `Tag` (`idAccount`,`type`,`identification`) VALUES ( @idAccount,'non-nfc','04505ca2794880');
SET @idTag = LAST_INSERT_ID();
INSERT INTO `UserTag` (`idUser`,`idAccount`,`idTag`) VALUES (@idUser, @idAccount,@idTag);
INSERT INTO `Identification` (`idAccount`,`firstName`,`middleName`,`middleInitial`,`lastName`,`name`,`sex`,`guid`,`idUser`) VALUES (@idAccount,'Excequiel',null,null,'Amaya','Excequiel Amaya','Male','7cc580fc-70e4-11e5-a5be-000c2907b940', @idUser);
INSERT INTO `UserLevel` (`idUser`, `idLevel`,`idAccount`,`createDate`,`startDate`,`activityDate`,`endDate`) VALUES (@idUser,@white,1,'2015-09-17 00:00:00', null,null,null);
source ./model/relational/table/transaction/configuration/meritbuilders/user-profile-image.sql
SET @idUser = 7;
INSERT INTO `User` (`idUser`,`idAccount`,`name`,`password`,`registerDate`,`activityDate`,`login`,`role`) VALUES (@idUser,@idAccount,'rarevalo','$2a$10$R7YLnRfQNMDVTAAAPswVU.nZCB/3GZ35suFpyvRwo7FAx0THs3qzW','0000-00-00 00:00:00','0000-00-00 00:00:00',0,'worker');
INSERT INTO `Employee` (`idAccount`,`idUser`,`hireDate`) VALUES (@idAccount,@idUser,'0000-00-00 00:00:00');
INSERT INTO `Tag` (`idAccount`,`type`,`identification`) VALUES ( @idAccount,'non-nfc','042a5ba2794880');
SET @idTag = LAST_INSERT_ID();
INSERT INTO `UserTag` (`idUser`,`idAccount`,`idTag`) VALUES (@idUser, @idAccount,@idTag);
INSERT INTO `Identification` (`idAccount`,`firstName`,`middleName`,`middleInitial`,`lastName`,`name`,`sex`,`guid`,`idUser`) VALUES (@idAccount,'Ramon',null,null,'Arevalo','Jose Ramon Arevalo','Male','9490668f-70e4-11e5-a5be-000c2907b940', @idUser);
INSERT INTO `UserLevel` (`idUser`, `idLevel`,`idAccount`,`createDate`,`startDate`,`activityDate`,`endDate`) VALUES (@idUser,@white,1,'2015-09-17 00:00:00', null,null,null);
source ./model/relational/table/transaction/configuration/meritbuilders/user-profile-image.sql
source ./model/relational/table/transaction/test/metal-building-institute/mbi.sql
SET @idUser = 8;
INSERT INTO `User` (`idUser`,`idAccount`,`name`,`password`,`registerDate`,`activityDate`,`login`,`role`) VALUES (@idUser,@idAccount,'mboteo','$2a$10$R7YLnRfQNMDVTAAAPswVU.nZCB/3GZ35suFpyvRwo7FAx0THs3qzW','0000-00-00 00:00:00','0000-00-00 00:00:00',0,'worker');
INSERT INTO `Employee` (`idAccount`,`idUser`,`hireDate`) VALUES (@idAccount,@idUser,'2005-10-23 00:00:00');
INSERT INTO `Identification` (`idAccount`,`firstName`,`middleName`,`middleInitial`,`lastName`,`name`,`sex`,`guid`,`idUser`) VALUES (@idAccount,'Marvin',null,null,'Boteo','Marvin J. Boteo Medrano','Male','847c7c59-70e4-11e5-a5be-000c2907b940', @idUser);
INSERT INTO `Tag` (`idAccount`,`type`,`identification`) VALUES ( @idAccount,'non-nfc','040166a2794881');
SET @idTag = LAST_INSERT_ID();
INSERT INTO `UserTag` (`idUser`,`idAccount`,`idTag`) VALUES (@idUser, @idAccount,@idTag);
INSERT INTO `Tag` (`idAccount`,`type`,`identification`) VALUES ( @idAccount,'non-nfc','2072ae36');
SET @idTag = LAST_INSERT_ID();
INSERT INTO `UserTag` (`idUser`,`idAccount`,`idTag`) VALUES (@idUser, @idAccount,@idTag);
INSERT INTO `UserLevel` (`idUser`, `idLevel`,`idAccount`,`createDate`,`startDate`,`activityDate`,`endDate`) VALUES (@idUser,@white,1,'2015-09-17 00:00:00', null,null,null);
source ./model/relational/table/transaction/configuration/meritbuilders/user-profile-image.sql
source ./model/relational/table/transaction/test/metal-building-institute/mbi.sql
SET @idUser = 9;
INSERT INTO `User` (`idUser`,`idAccount`,`name`,`password`,`registerDate`,`activityDate`,`login`,`role`) VALUES (@idUser,@idAccount,'benedicto@meritbuilders.com','$2a$10$mAtNG50vC1EF9p/PXeuUrOLeeBJ9eL12LqSCy3FLcFWKbsWmcYEHu','0000-00-00 00:00:00','0000-00-00 00:00:00',0,'supervisor');
INSERT INTO `Email` (`address`, `idUser`,`idAccount`) VALUES ('benedicto@meritbuilders.com', @idUser,@idAccount);
INSERT INTO `Phone` (`idAccount`,`number`, `idUser`) VALUES (@idAccount,'2404058895', @idUser);
INSERT INTO `Employee` (`idAccount`,`idUser`,`hireDate`) VALUES (@idAccount,@idUser,'2005-03-20 00:00:00');
INSERT INTO `Tag` (`idAccount`,`type`,`identification`) VALUES ( @idAccount,'non-nfc','0440eca2794880');
SET @idTag = LAST_INSERT_ID();
INSERT INTO `UserTag` (`idUser`,`idAccount`,`idTag`) VALUES (@idUser, @idAccount,@idTag);
INSERT INTO `Identification` (`idAccount`,`birthDate`,`firstName`,`middleName`,`middleInitial`,`lastName`,`name`,`sex`,`guid`,`idUser`) VALUES (@idAccount,'1984-00-00 00:00:00','Benedicto',null,null,'Carpio','Benedicto Carpio','Male','a0739877-70e4-11e5-a5be-000c2907b940', @idUser);
INSERT INTO `UserLevel` (`idUser`, `idLevel`,`idAccount`,`createDate`,`startDate`,`activityDate`,`endDate`) VALUES (@idUser,@white,1,'2015-09-17 00:00:00', null,null,null);
source ./model/relational/table/transaction/configuration/meritbuilders/user-profile-image.sql
source ./model/relational/table/transaction/test/metal-building-institute/mbi.sql
SET @idUser = 10;
INSERT INTO `User` (`idUser`,`idAccount`,`name`,`password`,`registerDate`,`activityDate`,`login`,`role`) VALUES (@idUser,@idAccount,'dcarpio','$2a$10$R7YLnRfQNMDVTAAAPswVU.nZCB/3GZ35suFpyvRwo7FAx0THs3qzW','0000-00-00 00:00:00','0000-00-00 00:00:00',0,'mentor, worker');
INSERT INTO `Employee` (`idAccount`,`idUser`,`hireDate`) VALUES (@idAccount,@idUser,'2005-06-29 00:00:00');
INSERT INTO `Identification` (`idAccount`,`firstName`,`middleName`,`middleInitial`,`lastName`,`name`,`sex`,`guid`,`idUser`) VALUES (@idAccount,'Demitrio',null,null,'Carpio','Demitrio Carpio','Male','a8d420f8-70e4-11e5-a5be-000c2907b940',@idUser);
INSERT INTO `Tag` (`idAccount`,`type`,`identification`) VALUES ( @idAccount,'non-nfc','0427b0a2794880');
SET @idTag = LAST_INSERT_ID();
INSERT INTO `UserTag` (`idUser`,`idAccount`,`idTag`) VALUES (@idUser, @idAccount,@idTag);
INSERT INTO `Tag` (`idAccount`,`type`,`identification`) VALUES ( @idAccount,'non-nfc','547ee0e5');
SET @idTag = LAST_INSERT_ID();
INSERT INTO `UserTag` (`idUser`,`idAccount`,`idTag`) VALUES (@idUser, @idAccount,@idTag);
INSERT INTO `Tag` (`idAccount`,`type`,`identification`) VALUES ( @idAccount,'non-nfc','d081ab36');
SET @idTag = LAST_INSERT_ID();
INSERT INTO `UserTag` (`idUser`,`idAccount`,`idTag`) VALUES (@idUser, @idAccount,@idTag);
INSERT INTO `UserLevel` (`idUser`, `idLevel`,`idAccount`,`createDate`,`startDate`,`activityDate`,`endDate`) VALUES (@idUser,@white,1,'2015-09-17 00:00:00', null,null,null);
source ./model/relational/table/transaction/configuration/meritbuilders/user-profile-image.sql
source ./model/relational/table/transaction/test/metal-building-institute/mbi.sql
SET @idUser = 11;
INSERT INTO `User` (`idUser`,`idAccount`,`name`,`password`,`registerDate`,`activityDate`,`login`,`role`) VALUES (@idUser,@idAccount,'jcarpio','$2a$10$R7YLnRfQNMDVTAAAPswVU.nZCB/3GZ35suFpyvRwo7FAx0THs3qzW','0000-00-00 00:00:00','0000-00-00 00:00:00',0,'worker');
INSERT INTO `Employee` (`idAccount`,`idUser`,`hireDate`) VALUES (@idAccount,@idUser,'0000-00-00 00:00:00');
INSERT INTO `Tag` (`idAccount`,`type`,`identification`) VALUES ( @idAccount,'non-nfc','04c80ba2794884');
SET @idTag = LAST_INSERT_ID();
INSERT INTO `UserTag` (`idUser`,`idAccount`,`idTag`) VALUES (@idUser, @idAccount,@idTag);
INSERT INTO `Identification` (`idAccount`,`birthDate`,`firstName`,`middleName`,`middleInitial`,`lastName`,`name`,`sex`,`guid`,`idUser`) VALUES (@idAccount,'1983-00-00 00:00:00','Julio',null,null,'Carpio','Julio R. Carpio Arana','Male','afc2f2a3-70e4-11e5-a5be-000c2907b940', @idUser);
INSERT INTO `UserLevel` (`idUser`, `idLevel`,`idAccount`,`createDate`,`startDate`,`activityDate`,`endDate`) VALUES (@idUser,@white,1,'2015-09-17 00:00:00', null,null,null);
source ./model/relational/table/transaction/configuration/meritbuilders/user-profile-image.sql
source ./model/relational/table/transaction/test/metal-building-institute/mbi.sql
SET @idUser = 12;
INSERT INTO `User` (`idUser`,`idAccount`,`name`,`password`,`registerDate`,`activityDate`,`login`,`role`) VALUES (@idUser,@idAccount,'carlos@meritbuilders.com','$2a$10$E2b9YxGmutV27Xe8yaLMp.kS4p591.AvABwSNS1eKKQ2aE.RsBPlS','0000-00-00 00:00:00','0000-00-00 00:00:00',0,'supervisor');
INSERT INTO `management`.`Email` (`address`, `idUser`,`idAccount`) VALUES ('carlos@meritbuilders.com',@idUser,@idAccount);
INSERT INTO `Phone` (`idAccount`,`number`, `idUser`) VALUES (@idAccount,'3015148761',@idUser);
INSERT INTO `Employee` (`idAccount`,`idUser`,`hireDate`) VALUES (@idAccount,@idUser,'0000-00-00 00:00:00');
INSERT INTO `Identification` (`idAccount`,`firstName`,`middleName`,`middleInitial`,`lastName`,`name`,`sex`,`guid`,`idUser`) VALUES (@idAccount,'Carlos',null,null,'Castillo','Carlos Castillo Lopez','Male','ba0a9e34-70e4-11e5-a5be-000c2907b940',@idUser);
INSERT INTO `UserLevel` (`idUser`, `idLevel`,`idAccount`,`createDate`,`startDate`,`activityDate`,`endDate`) VALUES (@idUser,@white,1,'2015-09-17 00:00:00', null,null,null);
INSERT INTO `Tag` (`idAccount`,`type`,`identification`) VALUES ( @idAccount,'non-nfc','048c13a2794880');
SET @idTag = LAST_INSERT_ID();
INSERT INTO `UserTag` (`idUser`,`idAccount`,`idTag`) VALUES (@idUser, @idAccount,@idTag);
source ./model/relational/table/transaction/configuration/meritbuilders/user-profile-image.sql
source ./model/relational/table/transaction/test/metal-building-institute/mbi.sql
SET @idUser = 13;
INSERT INTO `User` (`idUser`,`idAccount`,`name`,`password`,`registerDate`,`activityDate`,`login`,`role`) VALUES (@idUser,@idAccount,'dchicas','$2a$10$R7YLnRfQNMDVTAAAPswVU.nZCB/3GZ35suFpyvRwo7FAx0THs3qzW','0000-00-00 00:00:00','0000-00-00 00:00:00',0,'mentor, worker');
INSERT INTO `Employee` (`idAccount`,`idUser`,`hireDate`) VALUES (@idAccount,@idUser,'2008-03-11 00:00:00');
INSERT INTO `Tag` (`idAccount`,`type`,`identification`) VALUES ( @idAccount,'non-nfc','046d81a2794881');
SET @idTag = LAST_INSERT_ID();
INSERT INTO `UserTag` (`idUser`,`idAccount`,`idTag`) VALUES (@idUser, @idAccount,@idTag);
INSERT INTO `Identification` (`idAccount`,`firstName`,`middleName`,`middleInitial`,`lastName`,`name`,`nickName`,`sex`,`guid`,`idUser`) VALUES (@idAccount,'Dagoberto',null,null,'Chicas','Dagoberto Chicas Salvador','Dago','Male','c2270914-70e4-11e5-a5be-000c2907b940', @idUser);
INSERT INTO `UserLevel` (`idUser`, `idLevel`,`idAccount`,`createDate`,`startDate`,`activityDate`,`endDate`) VALUES (@idUser,@white,1,'2015-09-17 00:00:00', null,null,null);
source ./model/relational/table/transaction/configuration/meritbuilders/user-profile-image.sql
SET @idUser = 14;
INSERT INTO `User` (`idUser`,`idAccount`,`name`,`password`,`registerDate`,`activityDate`,`login`,`role`) VALUES (@idUser,@idAccount,'rchicas','$2a$10$R7YLnRfQNMDVTAAAPswVU.nZCB/3GZ35suFpyvRwo7FAx0THs3qzW','0000-00-00 00:00:00','0000-00-00 00:00:00',0,'worker');
INSERT INTO `Employee` (`idAccount`,`idUser`,`hireDate`) VALUES (@idAccount,@idUser,'0000-00-00 00:00:00');
INSERT INTO `Tag` (`idAccount`,`type`,`identification`) VALUES ( @idAccount,'non-nfc','046f71a2794880');
SET @idTag = LAST_INSERT_ID();
INSERT INTO `UserTag` (`idUser`,`idAccount`,`idTag`) VALUES (@idUser, @idAccount,@idTag);
INSERT INTO `Identification` (`idAccount`,`firstName`,`middleName`,`middleInitial`,`lastName`,`name`,`sex`,`guid`,`idUser`) VALUES (@idAccount,'Reynaldo',null,null,'Chicas','Jose Reynaldo Chicas Salvador','Male','ca2122ea-70e4-11e5-a5be-000c2907b940', @idUser);
INSERT INTO `UserLevel` (`idUser`, `idLevel`,`idAccount`,`createDate`,`startDate`,`activityDate`,`endDate`) VALUES (@idUser,@white,1,'2015-09-17 00:00:00', null,null,null);
source ./model/relational/table/transaction/configuration/meritbuilders/user-profile-image.sql
SET @idUser = 15;
INSERT INTO `User` (`idUser`,`idAccount`,`name`,`password`,`registerDate`,`activityDate`,`login`,`role`) VALUES (@idUser,@idAccount,'walter@meritbuilders.com','$2a$10$meaDyRULHzuW4N15ortg6OjIUvFKK8aF2qfaADRcA/8RbWk/xH9s6','0000-00-00 00:00:00','0000-00-00 00:00:00',0,'supervisor');
INSERT INTO `Email` (`address`, `idUser`,`idAccount`) VALUES ('walter@meritbuilders.com',@idUser,@idAccount);
INSERT INTO `Phone` (`idAccount`,`number`, `idUser`) VALUES (@idAccount,'3015143667',@idUser);
INSERT INTO `Employee` (`idAccount`,`idUser`,`hireDate`) VALUES (@idAccount,@idUser,'0000-00-00 00:00:00');
INSERT INTO `Tag` (`idAccount`,`type`,`identification`) VALUES ( @idAccount,'non-nfc','046d80a2794881');
SET @idTag = LAST_INSERT_ID();
INSERT INTO `UserTag` (`idUser`,`idAccount`,`idTag`) VALUES (@idUser, @idAccount,@idTag);
INSERT INTO `Identification` (`idAccount`,`firstName`,`middleName`,`middleInitial`,`lastName`,`name`,`sex`,`guid`,`idUser`) VALUES (@idAccount,'Walter',null,null,'Chicas','Jose Walter Chicas Salvador','Male','e843628b-70e4-11e5-a5be-000c2907b940', @idUser);
INSERT INTO `UserLevel` (`idUser`, `idLevel`,`idAccount`,`createDate`,`startDate`,`activityDate`,`endDate`) VALUES (@idUser,@white,1,'2015-09-17 00:00:00', null,null,null);
source ./model/relational/table/transaction/configuration/meritbuilders/user-profile-image.sql
source ./model/relational/table/transaction/test/metal-building-institute/mbi.sql
SET @idUser = 16;
INSERT INTO `User` (`idUser`,`idAccount`,`name`,`password`,`registerDate`,`activityDate`,`login`,`role`) VALUES (@idUser,@idAccount,'nacho@meritbuilders.com','$2a$10$j/S51g688Qp30HbEaMZ.Ru38yuflmGwsLsnT.A1W47igXQHJ.xmG.','0000-00-00 00:00:00','0000-00-00 00:00:00',0,'supervisor');
INSERT INTO `Email` (`address`, `idUser`,`idAccount`) VALUES ('nacho@meritbuilders.com',@idUser,@idAccount);
INSERT INTO `Phone` (`idAccount`,`number`, `idUser`) VALUES (@idAccount,'3015148766',@idUser);
INSERT INTO `Employee` (`idAccount`,`idUser`,`hireDate`) VALUES (@idAccount,@idUser,'0000-00-00 00:00:00');
INSERT INTO `Tag` (`idAccount`,`type`,`identification`) VALUES ( @idAccount,'non-nfc','04b071a2794880');
SET @idTag = LAST_INSERT_ID();
INSERT INTO `UserTag` (`idUser`,`idAccount`,`idTag`) VALUES (@idUser, @idAccount,@idTag);
INSERT INTO `Identification` (`idAccount`,`birthDate`,`nickName`,`firstName`,`middleName`,`middleInitial`,`lastName`,`name`,`sex`,`guid`,`idUser`) VALUES (@idAccount,'1955-00-00 00:00:00','Nacho','Atanacio',null,null,'Cristobal','Atanacio Cristobal Villegas','Male','dc4922ee-70e4-11e5-a5be-000c2907b940',@idUser);
INSERT INTO `UserLevel` (`idUser`, `idLevel`,`idAccount`,`createDate`,`startDate`,`activityDate`,`endDate`) VALUES (@idUser,@white,1,'2015-09-17 00:00:00', null,null,null);
source ./model/relational/table/transaction/configuration/meritbuilders/user-profile-image.sql
SET @idUser = 17;
INSERT INTO `User` (`idUser`,`idAccount`,`name`,`password`,`registerDate`,`activityDate`,`login`,`role`) VALUES (@idUser,@idAccount,'fdelcid','$2a$10$R7YLnRfQNMDVTAAAPswVU.nZCB/3GZ35suFpyvRwo7FAx0THs3qzW','0000-00-00 00:00:00','0000-00-00 00:00:00',0,'worker');
INSERT INTO `Employee` (`idAccount`,`idUser`,`hireDate`) VALUES (@idAccount,@idUser,'0000-00-00 00:00:00');
INSERT INTO `Tag` (`idAccount`,`type`,`identification`) VALUES ( @idAccount,'non-nfc','04ad24a2794880');
SET @idTag = LAST_INSERT_ID();
INSERT INTO `UserTag` (`idUser`,`idAccount`,`idTag`) VALUES (@idUser, @idAccount,@idTag);
INSERT INTO `Identification` (`idAccount`,`firstName`,`middleName`,`middleInitial`,`lastName`,`name`,`sex`,`guid`,`idUser`) VALUES (@idAccount,'Felix',null,null,null,'Felix A. Del Cid Blanco','Male','012d7814-70e5-11e5-a5be-000c2907b940',@idUser);
INSERT INTO `UserLevel` (`idUser`, `idLevel`,`idAccount`,`createDate`,`startDate`,`activityDate`,`endDate`) VALUES (@idUser,@white,1,'2015-09-17 00:00:00', null,null,null);
source ./model/relational/table/transaction/configuration/meritbuilders/user-profile-image.sql
SET @idUser = 18;
INSERT INTO `User` (`idUser`,`idAccount`,`name`,`password`,`registerDate`,`activityDate`,`login`,`role`) VALUES (@idUser,@idAccount,'cesar@meritbuilders.com','$2a$10$ijlgYFAmYM702dr1QCxHm.zkFTZ3D6Y9YpomoXGSN6haq3DNcrCeO','0000-00-00 00:00:00','0000-00-00 00:00:00',0,'supervisor');
#INSERT INTO `Email` (`address`, `idUser`,`idAccount`) VALUES ('cesar@meritbuilders.com',@idUser,@idAccount);
#INSERT INTO `Phone` (`idAccount`,`number`, `idUser`) VALUES (@idAccount,'3015149449',@idUser);
#INSERT INTO `Employee` (`idAccount`,`idUser`,`hireDate`) VALUES (@idAccount,@idUser,'0000-00-00 00:00:00');
#INSERT INTO `Identification` (`idAccount`,`firstName`,`middleName`,`middleInitial`,`lastName`,`name`,`sex`,`guid`,`idUser`) VALUES (@idAccount,'Cesar',null,null,'Escamilla','Cesar Escamilla Cristobal','Male','f618b942-70e4-11e5-a5be-000c2907b940',@idUser);
#INSERT INTO `UserLevel` (`idUser`, `idLevel`,`idAccount`,`createDate`,`startDate`,`activityDate`,`endDate`) VALUES (@idUser,@white,1,'2015-09-17 00:00:00', null,null,null);
#source ./model/relational/table/transaction/configuration/meritbuilders/user-profile-image.sql
SET @idUser = 19;
INSERT INTO `User` (`idUser`,`idAccount`,`name`,`password`,`registerDate`,`activityDate`,`login`,`role`) VALUES (@idUser,@idAccount,'cespino','$2a$10$R7YLnRfQNMDVTAAAPswVU.nZCB/3GZ35suFpyvRwo7FAx0THs3qzW','0000-00-00 00:00:00','0000-00-00 00:00:00',0,'worker');
INSERT INTO `Employee` (`idAccount`,`idUser`,`hireDate`) VALUES (@idAccount,@idUser,'0000-00-00 00:00:00');

INSERT INTO `Tag` (`idAccount`,`type`,`identification`) VALUES ( @idAccount,'non-nfc','044bb0a2794881');
SET @idTag = LAST_INSERT_ID();
INSERT INTO `UserTag` (`idUser`,`idAccount`,`idTag`) VALUES (@idUser, @idAccount,@idTag);
INSERT INTO `Identification` (`idAccount`,`birthDate`,`firstName`,`middleName`,`middleInitial`,`lastName`,`name`,`sex`,`guid`,`idUser`) VALUES (@idAccount,'1974-00-00 00:00:00','Cesar',null,null,'Espino','Cesar A. Espino Ortiz','Male','0ec57b10-70e5-11e5-a5be-000c2907b940',@idUser);
INSERT INTO `UserLevel` (`idUser`, `idLevel`,`idAccount`,`createDate`,`startDate`,`activityDate`,`endDate`) VALUES (@idUser,@white,1,'2015-09-17 00:00:00', null,null,null);
source ./model/relational/table/transaction/configuration/meritbuilders/user-profile-image.sql
SET @idUser = 20;
INSERT INTO `User` (`idUser`,`idAccount`,`name`,`password`,`registerDate`,`activityDate`,`login`,`role`) VALUES (@idUser,@idAccount,'egonzalez','$2a$10$R7YLnRfQNMDVTAAAPswVU.nZCB/3GZ35suFpyvRwo7FAx0THs3qzW','0000-00-00 00:00:00','0000-00-00 00:00:00',0,'supervisor');
INSERT INTO `Employee` (`idAccount`,`idUser`,`hireDate`) VALUES (@idAccount,@idUser,'0000-00-00 00:00:00');
INSERT INTO `Tag` (`idAccount`,`type`,`identification`) VALUES ( @idAccount,'non-nfc','046c5ea2794880');
SET @idTag = LAST_INSERT_ID();
INSERT INTO `UserTag` (`idUser`,`idAccount`,`idTag`) VALUES (@idUser, @idAccount,@idTag);
INSERT INTO `Identification` (`idAccount`,`firstName`,`middleName`,`middleInitial`,`lastName`,`name`,`sex`,`guid`,`idUser`) VALUES (@idAccount,'Edgar',null,null,'Exquivel','Edgar A. Esquivel Gonzalez','Male','1d505ecb-70e5-11e5-a5be-000c2907b940',@idUser);
INSERT INTO `UserLevel` (`idUser`, `idLevel`,`idAccount`,`createDate`,`startDate`,`activityDate`,`endDate`) VALUES (@idUser,@white,1,'2015-09-17 00:00:00', null,null,null);
source ./model/relational/table/transaction/configuration/meritbuilders/user-profile-image.sql
source ./model/relational/table/transaction/test/metal-building-institute/mbi.sql
SET @idUser = 21;
INSERT INTO `User` (`idUser`,`idAccount`,`name`,`password`,`registerDate`,`activityDate`,`login`,`role`) VALUES (@idUser,@idAccount,'lgalacia','$2a$10$R7YLnRfQNMDVTAAAPswVU.nZCB/3GZ35suFpyvRwo7FAx0THs3qzW','0000-00-00 00:00:00','0000-00-00 00:00:00',0,'worker');
INSERT INTO `Employee` (`idAccount`,`idUser`,`hireDate`) VALUES (@idAccount,@idUser,'0000-00-00 00:00:00');
INSERT INTO `Tag` (`idAccount`,`type`,`identification`) VALUES ( @idAccount,'non-nfc','04d0d9a2794880');
SET @idTag = LAST_INSERT_ID();
INSERT INTO `UserTag` (`idUser`,`idAccount`,`idTag`) VALUES (@idUser, @idAccount,@idTag);
INSERT INTO `Identification` (`idAccount`,`firstName`,`middleName`,`middleInitial`,`lastName`,`name`,`sex`,`guid`,`idUser`) VALUES (@idAccount,'Leonel',null,null,'Galacia','Edger Leonel Galacia Y Galacia','Male','271a6249-70e5-11e5-a5be-000c2907b940',@idUser);
INSERT INTO `UserLevel` (`idUser`, `idLevel`,`idAccount`,`createDate`,`startDate`,`activityDate`,`endDate`) VALUES (@idUser,@white,1,'2015-09-17 00:00:00', null,null,null);
source ./model/relational/table/transaction/configuration/meritbuilders/user-profile-image.sql
SET @idUser = 22;
INSERT INTO `User` (`idUser`,`idAccount`,`name`,`password`,`registerDate`,`activityDate`,`login`,`role`) VALUES (@idUser,@idAccount,'edgar@meritbuilders.com','$2a$10$ZprwZSujn9A0ozyJ6xcwtekImmPVR0ZYt4UNzNyJJSd4taNszrMhK','0000-00-00 00:00:00','0000-00-00 00:00:00',0,'supervisor');
INSERT INTO `Email` (`address`, `idUser`,`idAccount`) VALUES ('edgar@meritbuilders.com', @idUser,@idAccount);
INSERT INTO `Phone` (`idAccount`,`number`, `idUser`) VALUES (@idAccount,'3015148764',@idUser);
INSERT INTO `Employee` (`idAccount`,`idUser`,`hireDate`) VALUES (@idAccount,@idUser,'0000-00-00 00:00:00');
INSERT INTO `Tag` (`idAccount`,`type`,`identification`) VALUES ( @idAccount,'non-nfc','045e80a2794881');
SET @idTag = LAST_INSERT_ID();
INSERT INTO `UserTag` (`idUser`,`idAccount`,`idTag`) VALUES (@idUser, @idAccount,@idTag);
INSERT INTO `Identification` (`idAccount`,`firstName`,`middleName`,`middleInitial`,`lastName`,`name`,`sex`,`guid`,`idUser`) VALUES (@idAccount,'Edgar',null,null,'Gonzalez','Edgar E. Gonzalez Jaimes','Male','2ef73d7a-70e5-11e5-a5be-000c2907b940',@idUser);
INSERT INTO `UserLevel` (`idUser`, `idLevel`,`idAccount`,`createDate`,`startDate`,`activityDate`,`endDate`) VALUES (@idUser,@white,1,'2015-09-17 00:00:00', null,null,null);
source ./model/relational/table/transaction/configuration/meritbuilders/user-profile-image.sql
SET @idUser = 23;
INSERT INTO `User` (`idUser`,`idAccount`,`name`,`password`,`registerDate`,`activityDate`,`login`,`role`) VALUES (@idUser,@idAccount,'aguevara','$2a$10$R7YLnRfQNMDVTAAAPswVU.nZCB/3GZ35suFpyvRwo7FAx0THs3qzW','0000-00-00 00:00:00','0000-00-00 00:00:00',0,'worker');
INSERT INTO `Employee` (`idAccount`,`idUser`,`hireDate`) VALUES (@idAccount,@idUser,'2005-01-23 00:00:00');
INSERT INTO `Identification` (`idAccount`,`firstName`,`middleName`,`middleInitial`,`lastName`,`name`,`sex`,`guid`,`idUser`) VALUES (@idAccount,'Alfonso',null,null,'Guevara','Jose Alfonso Guevara','Male','529b86e8-70e5-11e5-a5be-000c2907b940',@idUser);
INSERT INTO `Tag` (`idAccount`,`type`,`identification`) VALUES ( @idAccount,'non-nfc','04b72da2794880');
SET @idTag = LAST_INSERT_ID();
INSERT INTO `UserTag` (`idUser`,`idAccount`,`idTag`) VALUES (@idUser, @idAccount,@idTag);
INSERT INTO `UserLevel` (`idUser`, `idLevel`,`idAccount`,`createDate`,`startDate`,`activityDate`,`endDate`) VALUES (@idUser,@gray,1,'2015-09-17 00:00:00', null,null,null);
source ./model/relational/table/transaction/configuration/meritbuilders/user-profile-image.sql
SET @idUser = 24;
INSERT INTO `User` (`idUser`,`idAccount`,`name`,`password`,`registerDate`,`activityDate`,`login`,`role`) VALUES (@idUser,@idAccount,'lguevara','$2a$10$R7YLnRfQNMDVTAAAPswVU.nZCB/3GZ35suFpyvRwo7FAx0THs3qzW','0000-00-00 00:00:00','0000-00-00 00:00:00',0,'worker');
INSERT INTO `Employee` (`idAccount`,`idUser`,`hireDate`) VALUES (@idAccount,@idUser,'2005-07-23 00:00:00');
INSERT INTO `Tag` (`idAccount`,`type`,`identification`) VALUES ( @idAccount,'non-nfc','04d5d9a2794880');
SET @idTag = LAST_INSERT_ID();
INSERT INTO `UserTag` (`idUser`,`idAccount`,`idTag`) VALUES (@idUser, @idAccount,@idTag);
INSERT INTO `Identification` (`idAccount`,`firstName`,`middleName`,`middleInitial`,`lastName`,`name`,`sex`,`guid`,`idUser`) VALUES (@idAccount,'Luis',null,null,'Guevara','Luis Miguel Guevara Velasquez','Male','5851d682-70e5-11e5-a5be-000c2907b940',@idUser);
INSERT INTO `UserLevel` (`idUser`, `idLevel`,`idAccount`,`createDate`,`startDate`,`activityDate`,`endDate`) VALUES (@idUser,@white,1,'2015-09-17 00:00:00', null,null,null);
source ./model/relational/table/transaction/configuration/meritbuilders/user-profile-image.sql
source ./model/relational/table/transaction/test/metal-building-institute/mbi.sql
SET @idUser = 25;
INSERT INTO `User` (`idUser`,`idAccount`,`name`,`password`,`registerDate`,`activityDate`,`login`,`role`) VALUES (@idUser,@idAccount,'fhernandez','$2a$10$R7YLnRfQNMDVTAAAPswVU.nZCB/3GZ35suFpyvRwo7FAx0THs3qzW','0000-00-00 00:00:00','0000-00-00 00:00:00',0,'mentor, worker');
INSERT INTO `Employee` (`idAccount`,`idUser`,`hireDate`) VALUES (@idAccount,@idUser,'2005-06-29 00:00:00');
INSERT INTO `Tag` (`idAccount`,`type`,`identification`) VALUES ( @idAccount,'non-nfc','046375a2794881');
SET @idTag = LAST_INSERT_ID();
INSERT INTO `UserTag` (`idUser`,`idAccount`,`idTag`) VALUES (@idUser, @idAccount,@idTag);
INSERT INTO `Identification` (`idAccount`,`firstName`,`middleName`,`middleInitial`,`lastName`,`name`,`nickName`,`sex`,`guid`,`idUser`) VALUES (@idAccount,'Francisco',null,null,'Hernandez','Francisco Hernandez Benites','Paco','Male','73c51af4-70e5-11e5-a5be-000c2907b940',@idUser);
INSERT INTO `UserLevel` (`idUser`, `idLevel`,`idAccount`,`createDate`,`startDate`,`activityDate`,`endDate`) VALUES (@idUser,@white,1,'2015-09-17 00:00:00', null,null,null);
source ./model/relational/table/transaction/configuration/meritbuilders/user-profile-image.sql
source ./model/relational/table/transaction/test/metal-building-institute/mbi.sql
SET @idUser = 26;
INSERT INTO `User` (`idUser`,`idAccount`,`name`,`password`,`registerDate`,`activityDate`,`login`,`role`) VALUES (@idUser,@idAccount,'jhernandez','$2a$10$R7YLnRfQNMDVTAAAPswVU.nZCB/3GZ35suFpyvRwo7FAx0THs3qzW','0000-00-00 00:00:00','0000-00-00 00:00:00',0,'worker');
INSERT INTO `Employee` (`idAccount`,`idUser`,`hireDate`) VALUES (@idAccount,@idUser,'2015-02-17 00:00:00');
INSERT INTO `Identification` (`idAccount`,`firstName`,`middleName`,`middleInitial`,`lastName`,`name`,`sex`,`guid`,`idUser`) VALUES (@idAccount,'Jonathan',null,null,'Hernandez','Jonathan Hernandez','Male','79a4fdd0-70e5-11e5-a5be-000c2907b940',@idUser);
INSERT INTO `UserLevel` (`idUser`, `idLevel`,`idAccount`,`createDate`,`startDate`,`activityDate`,`endDate`) VALUES (@idUser,@white,1,'2015-09-17 00:00:00', null,null,null);
source ./model/relational/table/transaction/configuration/meritbuilders/user-profile-image.sql
SET @idUser = 27;
INSERT INTO `User` (`idUser`,`idAccount`,`name`,`password`,`registerDate`,`activityDate`,`login`,`role`) VALUES (@idUser,@idAccount,'chris@meritbuilders.com','$2a$10$JcyFRmSzziqK.LXrRlDpMO4Red.JA3PPynyHblI4kOO.o5DhoJwAe','0000-00-00 00:00:00','0000-00-00 00:00:00',0,'mechanic');
INSERT INTO `Employee` (`idAccount`,`idUser`,`hireDate`) VALUES (@idAccount,@idUser,'0000-00-00 00:00:00');
INSERT INTO `Tag` (`idAccount`,`type`,`identification`) VALUES ( @idAccount,'non-nfc','04d513a2794880');
SET @idTag = LAST_INSERT_ID();
INSERT INTO `UserTag` (`idUser`,`idAccount`,`idTag`) VALUES (@idUser, @idAccount,@idTag);
INSERT INTO `Identification` (`idAccount`,`firstName`,`middleName`,`middleInitial`,`lastName`,`name`,`sex`,`guid`,`idUser`) VALUES (@idAccount,'Chris',null,null,'Hood','Christopher L. Hood','Male','80f2fe35-70e5-11e5-a5be-000c2907b940',@idUser);
source ./model/relational/table/transaction/configuration/meritbuilders/user-profile-image.sql
SET @idUser = 28;
INSERT INTO `User` (`idUser`,`idAccount`,`name`,`password`,`registerDate`,`activityDate`,`login`,`role`) VALUES (@idUser,@idAccount,'mlopez','$2a$10$R7YLnRfQNMDVTAAAPswVU.nZCB/3GZ35suFpyvRwo7FAx0THs3qzW','0000-00-00 00:00:00','0000-00-00 00:00:00',0,'worker');
INSERT INTO `Employee` (`idAccount`,`idUser`,`hireDate`) VALUES (@idAccount,@idUser,'0000-00-00 00:00:00');
INSERT INTO `Identification` (`idAccount`,`firstName`,`middleName`,`middleInitial`,`lastName`,`name`,`sex`,`guid`,`idUser`) VALUES (@idAccount,'Mynor',null,null,'Lopez','Mynor Lopez Figueroa','Male','8a6b2852-70e5-11e5-a5be-000c2907b940',@idUser);
INSERT INTO `UserLevel` (`idUser`, `idLevel`,`idAccount`,`createDate`,`startDate`,`activityDate`,`endDate`) VALUES (@idUser,@white,1,'2015-09-17 00:00:00', null,null,null);
source ./model/relational/table/transaction/configuration/meritbuilders/user-profile-image.sql
SET @idUser = 29;
INSERT INTO `User` (`idUser`,`idAccount`,`name`,`password`,`registerDate`,`activityDate`,`login`,`role`) VALUES (@idUser,@idAccount,'rmartinez','$2a$10$R7YLnRfQNMDVTAAAPswVU.nZCB/3GZ35suFpyvRwo7FAx0THs3qzW','0000-00-00 00:00:00','0000-00-00 00:00:00',0,'worker');
INSERT INTO `Employee` (`idAccount`,`idUser`,`hireDate`) VALUES (@idAccount,@idUser,'0000-00-00 00:00:00');
INSERT INTO `Tag` (`idAccount`,`type`,`identification`) VALUES ( @idAccount,'non-nfc','043470a2794880');
SET @idTag = LAST_INSERT_ID();
INSERT INTO `UserTag` (`idUser`,`idAccount`,`idTag`) VALUES (@idUser, @idAccount,@idTag);
INSERT INTO `Identification` (`idAccount`,`firstName`,`middleName`,`middleInitial`,`lastName`,`name`,`sex`,`guid`,`idUser`) VALUES (@idAccount,'Rodolfo',null,null,'Martinez','Rodolfo Martinez Zamora','Male','9443c38e-70e5-11e5-a5be-000c2907b940',@idUser);
INSERT INTO `UserLevel` (`idUser`, `idLevel`,`idAccount`,`createDate`,`startDate`,`activityDate`,`endDate`) VALUES (@idUser,@white,1,'2015-09-17 00:00:00', null,null,null);
source ./model/relational/table/transaction/configuration/meritbuilders/user-profile-image.sql
SET @idUser = 30;
INSERT INTO `User` (`idUser`,`idAccount`,`name`,`password`,`registerDate`,`activityDate`,`login`,`role`) VALUES (@idUser,@idAccount,'emiranda','$2a$10$R7YLnRfQNMDVTAAAPswVU.nZCB/3GZ35suFpyvRwo7FAx0THs3qzW','0000-00-00 00:00:00','0000-00-00 00:00:00',0,'worker');
INSERT INTO `Employee` (`idAccount`,`idUser`,`hireDate`) VALUES (@idAccount,@idUser,'0000-00-00 00:00:00');
INSERT INTO `Tag` (`idAccount`,`type`,`identification`) VALUES ( @idAccount,'non-nfc','04286ba2794880');
SET @idTag = LAST_INSERT_ID();
INSERT INTO `UserTag` (`idUser`,`idAccount`,`idTag`) VALUES (@idUser, @idAccount,@idTag);
INSERT INTO `Identification` (`idAccount`,`firstName`,`middleName`,`middleInitial`,`lastName`,`name`,`sex`,`guid`,`idUser`) VALUES (@idAccount,'Enrique',null,null,'Miranda','Enrique Miranda Campos','Male','99b489c4-70e5-11e5-a5be-000c2907b940',@idUser);
INSERT INTO `UserLevel` (`idUser`, `idLevel`,`idAccount`,`createDate`,`startDate`,`activityDate`,`endDate`) VALUES (@idUser,@white,1,'2015-09-17 00:00:00', null,null,null);
source ./model/relational/table/transaction/configuration/meritbuilders/user-profile-image.sql
SET @idUser = 31;
INSERT INTO `User` (`idUser`,`idAccount`,`name`,`password`,`registerDate`,`activityDate`,`login`,`role`) VALUES (@idUser,@idAccount,'fmiranda','$2a$10$R7YLnRfQNMDVTAAAPswVU.nZCB/3GZ35suFpyvRwo7FAx0THs3qzW','0000-00-00 00:00:00','0000-00-00 00:00:00',0,'worker');
INSERT INTO `Employee` (`idAccount`,`idUser`,`hireDate`) VALUES (@idAccount,@idUser,'0000-00-00 00:00:00');

INSERT INTO `Tag` (`idAccount`,`type`,`identification`) VALUES ( @idAccount,'non-nfc','045581a2794881');
SET @idTag = LAST_INSERT_ID();
INSERT INTO `UserTag` (`idUser`,`idAccount`,`idTag`) VALUES (@idUser, @idAccount,@idTag);
INSERT INTO `Identification` (`idAccount`,`firstName`,`middleName`,`middleInitial`,`lastName`,`name`,`sex`,`guid`,`idUser`) VALUES (@idAccount,'Fredy',null,null,'Miranda','Fredy Miranda Mendoza','Male','a64eaf80-70e5-11e5-a5be-000c2907b940',@idUser);
INSERT INTO `UserLevel` (`idUser`, `idLevel`,`idAccount`,`createDate`,`startDate`,`activityDate`,`endDate`) VALUES (@idUser,@white,1,'2015-09-17 00:00:00', null,null,null);
source ./model/relational/table/transaction/configuration/meritbuilders/user-profile-image.sql
SET @idUser = 32;
INSERT INTO `User` (`idUser`,`idAccount`,`name`,`password`,`registerDate`,`activityDate`,`login`,`role`) VALUES (@idUser,@idAccount,'mmanherz','$2a$10$R7YLnRfQNMDVTAAAPswVU.nZCB/3GZ35suFpyvRwo7FAx0THs3qzW','0000-00-00 00:00:00','0000-00-00 00:00:00',0,'general-manager');
INSERT INTO `Employee` (`idAccount`,`idUser`,`hireDate`) VALUES (@idAccount,@idUser,'1996-11-18 07:00:00');
INSERT INTO `Tag` (`idAccount`,`type`,`identification`) VALUES ( @idAccount,'non-nfc','045d66a2794881');
SET @idTag = LAST_INSERT_ID();
INSERT INTO `UserTag` (`idUser`,`idAccount`,`idTag`) VALUES (@idUser, @idAccount,@idTag);
INSERT INTO `Identification` (`idAccount`,`firstName`,`middleName`,`middleInitial`,`lastName`,`name`,`sex`,`guid`,`idUser`) VALUES (@idAccount,'Mike',null,null,'Manherz','Michael B. Manherz','Male','ae11e01d-70e5-11e5-a5be-000c2907b940',@idUser);
INSERT INTO `UserLevel` (`idUser`, `idLevel`,`idAccount`,`createDate`,`startDate`,`activityDate`,`endDate`) VALUES (@idUser,@gray,1,'2015-09-17 00:00:00', null,null,null);
source ./model/relational/table/transaction/configuration/meritbuilders/user-profile-image.sql
SET @idUser = 33;
INSERT INTO `User` (`idUser`,`idAccount`,`name`,`password`,`registerDate`,`activityDate`,`login`,`role`) VALUES (@idUser,@idAccount,'hpadilla','$2a$10$R7YLnRfQNMDVTAAAPswVU.nZCB/3GZ35suFpyvRwo7FAx0THs3qzW','0000-00-00 00:00:00','0000-00-00 00:00:00',0,'mentor, worker');
INSERT INTO `Employee` (`idAccount`,`idUser`,`hireDate`) VALUES (@idAccount,@idUser,'0000-00-00 00:00:00');
INSERT INTO `Identification` (`idAccount`,`firstName`,`middleName`,`middleInitial`,`lastName`,`name`,`sex`,`guid`,`idUser`) VALUES (@idAccount,'Hector',null,null,'Padilla','Hector Padilla','Male','bd9ab6a2-70e5-11e5-a5be-000c2907b940',@idUser);
INSERT INTO `Tag` (`idAccount`,`type`,`identification`) VALUES ( @idAccount,'non-nfc','042db0a2794880');
SET @idTag = LAST_INSERT_ID();
INSERT INTO `UserTag` (`idUser`,`idAccount`,`idTag`) VALUES (@idUser, @idAccount,@idTag);
INSERT INTO `UserLevel` (`idUser`, `idLevel`,`idAccount`,`createDate`,`startDate`,`activityDate`,`endDate`) VALUES (@idUser,@white,1,'2015-09-17 00:00:00', null,null,null);
source ./model/relational/table/transaction/configuration/meritbuilders/user-profile-image.sql
SET @idUser = 34;
INSERT INTO `User` (`idUser`,`idAccount`,`name`,`password`,`registerDate`,`activityDate`,`login`,`role`) VALUES (@idUser,@idAccount,'jpalancia','$2a$10$R7YLnRfQNMDVTAAAPswVU.nZCB/3GZ35suFpyvRwo7FAx0THs3qzW','0000-00-00 00:00:00','0000-00-00 00:00:00',0,'worker');
INSERT INTO `Employee` (`idAccount`,`idUser`,`hireDate`) VALUES (@idAccount,@idUser,'0000-00-00 00:00:00');
INSERT INTO `Tag` (`idAccount`,`type`,`identification`) VALUES ( @idAccount,'non-nfc','044755a2794881');
SET @idTag = LAST_INSERT_ID();
INSERT INTO `UserTag` (`idUser`,`idAccount`,`idTag`) VALUES (@idUser, @idAccount,@idTag);
INSERT INTO `Identification` (`idAccount`,`firstName`,`middleName`,`middleInitial`,`lastName`,`name`,`sex`,`guid`,`idUser`) VALUES (@idAccount,'Jose',null,null,'Palencia','Jose Pablo Palencia Barrientos','Male','c3d89729-70e5-11e5-a5be-000c2907b940',@idUser);
INSERT INTO `UserLevel` (`idUser`, `idLevel`,`idAccount`,`createDate`,`startDate`,`activityDate`,`endDate`) VALUES (@idUser,@white,1,'2015-09-17 00:00:00', null,null,null);
source ./model/relational/table/transaction/configuration/meritbuilders/user-profile-image.sql
SET @idUser = 35;
INSERT INTO `User` (`idUser`,`idAccount`,`name`,`password`,`registerDate`,`activityDate`,`login`,`role`) VALUES (@idUser,@idAccount,'dramirez','$2a$10$R7YLnRfQNMDVTAAAPswVU.nZCB/3GZ35suFpyvRwo7FAx0THs3qzW','0000-00-00 00:00:00','0000-00-00 00:00:00',0,'mentor, worker');
INSERT INTO `Employee` (`idAccount`,`idUser`,`hireDate`) VALUES (@idAccount,@idUser,'0000-00-00 00:00:00');
INSERT INTO `Identification` (`idAccount`,`firstName`,`middleName`,`middleInitial`,`lastName`,`name`,`sex`,`guid`,`idUser`) VALUES (@idAccount,'Daniel',null,null,'Ramirez','Daniel A. Ramirez','Male','c9851f72-70e5-11e5-a5be-000c2907b940',@idUser);
INSERT INTO `Tag` (`idAccount`,`type`,`identification`) VALUES ( @idAccount,'non-nfc','041c6fa2794881');
SET @idTag = LAST_INSERT_ID();
INSERT INTO `UserTag` (`idUser`,`idAccount`,`idTag`) VALUES (@idUser, @idAccount,@idTag);
INSERT INTO `UserLevel` (`idUser`, `idLevel`,`idAccount`,`createDate`,`startDate`,`activityDate`,`endDate`) VALUES (@idUser,@white,1,'2015-09-17 00:00:00', null,null,null);
source ./model/relational/table/transaction/configuration/meritbuilders/user-profile-image.sql
SET @idUser = 36;
INSERT INTO `User` (`idUser`,`idAccount`,`name`,`password`,`registerDate`,`activityDate`,`login`,`role`) VALUES (@idUser,@idAccount,'rramirez','$2a$10$R7YLnRfQNMDVTAAAPswVU.nZCB/3GZ35suFpyvRwo7FAx0THs3qzW','0000-00-00 00:00:00','0000-00-00 00:00:00',0,'worker');
INSERT INTO `Employee` (`idAccount`,`idUser`,`hireDate`) VALUES (@idAccount,@idUser,'0000-00-00 00:00:00');
INSERT INTO `Identification` (`idAccount`,`firstName`,`middleName`,`middleInitial`,`lastName`,`name`,`sex`,`guid`,`idUser`) VALUES (@idAccount,'Richardo',null,null,'Ramirez','Richardo Ramirez','Male','ce6f6f4e-70e5-11e5-a5be-000c2907b940',@idUser);
INSERT INTO `UserLevel` (`idUser`, `idLevel`,`idAccount`,`createDate`,`startDate`,`activityDate`,`endDate`) VALUES (@idUser,@white,1,'2015-09-17 00:00:00', null,null,null);
source ./model/relational/table/transaction/configuration/meritbuilders/user-profile-image.sql
SET @idUser = 37;
INSERT INTO `User` (`idUser`,`idAccount`,`name`,`password`,`registerDate`,`activityDate`,`login`,`role`) VALUES (@idUser,@idAccount,'vsamayoa','$2a$10$R7YLnRfQNMDVTAAAPswVU.nZCB/3GZ35suFpyvRwo7FAx0THs3qzW','0000-00-00 00:00:00','0000-00-00 00:00:00',0,'worker');
INSERT INTO `Employee` (`idAccount`,`idUser`,`hireDate`) VALUES (@idAccount,@idUser,'2005-06-29 00:00:00');
INSERT INTO `Tag` (`idAccount`,`type`,`identification`) VALUES ( @idAccount,'non-nfc','048d13a2794880');
SET @idTag = LAST_INSERT_ID();
INSERT INTO `UserTag` (`idUser`,`idAccount`,`idTag`) VALUES (@idUser, @idAccount,@idTag);
INSERT INTO `Identification` (`idAccount`,`firstName`,`middleName`,`middleInitial`,`lastName`,`name`,`sex`,`guid`,`idUser`) VALUES (@idAccount,'Victor',null,null,'Samayoa','Victor M. Samayoa','Male','d31d0b0d-70e5-11e5-a5be-000c2907b940',@idUser);
INSERT INTO `UserLevel` (`idUser`, `idLevel`,`idAccount`,`createDate`,`startDate`,`activityDate`,`endDate`) VALUES (@idUser,@white,1,'2015-09-17 00:00:00', null,null,null);
source ./model/relational/table/transaction/configuration/meritbuilders/user-profile-image.sql
SET @idUser = 38;
INSERT INTO `User` (`idUser`,`idAccount`,`name`,`password`,`registerDate`,`activityDate`,`login`,`role`) VALUES (@idUser,@idAccount,'mserrano','$2a$10$R7YLnRfQNMDVTAAAPswVU.nZCB/3GZ35suFpyvRwo7FAx0THs3qzW','0000-00-00 00:00:00','0000-00-00 00:00:00',0,'worker');
INSERT INTO `Employee` (`idAccount`,`idUser`,`hireDate`) VALUES (@idAccount,@idUser,'0000-00-00 00:00:00');
INSERT INTO `Identification` (`idAccount`,`firstName`,`middleName`,`middleInitial`,`lastName`,`name`,`sex`,`guid`,`idUser`) VALUES (@idAccount,'Miguel',null,null,'Serrano','Miguel A. Serrano Rodriguez','Male','d726ffe8-70e5-11e5-a5be-000c2907b940',@idUser);
INSERT INTO `UserLevel` (`idUser`, `idLevel`,`idAccount`,`createDate`,`startDate`,`activityDate`,`endDate`) VALUES (@idUser,@white,1,'2015-09-17 00:00:00', null,null,null);
source ./model/relational/table/transaction/configuration/meritbuilders/user-profile-image.sql
SET @idUser = 39;
INSERT INTO `User` (`idUser`,`idAccount`,`name`,`password`,`registerDate`,`activityDate`,`login`,`role`) VALUES (@idUser,@idAccount,'jsimon','$2a$10$R7YLnRfQNMDVTAAAPswVU.nZCB/3GZ35suFpyvRwo7FAx0THs3qzW','0000-00-00 00:00:00','0000-00-00 00:00:00',0,'worker');
INSERT INTO `Employee` (`idAccount`,`idUser`,`hireDate`) VALUES (@idAccount,@idUser,'0000-00-00 00:00:00');
INSERT INTO `Tag` (`idAccount`,`type`,`identification`) VALUES ( @idAccount,'non-nfc','04e513a2794880');
SET @idTag = LAST_INSERT_ID();
INSERT INTO `UserTag` (`idUser`,`idAccount`,`idTag`) VALUES (@idUser, @idAccount,@idTag);
INSERT INTO `Identification` (`idAccount`,`firstName`,`middleName`,`middleInitial`,`lastName`,`name`,`sex`,`guid`,`idUser`) VALUES (@idAccount,'Juan',null,null,'Simon','Juan Simon Corona','Male','dc91a7ec-70e5-11e5-a5be-000c2907b940',@idUser);
INSERT INTO `UserLevel` (`idUser`, `idLevel`,`idAccount`,`createDate`,`startDate`,`activityDate`,`endDate`) VALUES (@idUser,@white,1,'2015-09-17 00:00:00', null,null,null);
source ./model/relational/table/transaction/configuration/meritbuilders/user-profile-image.sql
SET @idUser = 40;
INSERT INTO `User` (`idUser`,`idAccount`,`name`,`password`,`registerDate`,`activityDate`,`login`,`role`) VALUES (@idUser,@idAccount,'ltobar','$2a$10$R7YLnRfQNMDVTAAAPswVU.nZCB/3GZ35suFpyvRwo7FAx0THs3qzW','0000-00-00 00:00:00','0000-00-00 00:00:00',0,'worker');
INSERT INTO `Employee` (`idAccount`,`idUser`,`hireDate`) VALUES (@idAccount,@idUser,'0000-00-00 00:00:00');
INSERT INTO `Tag` (`idAccount`,`type`,`identification`) VALUES ( @idAccount,'non-nfc','041a75a2794881');
SET @idTag = LAST_INSERT_ID();
INSERT INTO `UserTag` (`idUser`,`idAccount`,`idTag`) VALUES (@idUser, @idAccount,@idTag);
INSERT INTO `Identification` (`idAccount`,`firstName`,`middleName`,`middleInitial`,`lastName`,`name`,`sex`,`guid`,`idUser`) VALUES (@idAccount,'Lester',null,null,'Tobar','Lester N. Tobar Gonzalez','Male','e4eae7c3-70e5-11e5-a5be-000c2907b940',@idUser);
INSERT INTO `UserLevel` (`idUser`, `idLevel`,`idAccount`,`createDate`,`startDate`,`activityDate`,`endDate`) VALUES (@idUser,@white,1,'2015-09-17 00:00:00', null,null,null);
source ./model/relational/table/transaction/configuration/meritbuilders/user-profile-image.sql
SET @idUser = 41;
INSERT INTO `User` (`idUser`,`idAccount`,`name`,`password`,`registerDate`,`activityDate`,`login`,`role`) VALUES (@idUser,@idAccount,'jtorres','$2a$10$R7YLnRfQNMDVTAAAPswVU.nZCB/3GZ35suFpyvRwo7FAx0THs3qzW','0000-00-00 00:00:00','0000-00-00 00:00:00',0,'worker');
INSERT INTO `Employee` (`idAccount`,`idUser`,`hireDate`) VALUES (@idAccount,@idUser,'2015-02-17 00:00:00');
INSERT INTO `Tag` (`idAccount`,`type`,`identification`) VALUES ( @idAccount,'non-nfc','042475a2794881');
SET @idTag = LAST_INSERT_ID();
INSERT INTO `UserTag` (`idUser`,`idAccount`,`idTag`) VALUES (@idUser, @idAccount,@idTag);
INSERT INTO `Identification` (`idAccount`,`firstName`,`middleName`,`middleInitial`,`lastName`,`name`,`sex`,`guid`,`idUser`) VALUES (@idAccount,'Jamilton',null,null,'Torres','Jamilton Francisco Torres Barahona','Male','eca93788-70e5-11e5-a5be-000c2907b940',@idUser);
INSERT INTO `UserLevel` (`idUser`, `idLevel`,`idAccount`,`createDate`,`startDate`,`activityDate`,`endDate`) VALUES (@idUser,@white,1,'2015-09-17 00:00:00', null,null,null);
source ./model/relational/table/transaction/configuration/meritbuilders/user-profile-image.sql
SET @idUser = 42;
INSERT INTO `User` (`idUser`,`idAccount`,`name`,`password`,`registerDate`,`activityDate`,`login`,`role`) VALUES (@idUser,@idAccount,'eventura','$2a$10$R7YLnRfQNMDVTAAAPswVU.nZCB/3GZ35suFpyvRwo7FAx0THs3qzW','0000-00-00 00:00:00','0000-00-00 00:00:00',0,'worker');
INSERT INTO `Employee` (`idAccount`,`idUser`,`hireDate`) VALUES (@idAccount,@idUser,'0000-00-00 00:00:00');

INSERT INTO `Identification` (`idAccount`,`firstName`,`middleName`,`middleInitial`,`lastName`,`name`,`sex`,`guid`,`idUser`) VALUES (@idAccount,'Edvin',null,null,'Ventura','Edvin J. Ventura Cervantes','Male','f2a2bd2d-70e5-11e5-a5be-000c2907b940',@idUser);
INSERT INTO `Tag` (`idAccount`,`type`,`identification`) VALUES ( @idAccount,'non-nfc','045570a2794880');
SET @idTag = LAST_INSERT_ID();
INSERT INTO `UserTag` (`idUser`,`idAccount`,`idTag`) VALUES (@idUser, @idAccount,@idTag);
INSERT INTO `UserLevel` (`idUser`, `idLevel`,`idAccount`,`createDate`,`startDate`,`activityDate`,`endDate`) VALUES (@idUser,@white,1,'2015-09-17 00:00:00', null,null,null);
source ./model/relational/table/transaction/configuration/meritbuilders/user-profile-image.sql
SET @idUser = 43;
INSERT INTO `User` (`idUser`,`idAccount`,`name`,`password`,`registerDate`,`activityDate`,`login`,`role`) VALUES (@idUser,@idAccount,'bvillegas','$2a$10$R7YLnRfQNMDVTAAAPswVU.nZCB/3GZ35suFpyvRwo7FAx0THs3qzW','0000-00-00 00:00:00','0000-00-00 00:00:00',0,'worker');
INSERT INTO `Identification` (`idAccount`,`firstName`,`middleName`,`middleInitial`,`lastName`,`name`,`sex`,`guid`,`idUser`) VALUES (@idAccount,'Benito',null,null,'Villegas','Benito Villegas Espinoza','Male','fc4470f5-70e5-11e5-a5be-000c2907b940',@idUser);
INSERT INTO `Tag` (`idAccount`,`type`,`identification`) VALUES ( @idAccount,'non-nfc','048380a2794881');
SET @idTag = LAST_INSERT_ID();
INSERT INTO `UserTag` (`idUser`,`idAccount`,`idTag`) VALUES (@idUser, @idAccount,@idTag);
INSERT INTO `UserLevel` (`idUser`, `idLevel`,`idAccount`,`createDate`,`startDate`,`activityDate`,`endDate`) VALUES (@idUser,@white,1,'2015-09-17 00:00:00', null,null,null);
INSERT INTO `Employee` (`idAccount`,`idUser`,`hireDate`) VALUES (@idAccount,@idUser,'0000-00-00 00:00:00');
source ./model/relational/table/transaction/configuration/meritbuilders/user-profile-image.sql
SET @idUser = 44;
INSERT INTO `User` (`idUser`,`idAccount`,`name`,`password`,`registerDate`,`activityDate`,`login`,`role`) VALUES (@idUser,@idAccount,'ozepeda','$2a$10$R7YLnRfQNMDVTAAAPswVU.nZCB/3GZ35suFpyvRwo7FAx0THs3qzW','0000-00-00 00:00:00','0000-00-00 00:00:00',0,'worker');
INSERT INTO `Employee` (`idAccount`,`idUser`,`hireDate`) VALUES (@idAccount,@idUser,'0000-00-00 00:00:00');
INSERT INTO `Tag` (`idAccount`,`type`,`identification`) VALUES ( @idAccount,'non-nfc','04c3e8a2794880');
SET @idTag = LAST_INSERT_ID();
INSERT INTO `UserTag` (`idUser`,`idAccount`,`idTag`) VALUES (@idUser, @idAccount,@idTag);
INSERT INTO `Identification` (`idAccount`,`birthDate`,`firstName`,`middleName`,`middleInitial`,`lastName`,`name`,`sex`,`guid`,`idUser`) VALUES (@idAccount,'1978-00-00 00:00:00','Omar',null,null,'Zepeda','Melvin Omar Zepeda Sensente','Male','01efc769-70e6-11e5-a5be-000c2907b940',@idUser);
INSERT INTO `UserLevel` (`idUser`, `idLevel`,`idAccount`,`createDate`,`startDate`,`activityDate`,`endDate`) VALUES (@idUser,@white,1,'2015-09-17 00:00:00', null,null,null);
source ./model/relational/table/transaction/configuration/meritbuilders/user-profile-image.sql
source ./model/relational/table/transaction/test/metal-building-institute/mbi.sql
SET @idUser = 45;
INSERT INTO `User` (`idUser`,`idAccount`,`name`,`password`,`registerDate`,`activityDate`,`login`,`role`) VALUES (@idUser,@idAccount,'odiaz','$2a$10$R7YLnRfQNMDVTAAAPswVU.nZCB/3GZ35suFpyvRwo7FAx0THs3qzW','0000-00-00 00:00:00','0000-00-00 00:00:00',0,'worker');
INSERT INTO `Employee` (`idAccount`,`idUser`,`hireDate`) VALUES (@idAccount,@idUser,'2015-05-19 00:00:00');

INSERT INTO `Tag` (`idAccount`,`type`,`identification`) VALUES ( @idAccount,'non-nfc','04b077a2794880');
SET @idTag = LAST_INSERT_ID();
INSERT INTO `UserTag` (`idUser`,`idAccount`,`idTag`) VALUES (@idUser, @idAccount,@idTag);
INSERT INTO `Identification` (`idAccount`,`firstName`,`middleName`,`middleInitial`,`lastName`,`name`,`sex`,`guid`,`idUser`) VALUES (@idAccount,'Oscar',null,null,'Diaz','Oscar Hernan Diaz Mendez','Male','08c89c8e-70e6-11e5-a5be-000c2907b940',@idUser);
INSERT INTO `UserLevel` (`idUser`, `idLevel`,`idAccount`,`createDate`,`startDate`,`activityDate`,`endDate`) VALUES (@idUser,@white,1,'2015-09-17 00:00:00', null,null,null);
source ./model/relational/table/transaction/configuration/meritbuilders/user-profile-image.sql
SET @idUser = 46;
INSERT INTO `User` (`idUser`,`idAccount`,`name`,`password`,`registerDate`,`activityDate`,`login`,`role`) VALUES (@idUser,@idAccount,'dtejada','$2a$10$R7YLnRfQNMDVTAAAPswVU.nZCB/3GZ35suFpyvRwo7FAx0THs3qzW','0000-00-00 00:00:00','0000-00-00 00:00:00',0,'worker');
INSERT INTO `Employee` (`idAccount`,`idUser`,`hireDate`) VALUES (@idAccount,@idUser,'0000-00-00 00:00:00');
INSERT INTO `Identification` (`idAccount`,`firstName`,`middleName`,`middleInitial`,`lastName`,`name`,`sex`,`guid`,`idUser`) VALUES (@idAccount,'Douglas',null,null,'Tejada','Douglas A. Tejada Moran','Male','15e56790-70e6-11e5-a5be-000c2907b940',@idUser);
INSERT INTO `UserLevel` (`idUser`, `idLevel`,`idAccount`,`createDate`,`startDate`,`activityDate`,`endDate`) VALUES (@idUser,@white,1,'2015-09-17 00:00:00', null,null,null);
source ./model/relational/table/transaction/configuration/meritbuilders/user-profile-image.sql
SET @idUser = 47;
INSERT INTO `User` (`idUser`,`idAccount`,`name`,`password`,`registerDate`,`activityDate`,`login`,`role`) VALUES (@idUser,@idAccount,'malia@meritbuilders.com','$2a$10$a2XxeSEjS1hyF7g.d7XXe.t1aI9orJB2jEKu5IukNYWrrgnpfKAAG','0000-00-00 00:00:00','0000-00-00 00:00:00',0,'general-manager');
INSERT INTO `Employee` (`idAccount`,`idUser`,`hireDate`) VALUES (@idAccount,@idUser,'0000-00-00 00:00:00');
INSERT INTO `Identification` (`idAccount`,`firstName`,`middleName`,`middleInitial`,`lastName`,`name`,`sex`,`guid`,`idUser`) VALUES (@idAccount,'Malia',null,null,'Kaiser','Malia Kaiser','Female','1ba925c6-70e6-11e5-a5be-000c2907b940',@idUser);
INSERT INTO `UserLevel` (`idUser`, `idLevel`,`idAccount`,`createDate`,`startDate`,`activityDate`,`endDate`) VALUES (@idUser,@gray,1,'2015-09-17 00:00:00', null,null,null);
source ./model/relational/table/transaction/configuration/meritbuilders/user-profile-image.sql
SET @idUser = 51;
INSERT INTO `User` (`idUser`,`idAccount`,`name`,`password`,`registerDate`,`activityDate`,`login`,`role`) VALUES (@idUser,@idAccount,'jgarcia','$2a$10$R7YLnRfQNMDVTAAAPswVU.nZCB/3GZ35suFpyvRwo7FAx0THs3qzW','0000-00-00 00:00:00','0000-00-00 00:00:00',0,'worker');
INSERT INTO `Employee` (`idAccount`,`idUser`,`hireDate`) VALUES (@idAccount,@idUser,'2015-08-06 00:00:00');

INSERT INTO `Tag` (`idAccount`,`type`,`identification`) VALUES ( @idAccount,'non-nfc','048781a2794881');
SET @idTag = LAST_INSERT_ID();
INSERT INTO `UserTag` (`idUser`,`idAccount`,`idTag`) VALUES (@idUser, @idAccount,@idTag);
INSERT INTO `Identification` (`idAccount`,`firstName`,`middleName`,`middleInitial`,`lastName`,`name`,`sex`,`guid`,`idUser`) VALUES (@idAccount,'Jose',null,null,'Garcia','Jose Franciso Garcia Alvarado','Male','25029fbf-70e6-11e5-a5be-000c2907b940',@idUser);
INSERT INTO `UserLevel` (`idUser`, `idLevel`,`idAccount`,`createDate`,`startDate`,`activityDate`,`endDate`) VALUES (@idUser,@white,1,'2015-09-17 00:00:00', null,null,null);
source ./model/relational/table/transaction/configuration/meritbuilders/user-profile-image.sql
SET @idUser = 52;
INSERT INTO `User` (`idUser`,`idAccount`,`name`,`password`,`registerDate`,`activityDate`,`login`,`role`) VALUES (@idUser,@idAccount,'jmunoz','$2a$10$R7YLnRfQNMDVTAAAPswVU.nZCB/3GZ35suFpyvRwo7FAx0THs3qzW','0000-00-00 00:00:00','0000-00-00 00:00:00',0,'worker');
INSERT INTO `Employee` (`idAccount`,`idUser`,`hireDate`) VALUES (@idAccount,@idUser,'2015-08-06 00:00:00');
INSERT INTO `Tag` (`idAccount`,`type`,`identification`) VALUES ( @idAccount,'non-nfc','041e6fa2794881');
SET @idTag = LAST_INSERT_ID();
INSERT INTO `UserTag` (`idUser`,`idAccount`,`idTag`) VALUES (@idUser, @idAccount,@idTag);
INSERT INTO `Identification` (`idAccount`,`firstName`,`middleName`,`middleInitial`,`lastName`,`name`,`sex`,`guid`,`idUser`) VALUES (@idAccount,'Jose',null,'M','Munoz','Jose M. Munoz','Male','2bb22b24-70e6-11e5-a5be-000c2907b940',@idUser);
INSERT INTO `UserLevel` (`idUser`, `idLevel`,`idAccount`,`createDate`,`startDate`,`activityDate`,`endDate`) VALUES (@idUser,@white,1,'2015-09-17 00:00:00', null,null,null);
source ./model/relational/table/transaction/configuration/meritbuilders/user-profile-image.sql
SET @idUser = 53;
INSERT INTO `User` (`idUser`,`idAccount`,`name`,`password`,`registerDate`,`activityDate`,`login`,`role`) VALUES (@idUser,@idAccount,'jfgarcia','$2a$10$R7YLnRfQNMDVTAAAPswVU.nZCB/3GZ35suFpyvRwo7FAx0THs3qzW','0000-00-00 00:00:00','0000-00-00 00:00:00',0,'worker');
INSERT INTO `Employee` (`idAccount`,`idUser`,`hireDate`) VALUES (@idAccount,@idUser,'2015-08-06 00:00:00');
INSERT INTO `Tag` (`idAccount`,`type`,`identification`) VALUES ( @idAccount,'non-nfc','048f80a2794881');
SET @idTag = LAST_INSERT_ID();
INSERT INTO `UserTag` (`idUser`,`idAccount`,`idTag`) VALUES (@idUser, @idAccount,@idTag);
INSERT INTO `Identification` (`idAccount`,`firstName`,`middleName`,`middleInitial`,`lastName`,`name`,`sex`,`guid`,`idUser`) VALUES (@idAccount,'Josue',null,null,'Garcia','Josue Frank Garcia Villalobos','Male','30179bc0-70e6-11e5-a5be-000c2907b940',@idUser);
INSERT INTO `UserLevel` (`idUser`, `idLevel`,`idAccount`,`createDate`,`startDate`,`activityDate`,`endDate`) VALUES (@idUser,@white,1,'2015-09-17 00:00:00', null,null,null);
source ./model/relational/table/transaction/configuration/meritbuilders/user-profile-image.sql
SET @idUser = 54;
INSERT INTO `User` (`idUser`,`idAccount`,`name`,`password`,`registerDate`,`activityDate`,`login`,`role`) VALUES (54,@idAccount,'fsandoval','$2a$10$R7YLnRfQNMDVTAAAPswVU.nZCB/3GZ35suFpyvRwo7FAx0THs3qzW','0000-00-00 00:00:00','0000-00-00 00:00:00',0,'worker');
INSERT INTO `Employee` (`idAccount`,`idUser`,`hireDate`) VALUES (@idAccount,@idUser,'2015-08-06 00:00:00');
INSERT INTO `Tag` (`idAccount`,`type`,`identification`) VALUES ( @idAccount,'non-nfc','04b10ba2794884');
SET @idTag = LAST_INSERT_ID();
INSERT INTO `UserTag` (`idUser`,`idAccount`,`idTag`) VALUES (@idUser, @idAccount,@idTag);
INSERT INTO `Identification` (`idAccount`,`firstName`,`middleName`,`middleInitial`,`lastName`,`name`,`sex`,`guid`,`idUser`) VALUES (@idAccount,'Fidel',null,null,'Sandoval','Fidel Sandoval Lopez','Male','36b5d8ed-70e6-11e5-a5be-000c2907b940',@idUser);
INSERT INTO `UserLevel` (`idUser`, `idLevel`,`idAccount`,`createDate`,`startDate`,`activityDate`,`endDate`) VALUES (@idUser,@white,1,'2015-09-17 00:00:00', null,null,null);
source ./model/relational/table/transaction/configuration/meritbuilders/user-profile-image.sql
SET @idUser = 55;
INSERT INTO `User` (`idUser`,`idAccount`,`name`,`password`,`registerDate`,`activityDate`,`login`,`role`) VALUES (@idUser,@idAccount,'parevalo','$2a$10$R7YLnRfQNMDVTAAAPswVU.nZCB/3GZ35suFpyvRwo7FAx0THs3qzW','0000-00-00 00:00:00','0000-00-00 00:00:00',0,'worker');
INSERT INTO `Employee` (`idAccount`,`idUser`,`hireDate`) VALUES (@idAccount,@idUser,'2015-09-03 00:00:00');
INSERT INTO `Tag` (`idAccount`,`type`,`identification`) VALUES ( @idAccount,'non-nfc','043785a2794881');
SET @idTag = LAST_INSERT_ID();
INSERT INTO `UserTag` (`idUser`,`idAccount`,`idTag`) VALUES (@idUser, @idAccount,@idTag);
INSERT INTO `Identification` (`idAccount`,`firstName`,`middleName`,`middleInitial`,`lastName`,`name`,`sex`,`guid`,`idUser`) VALUES (@idAccount,'Pedro',null,null,'Arevalo','Pedro Antonio Arevalo','Male','3cb6a7ea-70e6-11e5-a5be-000c2907b940',@idUser);
INSERT INTO `UserLevel` (`idUser`, `idLevel`,`idAccount`,`createDate`,`startDate`,`activityDate`,`endDate`) VALUES (@idUser,@white,1,'2015-09-17 00:00:00', null,null,null);
source ./model/relational/table/transaction/configuration/meritbuilders/user-profile-image.sql
SET @idUser = 56;
INSERT INTO `User` (`idUser`,`idAccount`,`name`,`password`,`registerDate`,`activityDate`,`login`,`role`) VALUES (@idUser,@idAccount,'jarellano','$2a$10$R7YLnRfQNMDVTAAAPswVU.nZCB/3GZ35suFpyvRwo7FAx0THs3qzW','0000-00-00 00:00:00','0000-00-00 00:00:00',0,'worker');
INSERT INTO `Employee` (`idAccount`,`idUser`,`hireDate`) VALUES (@idAccount,@idUser,'2015-08-25 00:00:00');
INSERT INTO `Identification` (`idAccount`,`firstName`,`middleName`,`middleInitial`,`lastName`,`name`,`sex`,`guid`,`idUser`) VALUES (@idAccount,'Jaime',null,null,'Arellano','Jaime Arellano Godoy','Male','418649ae-70e6-11e5-a5be-000c2907b940',@idUser);
INSERT INTO `UserLevel` (`idUser`, `idLevel`,`idAccount`,`createDate`,`startDate`,`activityDate`,`endDate`) VALUES (@idUser,@white,1,'2015-09-17 00:00:00', null,null,null);
source ./model/relational/table/transaction/configuration/meritbuilders/user-profile-image.sql
SET @idUser = 3;
INSERT INTO `User` (`idUser`,`idAccount`,`name`,`password`,`registerDate`,`activityDate`,`login`,`role`) VALUES (@idUser,@idAccount,'justin.nolan@buildingblok.com','$2a$10$R7YLnRfQNMDVTAAAPswVU.nZCB/3GZ35suFpyvRwo7FAx0THs3qzW','0000-00-00 00:00:00','0000-00-00 00:00:00',0,'assessor');
INSERT INTO `Contractor` (`idUser`,`hireDate`,`idAccount`) VALUES (@idUser,'2015-07-01 00:00:00',@idAccount);
INSERT INTO `Identification` (`idAccount`,`firstName`,`middleName`,`middleInitial`,`lastName`,`name`,`sex`,`guid`,`idUser`) VALUES (@idAccount,'Justin',null,null,'Nolan','Justin Nolan','Male','47f39cad-70e6-11e5-a5be-000c2907b940',@idUser);
SET @idUser = 48;
INSERT INTO `User` (`idUser`,`idAccount`,`name`,`password`,`registerDate`,`activityDate`,`login`,`role`) VALUES (@idUser,@idAccount,'danf@fetlabs.com','$2a$10$A.cS1zqLbmjZSMPCEodYEuu4a0.8xp8Z.6GDR6aIlxXbzNljLxYli','2015-07-29 00:00:00','0000-00-00 00:00:00',0,'assessor');#fetMerit@22001155$
INSERT INTO `Contractor` (`idUser`,`hireDate`,`idAccount`) VALUES (@idUser,'2015-07-29 00:00:00',@idAccount);
INSERT INTO `Identification` (`idAccount`,`firstName`,`middleName`,`middleInitial`,`lastName`,`name`,`sex`,`guid`,`idUser`) VALUES (@idAccount,'Dan',null,null,'Farabaugh','Dan Farabaugh','Male','4e72373c-70e6-11e5-a5be-000c2907b940',@idUser);
SET @idUser = 49;
INSERT INTO `User` (`idUser`,`idAccount`,`name`,`password`,`registerDate`,`activityDate`,`login`,`role`) VALUES (@idUser,@idAccount,'davef@fetlabs.com','$2a$10$.Vc8u8WFy9NupB9jGO1hTew1WY/zwa/wJ/z0qFMyzEvRzB5Bw1mui','2015-07-29 00:00:00','0000-00-00 00:00:00',0,'assessor');#fetMerit@22001155!
INSERT INTO `Contractor` (`idUser`,`hireDate`,`idAccount`) VALUES (@idUser,'2015-07-29 00:00:00',@idAccount);
INSERT INTO `Identification` (`idAccount`,`firstName`,`middleName`,`middleInitial`,`lastName`,`name`,`sex`,`guid`,`idUser`) VALUES (@idAccount,'Dave',null,null,'Fulton','Dave Fulton','Male','53db8f96-70e6-11e5-a5be-000c2907b940',@idUser);
SET @idUser = 50;
INSERT INTO `User` (`idUser`,`idAccount`,`name`,`password`,`registerDate`,`activityDate`,`login`,`role`) VALUES (@idUser,@idAccount,'smccracken@iasonline.org','$2a$10$mlRAi/9PJ8JRV8ig4xMLUutogqL.xgWAb6eclGwYUZFXzuDXHqZzS','2015-07-29 00:00:00','0000-00-00 00:00:00',0,'assessor');#iasMerit@22001155#
INSERT INTO `Identification` (`idAccount`,`firstName`,`middleName`,`middleInitial`,`lastName`,`name`,`sex`,`guid`,`idUser`) VALUES (@idAccount,'Sandi',null,null,'McCracken','Sandi McCracken','Female','5ebd22a0-70e6-11e5-a5be-000c2907b940',@idUser);
INSERT INTO `Contractor` (`idUser`,`hireDate`,`idAccount`) VALUES (@idUser,'2015-09-15 00:00:00',@idAccount);

SET @idUser = 57;
INSERT INTO `User` (`idUser`,`idAccount`,`name`,`password`,`registerDate`,`activityDate`,`login`,`role`) VALUES (@idUser,@idAccount,'biraheta','$2a$10$R7YLnRfQNMDVTAAAPswVU.nZCB/3GZ35suFpyvRwo7FAx0THs3qzW','0000-00-00 00:00:00','0000-00-00 00:00:00',0,'worker');
INSERT INTO `Employee` (`idAccount`,`idUser`,`hireDate`) VALUES (@idAccount,@idUser,'2015-10-08 00:00:00');
INSERT INTO `Tag` (`idAccount`,`type`,`identification`) VALUES ( @idAccount,'non-nfc','04a83fa2794880');
SET @idTag = LAST_INSERT_ID();
INSERT INTO `UserTag` (`idUser`,`idAccount`,`idTag`) VALUES (@idUser, @idAccount,@idTag);
INSERT INTO `Identification` (`idAccount`,`firstName`,`middleName`,`middleInitial`,`lastName`,`name`,`sex`,`guid`,`idUser`) VALUES (@idAccount,'Benjamin',null,null,'Iraheta','Benjamin de Jesus Iraheta Cuellar','Male','3f66794a-70f8-11e5-a5be-000c2907b940',@idUser);
INSERT INTO `UserLevel` (`idUser`, `idLevel`,`idAccount`,`createDate`,`startDate`,`activityDate`,`endDate`) VALUES (@idUser,@white,1,'2015-10-08 00:00:00', null,null,null);
source ./model/relational/table/transaction/configuration/meritbuilders/user-profile-image.sql
SET @idUser = 58;
INSERT INTO `User` (`idUser`,`idAccount`,`name`,`password`,`registerDate`,`activityDate`,`login`,`role`) VALUES (@idUser,@idAccount,'mseibert','$2a$10$R7YLnRfQNMDVTAAAPswVU.nZCB/3GZ35suFpyvRwo7FAx0THs3qzW','0000-00-00 00:00:00','0000-00-00 00:00:00',0,'mechanic');
INSERT INTO `Employee` (`idAccount`,`idUser`,`hireDate`) VALUES (@idAccount,@idUser,'2006-12-11 07:00:00');

INSERT INTO `Tag` (`idAccount`,`type`,`identification`) VALUES ( @idAccount,'non-nfc','04e96ba2794880');
SET @idTag = LAST_INSERT_ID();
INSERT INTO `UserTag` (`idUser`,`idAccount`,`idTag`) VALUES (@idUser, @idAccount,@idTag);
INSERT INTO `Identification` (`idAccount`,`firstName`,`middleName`,`middleInitial`,`lastName`,`name`,`sex`,`guid`,`idUser`) VALUES (@idAccount,'Matt',null,'E','Seibert','Matthew E. Seibert','Male','07fa4812-71be-11e5-b85b-000c2907b940',@idUser);
INSERT INTO `UserLevel` (`idUser`, `idLevel`,`idAccount`,`createDate`,`startDate`,`activityDate`,`endDate`) VALUES (@idUser,@gray,1,'2015-10-13 00:00:00', null,null,null);
source ./model/relational/table/transaction/configuration/meritbuilders/user-profile-image.sql
SET @idUser = 59;
INSERT INTO `User` (`idUser`,`idAccount`,`name`,`password`,`registerDate`,`activityDate`,`login`,`role`) VALUES (@idUser,@idAccount,'ctrescott','$2a$10$R7YLnRfQNMDVTAAAPswVU.nZCB/3GZ35suFpyvRwo7FAx0THs3qzW','0000-00-00 00:00:00','0000-00-00 00:00:00',0,'general-manager');
INSERT INTO `Employee` (`idAccount`,`idUser`,`hireDate`) VALUES (@idAccount,@idUser,'0000-00-00 00:00:00');
INSERT INTO `Identification` (`idAccount`,`firstName`,`middleName`,`middleInitial`,`lastName`,`name`,`sex`,`guid`,`idUser`) VALUES (@idAccount,'Cassie',null,null,'Trescott','Cassie Trescott','Female','944c4ee7-71c0-11e5-b85b-000c2907b940',@idUser);
INSERT INTO `UserLevel` (`idUser`, `idLevel`,`idAccount`,`createDate`,`startDate`,`activityDate`,`endDate`) VALUES (@idUser,@gray,1,'2015-10-13 00:00:00', null,null,null);
source ./model/relational/table/transaction/configuration/meritbuilders/user-profile-image.sql
#source ./model/relational/table/insert/UserProject.sql
#source ./model/relational/table/transaction/maintenance/meritbuilders/load-0.29.0.sql
SET @idUser=60;
#67799009-8a14-11e5-a2bc-000c2989dcaa
INSERT INTO `User` (`idUser`,`idAccount`,`name`,`password`,`registerDate`,`activityDate`,`login`,`role`) VALUES (@idUser,@idAccount,'ecortes','$2a$10$R7YLnRfQNMDVTAAAPswVU.nZCB/3GZ35suFpyvRwo7FAx0THs3qzW','0000-00-00 00:00:00','0000-00-00 00:00:00',0,'worker');
INSERT INTO `Employee` (`idAccount`,`idUser`,`hireDate`) VALUES (@idAccount,@idUser,'2015-11-12 07:00:00');
INSERT INTO `Identification` (`idAccount`,`firstName`,`middleName`,`middleInitial`,`lastName`,`name`,`sex`,`guid`,`idUser`) VALUES (@idAccount,'Eduardo',null,null,'Cortes','Eduardo Cortes Tejeda','Male','67799009-8a14-11e5-a2bc-000c2989dcaa',@idUser);
INSERT INTO `Tag` (`idAccount`,`type`,`identification`) VALUES ( @idAccount,'non-nfc','04047da2794881');
SET @idTag = LAST_INSERT_ID();
INSERT INTO `UserTag` (`idUser`,`idAccount`,`idTag`) VALUES (@idUser, @idAccount,@idTag);
INSERT INTO `UserLevel` (`idUser`, `idLevel`,`idAccount`,`createDate`,`startDate`,`activityDate`,`endDate`) VALUES (@idUser,@white,1,'2015-11-12 00:00:00', null,null,null);
source ./model/relational/table/transaction/configuration/meritbuilders/user-profile-image.sql

SET @idUser = 61;
INSERT INTO `User` (`idUser`,`idAccount`,`name`,`password`,`registerDate`,`activityDate`,`login`,`role`) VALUES (@idUser,@idAccount,'jmaldonado','$2a$10$R7YLnRfQNMDVTAAAPswVU.nZCB/3GZ35suFpyvRwo7FAx0THs3qzW','0000-00-00 00:00:00','0000-00-00 00:00:00',0,'worker');
INSERT INTO `Employee` (`idAccount`,`idUser`,`hireDate`) VALUES (@idAccount,@idUser,'2015-11-30 07:00:00');

-- INSERT INTO `Tag` (`idAccount`,`type`,`identification`) VALUES ( @idAccount,'non-nfc','');
-- SET @idTag = LAST_INSERT_ID();
-- INSERT INTO `UserTag` (`idUser`,`idAccount`,`idTag`) VALUES (@idUser, @idAccount,@idTag);
INSERT INTO `Identification` (`idAccount`,`firstName`,`middleName`,`middleInitial`,`lastName`,`name`,`sex`,`guid`,`idUser`) VALUES (@idAccount,'Jose',null,null,'Maldonando','Jose Maldonado','Male','51e85fb5-9cf5-11e5-b983-000c2989dcaa',@idUser);
INSERT INTO `UserLevel` (`idUser`, `idLevel`,`idAccount`,`createDate`,`startDate`,`activityDate`,`endDate`) VALUES (@idUser,@white,1,'2015-11-30 07:00:00', null,null,null);
source ./model/relational/table/transaction/configuration/meritbuilders/user-profile-image.sql

SET @idUser = 62;
INSERT INTO `User` (`idUser`,`idAccount`,`name`,`password`,`registerDate`,`activityDate`,`login`,`role`) VALUES (@idUser,@idAccount,'jgmartinez','$2a$10$R7YLnRfQNMDVTAAAPswVU.nZCB/3GZ35suFpyvRwo7FAx0THs3qzW','0000-00-00 00:00:00','0000-00-00 00:00:00',0,'worker');
INSERT INTO `Employee` (`idAccount`,`idUser`,`hireDate`) VALUES (@idAccount,@idUser,'2015-11-30 07:00:00');

-- INSERT INTO `Tag` (`idAccount`,`type`,`identification`) VALUES ( @idAccount,'non-nfc','');
-- SET @idTag = LAST_INSERT_ID();
-- INSERT INTO `UserTag` (`idUser`,`idAccount`,`idTag`) VALUES (@idUser, @idAccount,@idTag);
INSERT INTO `Identification` (`idAccount`,`firstName`,`middleName`,`middleInitial`,`lastName`,`name`,`sex`,`guid`,`idUser`) VALUES (@idAccount,'Joel','Gomez','G','Martinez','Joel Martinez','Male','51734499-9cf5-11e5-b983-000c2989dcaa',@idUser);
INSERT INTO `UserLevel` (`idUser`, `idLevel`,`idAccount`,`createDate`,`startDate`,`activityDate`,`endDate`) VALUES (@idUser,@white,1,'2015-11-30 07:00:00', null,null,null);
source ./model/relational/table/transaction/configuration/meritbuilders/user-profile-image.sql

SET @idUser = 63;
INSERT INTO `User` (`idUser`,`idAccount`,`name`,`password`,`registerDate`,`activityDate`,`login`,`role`) VALUES (@idUser,@idAccount,'ralba','$2a$10$R7YLnRfQNMDVTAAAPswVU.nZCB/3GZ35suFpyvRwo7FAx0THs3qzW','0000-00-00 00:00:00','0000-00-00 00:00:00',0,'worker');
INSERT INTO `Employee` (`idAccount`,`idUser`,`hireDate`) VALUES (@idAccount,@idUser,'2015-11-30 07:00:00');

-- INSERT INTO `Tag` (`idAccount`,`type`,`identification`) VALUES ( @idAccount,'non-nfc','');
-- SET @idTag = LAST_INSERT_ID();
-- INSERT INTO `UserTag` (`idUser`,`idAccount`,`idTag`) VALUES (@idUser, @idAccount,@idTag);
INSERT INTO `Identification` (`idAccount`,`firstName`,`middleName`,`middleInitial`,`lastName`,`name`,`sex`,`guid`,`idUser`) VALUES (@idAccount,'Rene','Alba','R','Caceres','Rene Alba','Male','5045f676-9cf5-11e5-b983-000c2989dcaa',@idUser);
INSERT INTO `UserLevel` (`idUser`, `idLevel`,`idAccount`,`createDate`,`startDate`,`activityDate`,`endDate`) VALUES (@idUser,@white,1,'2015-11-30 07:00:00', null,null,null);
source ./model/relational/table/transaction/configuration/meritbuilders/user-profile-image.sql

SET @idUser=1;
source ./model/relational/table/transaction/test/hazard-communication/meritbuilders/hazard-communication.sql
source ./model/relational/table/transaction/test/fork-lift-equipment/jlg/telehandler-operator-training-program-evaluation-test.sql
source ./model/relational/table/transaction/inspection/project/meritbuilders/project-completion-checklist.sql
source ./model/relational/table/transaction/inspection/project/meritbuilders/project-wall-completion-checklist.sql
source ./model/relational/table/transaction/inspection/project/meritbuilders/project-roof-completion-checklist.sql
source ./model/relational/table/transaction/inspection/project/meritbuilders/project-structure-completion-checklist.sql
source ./model/relational/table/transaction/inspection/employee/meritbuilders/employee-evaluation.sql
source ./model/relational/table/transaction/inspection/employee/meritbuilders/fork-lift.sql
source ./model/relational/table/transaction/inspection/employee/meritbuilders/man-lift.sql
source ./model/relational/table/transaction/session/employee/meritbuilders/osha-10.sql
#source ./model/relational/table/transaction/session/employee/meritbuilders/safety-meeting-2015-10-05.sql
#source ./model/relational/table/transaction/session/employee/meritbuilders/safety-meeting-2015-10-12.sql
source ./model/relational/table/transaction/test/material/meritbuilders/reading-plans-and-specifications.sql
source ./model/relational/table/transaction/test/material/meritbuilders/understanding-manufacturer-standards-and-details.sql
source ./model/relational/table/transaction/client/meritbuilders/recorder.sql
COMMIT;
