#!/bin/bash
for fname in original-vectors/*.svg;
do
    sed -i 's/style="[^"]*fill:[^;"]*;*[^"]*"/fill="currentColor"/g' "$fname"
done;
