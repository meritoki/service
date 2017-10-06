#!/bin/bash
. "$(dirname $0)/vars.sh"
command -v node >/dev/null 2>&1 || { echo >&2 "Require Node.  Aborting."; exit 1; }
EXIT=false
PROGRAM=web
test -d $LOG_PATH || sudo mkdir -p $LOG_PATH
sudo touch $LOG_PATH/app.console
if [ ! -d "${ROOT}" ]
then
sudo mkdir -p $ROOT
fi
npm install
if [ ! -L "$LINK" ]
then
sudo ln -s $INSTALL $LINK
else
sudo rm -r $LINK
sudo ln -s $INSTALL $LINK
fi
case "$1" in
    create)
        echo create
        ./load.sh $HOST $DATABASE $USER $PASSWORD create $LOAD_PATH
        ;;
    drop)
        ./load.sh $HOST $DATABASE $USER $PASSWORD drop $LOAD_PATH
        ;;
    insert)
        ./load.sh $HOST $DATABASE $USER $PASSWORD create $LOAD_PATH
        ;;
    new)
        ./load.sh $HOST $DATABASE $USER $PASSWORD drop $LOAD_PATH
        ./load.sh $HOST $DATABASE $USER $PASSWORD create $LOAD_PATH
        ./load.sh $HOST $DATABASE $USER $PASSWORD insert $LOAD_PATH
        ;;
    new-compile)
        ./load.sh $HOST $DATABASE $USER $PASSWORD drop $LOAD_PATH
        ./load.sh $HOST $DATABASE $USER $PASSWORD create $LOAD_PATH
        ./load.sh $HOST $DATABASE $USER $PASSWORD insert $LOAD_PATH
        ./compile.sh
        ;;
    backup-create)
        ID=$2
        ./backup.sh $HOST $DATABASE $USER $PASSWORD $BACKUP_PATH $ID
        ./load.sh $HOST $DATABASE $USER $PASSWORD create $LOAD_PATH
        ;;
    backup-drop)
        ID=$2
        ./backup.sh $HOST $DATABASE $USER $PASSWORD $BACKUP_PATH $ID
        ./load.sh $HOST $DATABASE $USER $PASSWORD drop $LOAD_PATH
        ;;
    backup-insert)
        ID=$2
        ./backup.sh $HOST $DATABASE $USER $PASSWORD $BACKUP_PATH $ID
        ./load.sh $HOST $DATABASE $USER $PASSWORD insert $LOAD_PATH
        ;;
    backup)
        ID=$2
        ./backup.sh $HOST $DATABASE $USER $PASSWORD $BACKUP_PATH $ID
        ;;
    restore)
        NAME=$2
        if [ $# -gt 1 ]
        then
            if [ $# -eq 2 ]
            then
                ./load.sh $HOST $DATABASE $USER $PASSWORD $NAME $BACKUP_PATH
            else
                TABLE=""
                for PARAMETER in "$@"
                do
                    COUNT=$(( COUNT+1 ))
                    if [ $COUNT -gt 2 ]
                    then
                        TABLE=$TABLE" "$PARAMETER
                    fi
                done
                    echo "tables "$TABLE
                    ./load.sh $HOST $DATABASE $USER $PASSWORD $NAME $BACKUP_PATH $TABLE
            fi
        fi
    ;;

    service)
      sudo systemctl stop $PROGRAM
      sudo systemctl disable $PROGRAM
      sudo systemctl daemon-reload
      sudo systemctl reset-failed
      sudo rm /lib/systemd/system/$PROGRAM.service
      sudo cp ./controller/configuration/$PROGRAM.service /lib/systemd/system/
      sudo systemctl daemon-reload
      sudo systemctl start $PROGRAM
      sudo systemctl status $PROGRAM
      sudo iptables -t nat -I PREROUTING -p tcp --dport 80 -j REDIRECT --to-port 8080
      sudo iptables -t nat -I PREROUTING -p tcp --dport 443 -j REDIRECT --to-port 8443
    ;;
esac
#./log.sh
