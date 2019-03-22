#!/usr/local/bin/bash

#snfind -f -e "ttt" | xargs -0 ../bin/sncp -o ./t00/t1/t2/t3/t4
snfind -d -r false | xargs -0 ../bin/sncp -o ./t02
