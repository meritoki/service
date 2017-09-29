#c| dependability    |    -2 | 305
SET @idElement=305;
SET @idAccount=1;
INSERT INTO `management`.`InstructionElement` (idAccount,idInstruction,idElement)
SELECT @idAccount, i.idInstruction, @idElement FROM `management`.Instruction i INNER JOIN `management`.Proc p ON p.idProcedure=i.idProcedure WHERE p.name LIKE "Employee Evaluation%" AND i.name="dependability";
#c| judgement        |    -2 | 306
SET @idElement=306;
INSERT INTO `management`.`InstructionElement` (idAccount,idInstruction,idElement)
SELECT @idAccount, i.idInstruction, @idElement FROM `management`.Instruction i INNER JOIN `management`.Proc p ON p.idProcedure=i.idProcedure WHERE p.name LIKE "Employee Evaluation%" AND i.name="judgement";
#c| cooperation      |    -2 | 309
SET @idElement=309;
INSERT INTO `management`.`InstructionElement` (idAccount,idInstruction,idElement)
SELECT @idAccount, i.idInstruction, @idElement FROM `management`.Instruction i INNER JOIN `management`.Proc p ON p.idProcedure=i.idProcedure WHERE p.name LIKE "Employee Evaluation%" AND i.name="cooperation";
#c| initiative       |    -2 | 310
SET @idElement=310;
INSERT INTO `management`.`InstructionElement` (idAccount,idInstruction,idElement)
SELECT @idAccount, i.idInstruction, @idElement FROM `management`.Instruction i INNER JOIN `management`.Proc p ON p.idProcedure=i.idProcedure WHERE p.name LIKE "Employee Evaluation%" AND i.name="initiative";
SET @idElement=326;
INSERT INTO `management`.`InstructionElement` (idAccount,idInstruction,idElement)
SELECT @idAccount, i.idInstruction, @idElement FROM `management`.Instruction i INNER JOIN `management`.Proc p ON p.idProcedure=i.idProcedure WHERE p.name LIKE "Employee Evaluation%" AND i.name="knowledgeSkills";
#c| knowledgeSkills  |    -2 | 326,327
SET @idElement=311;
INSERT INTO `management`.`InstructionElement` (idAccount,idInstruction,idElement)
SELECT @idAccount, i.idInstruction, @idElement FROM `management`.Instruction i INNER JOIN `management`.Proc p ON p.idProcedure=i.idProcedure WHERE p.name LIKE "Employee Evaluation%" AND i.name="motivation";
#c| motivation       |    -2 | 311
SET @idElement=312;
INSERT INTO `management`.`InstructionElement` (idAccount,idInstruction,idElement)
SELECT @idAccount, i.idInstruction, @idElement FROM `management`.Instruction i INNER JOIN `management`.Proc p ON p.idProcedure=i.idProcedure WHERE p.name LIKE "Employee Evaluation%" AND i.name="receptivity";
#c| receptivity      |    -2 | 312
SET @idElement=320;
INSERT INTO `management`.`InstructionElement` (idAccount,idInstruction,idElement)
SELECT @idAccount, i.idInstruction, @idElement FROM `management`.Instruction i INNER JOIN `management`.Proc p ON p.idProcedure=i.idProcedure WHERE p.name LIKE "Employee Evaluation%" AND i.name="constructiveness";
#c| constructiveness |    -2 | 320
SET @idElement=321;
INSERT INTO `management`.`InstructionElement` (idAccount,idInstruction,idElement)
SELECT @idAccount, i.idInstruction, @idElement FROM `management`.Instruction i INNER JOIN `management`.Proc p ON p.idProcedure=i.idProcedure WHERE p.name LIKE "Employee Evaluation%" AND i.name="independence";
#c| independence     |    -2 | 321
SET @idElement=322;
INSERT INTO `management`.`InstructionElement` (idAccount,idInstruction,idElement)
SELECT @idAccount, i.idInstruction, @idElement FROM `management`.Instruction i INNER JOIN `management`.Proc p ON p.idProcedure=i.idProcedure WHERE p.name LIKE "Employee Evaluation%" AND i.name="versatility";
#c| versatility      |    -2 | 322
SET @idElement=323;
INSERT INTO `management`.`InstructionElement` (idAccount,idInstruction,idElement)
SELECT @idAccount, i.idInstruction, @idElement FROM `management`.Instruction i INNER JOIN `management`.Proc p ON p.idProcedure=i.idProcedure WHERE p.name LIKE "Employee Evaluation%" AND i.name="safetyAwareness";
#c| safetyAwareness  |    -2 | 323
SET @idElement=313;
INSERT INTO `management`.`InstructionElement` (idAccount,idInstruction,idElement)
SELECT @idAccount, i.idInstruction, @idElement FROM `management`.Instruction i INNER JOIN `management`.Proc p ON p.idProcedure=i.idProcedure WHERE p.name LIKE "Employee Evaluation%" AND i.name="preparedness";
#c| preparedness     |    -2 | 313
SET @idElement=324;
INSERT INTO `management`.`InstructionElement` (idAccount,idInstruction,idElement)
SELECT @idAccount, i.idInstruction, @idElement FROM `management`.Instruction i INNER JOIN `management`.Proc p ON p.idProcedure=i.idProcedure WHERE p.name LIKE "Employee Evaluation%" AND i.name="performance";
#c| performance      |    -2 | 324
SET @idElement=325;
INSERT INTO `management`.`InstructionElement` (idAccount,idInstruction,idElement)
SELECT @idAccount, i.idInstruction, @idElement FROM `management`.Instruction i INNER JOIN `management`.Proc p ON p.idProcedure=i.idProcedure WHERE p.name LIKE "Employee Evaluation%" AND i.name="qualityOfWork";
#c| qualityOfWork    |    -2 | 325
