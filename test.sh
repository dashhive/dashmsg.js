#!/bin/bash
set -e
set -u

my_wif='XDLdq5H32tZ2vRvKuRipg4dZtUtNGuE7Q31d3gDTNpdTDbCLqzXB'
my_addr='XmVctZGpQt68ws9YVD6RAT4yfcZFrLZKDW'
my_msg='dte2022-akerdemelidis|estoever|ctafti'
my_sig='IFf+WJzpLv8nPM40tYlWpspCh3NWnyXKmGers3v0PBmdDCylj1KS65Fe4X1AmK0Xx3C1MJ4sKI5rtNuXzsLkJdo='

node ./bin/dashmsg.js verify "${my_wif}" "${my_msg}" "${my_sig}"

my_sig2="$(
    node ./bin/dashmsg.js sign "${my_wif}" "${my_msg}" |
        cut -d':' -f2 | cut -d' ' -f2
)"

node ./bin/dashmsg.js verify "${my_addr}" "${my_msg}" "${my_sig2}"

echo "PASS"
