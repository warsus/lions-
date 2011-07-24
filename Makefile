lions: 
	plastex --save-image-file --imager="gsdvipng" -d ./lionc lionstex/lionc.tex		
	sed -i "s/<dt>\([0-9]*\):<\/dt>/<a href=\"..\/all.html#line\1\" target=\"source\" <dt>\1:<\/dt><\/a>/" ./lionc/*.html

links:
	sed -i "s/<dt>\([0-9]*\):<\/dt>/<a href=\"all.html#line\1\" target=\"source\" <dt>\1:<\/dt><\/a>/" ./lionc/*.html

clean:
	rm -r ./lionc