# Makefile for the rosea translation of the Paul's WETS domain

html : wets_rosea.html

HTML_OPTIONS =\
	-V mainfont=sans\
	-V monofont=monospace\
	-V fontsize=16pt\
	-V maxwidth=60em\
	$(NULL)

wets_rosea.html : wets_rosea.md
	pantcl wets_rosea.md wets_rosea.html\
		--standalone\
		--from markdown\
		--toc

pdf: wets_rosea.pdf

ASCIIDOCTOR_PDF_OPTIONS =\
	-a source-highlighter=rouge\
	-a rouge-style=monokai_sublime\
	--theme=default-sans\
	$(NULL)

wets_rosea.pdf : wets_rosea.md
	pantcl wets_rosea.md wets_rosea.adoc -s --toc -t asciidoctor
	asciidoctor-pdf -d book $(ASCIIDOCTOR_PDF_OPTIONS) -o wets_rosea.pdf wets_rosea.adoc

alldocs : html

code : wets_system.tcl wets.tcl

wets_system.tcl : wets_rosea.md
	pantangle -roots 'wets_system.tcl wets.tcl' -summary wets_rosea.md

all : alldocs code
