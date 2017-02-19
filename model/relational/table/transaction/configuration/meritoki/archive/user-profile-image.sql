INSERT INTO `File` (idAccount,path,name,extension,label,createDate) VALUES (@idAccount, CONCAT('/media/merit-builders/image/employee/',@idUser,'/'),'profile', 'jpg','', '2015-09-16 00:00:00');
SET @idFile = LAST_INSERT_ID();
INSERT INTO `UserFile` (`idAccount`,`idUser`,`owner`,`permission`,`addDate`,`idFile`) VALUES (@idAccount,@idUser,1,2,'2015-09-16 00:00:00',@idFile);
