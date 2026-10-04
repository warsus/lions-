lions: 
	cd lionstex; uv run plastex -c plastex.ini -d ../lionc lionc.tex;

clean:
	rm -r ./lionc