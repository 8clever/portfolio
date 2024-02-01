#!/bin/bash
dirs=(./public/images ./public/portfolio)
imagetypes=(png jpg)
for path in "${dirs[@]}"
do
	for it in "${imagetypes[@]}"
	do
		find $path -iname "*.$it" -exec sh -c 'cwebp -q 85 -mt "$1" -o "${1%.*}.webp"' sh {} \;
		find $path -iname "*.$it" -exec sh -c 'rm "$1"' sh {} \;
	done
done