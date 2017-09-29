#!/bin/bash
. "$(dirname $0)/vars.sh"
[ $# -lt 4 ] && echo "Usage: $(basename $0) <HOST> <DATABASE> <USER> <PASSWORD> <NAME> <PATH> [<TABLE> ... <TABLE>]" && exit 1
HOST=$1
DATABASE=$2
USER=$3
PASSWORD=$4
NAME=$5
PATH=$6
DIRECTORY=$PATH/$NAME
SCRIPT=""
COUNT=0
CLEAN=false
CREATE="CREATE DATABASE IF NOT EXISTS \`$DATABASE\`;"
$MYSQL -h $HOST -u $USER -p$PASSWORD -e "$CREATE"
[ $# -lt 6 ] && exit 1
if [ ! -e "$DIRECTORY.sql" ]
then
    echo "File "$DIRECTORY.sql" Not Found"
    echo "Directory "$DIRECTORY" Check"
    if [ ! -d "$DIRECTORY" ]
    then
        echo "Directory "$DIRECTORY" Not Found"
        $MKDIR -p $DIRECTORY
        echo "Directory "$DIRECTORY" Made"
        if [ -e "$DIRECTORY.tar.gz" ]
        then
            echo "Tarball "$DIRECTORY.tar.gz" Found"
            $GUNZIP -c $DIRECTORY.tar.gz > $DIRECTORY.tar
            $TAR xvf $DIRECTORY.tar -C $DIRECTORY --strip 1
            if [ -e "$DIRECTORY/$NAME.sql" ]
            then
                SCRIPT=$DIRECTORY/$NAME.sql
                echo "Script "$SCRIPT" Found"
            else
                echo "Script Not Found"
                exit 1
            fi
            CLEAN=true
        else
            echo "Tarball "$DIRECTORY.tar.gz" Not Found"
            exit 1
        fi
    else
        echo "Directory Found"
        if [ -e "$DIRECTORY/$NAME.sql" ]
        then
            SCRIPT=$DIRECTORY/$NAME.sql
            echo "Script "$SCRIPT" Found"
        else
            echo "Script Not Found"
            exit 1
        fi
    fi
else
    SCRIPT=$PATH/$NAME.sql
    echo "Script "$SCRIPT" Found"
fi
if [ $# -gt 6 ]
then
for PARAMETER in "$@"
do
    COUNT=$(( COUNT+1 ))
    if [ $COUNT -gt 6 ]
    then
        TABLE=$PARAMETER
        SCRIPT=$DIRECTORY/$TABLE.sql
        echo $SCRIPT
        $MYSQL -h $HOST -u $USER -p$PASSWORD $DATABASE < $SCRIPT
    fi
done
else
$RM $PATH/$NAME.log
$MYSQL -vv -h $HOST -u $USER -p$PASSWORD $DATABASE < $SCRIPT >> $PATH/$NAME.log 2>&1
fi
if [ "$CLEAN" = true ] ;
then
    echo "Clean"
    $RM -r $DIRECTORY/
    $RM $DIRECTORY.tar
fi
