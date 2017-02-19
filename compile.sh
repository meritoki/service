#!/bin/bash
. "$(dirname $0)/vars.sh"
./load.sh $HOST $DATABASE $USER $PASSWORD management-drop $LOAD_PATH
# ./load.sh $HOST $DATABASE $USER $PASSWORD management-create $LOAD_PATH
./load.sh $HOST $DATABASE $USER $PASSWORD management-insert $LOAD_PATH
# DB[0]=management-20150731121553512
DB[1]=management-20150824011306050
DB[2]=management-20151029154958263
DB[3]=management-20151109185940302
DB[4]=management-normalize
DB[5]=management-element
DB[6]=management-test
for i in ${DB[@]}
do
   echo Loading $i
   ./load.sh $HOST $i $USER $PASSWORD $i $BACKUP_PATH
   SCRIPT=model/relational/$i.sql
   echo $SCRIPT
   $MYSQL -vv -h $HOST -u $USER -p$PASSWORD $i < $SCRIPT >> model/relational/$i.log 2>&1
done
