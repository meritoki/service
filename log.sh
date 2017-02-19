#!/bin/sh
COUNT=16
PROGRAM=app
tail -n $COUNT -f /var/log/meritbuilders/management/$PROGRAM.console
