#!/bin/sh
. "$(dirname $0)/vars.sh"
COUNT=16
PROGRAM=app
tail -n $COUNT -f /var/log/$ORGANIZATION/$NAME/$PROGRAM.console
