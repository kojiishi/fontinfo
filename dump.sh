#!/bin/bash
for f in *.ttf; do
  ttfdump -nx -tOS/2 $f > $1/$f
done
for f in *.ttc; do
  ttfdump -c1 -nx -tOS/2 $f > $1/$f
done
