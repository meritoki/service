#!/bin/bash
[ $# -lt 3 ] && echo "Usage: $(basename $0) <EXT> <OLD> <NEW>" && exit 1
EXT=$1
OLD=$2
NEW=$3
find ./ -name "*."$EXT -type f -exec sed -i -e 's/'$OLD'/'$NEW'/g' {} \;
