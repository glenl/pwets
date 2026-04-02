#++
# PROJECT:
#   pwets : a WETS application for Paul's model, Andrew's translation.
#
# ABSTRACT:
#   A WETS simulator written in elm
#
# REQUIRED TOOLS:
#   atangle
#   pikchr
#   asciidoctor and various gems
#     asciidoctor-diagram
#     asciidoctor-rouge
#
#--
AUTHOR = "Glen Larsen"
VERSION = "1.0b"
REVISIONDATE = "1 Apr 2026"
PROJECT = pwets-elm

SITEDIR = ../site
DOCDIR = ../doc
CODEDIR = ../src
IMAGEDIR = ../images

vpath %.pdf $(DOCDIR)
vpath %.html $(DOCDIR)
vpath %.test $(TESTDIR)
vpath %.uxf $(IMAGEDIR)

DOCSRC = \
	$(PROJECT).adoc \
	$(NULL)

CODESRCS = \
	Main.adoc \
	PWets.adoc \
	Util.adoc \
	UI.adoc \
	$(NULL)

DOCSRCS = \
	$(PROJECT).adoc \
	overview.adoc \
	$(CODESRCS) \
	$(NULL)

REQUIRED_DIRS =\
	$(CODEDIR)\
	$(NULL)

_MKDIRS := $(shell for d in $(REQUIRED_DIRS) ;\
		 do\
			 [ -d $$d ] || mkdir -p $$d ;\
		 done)

PDF =\
	$(DOCDIR)/$(patsubst %.adoc,%.pdf,$(DOCSRC))\
	$(NULL)

HTML =\
	$(DOCDIR)/$(patsubst %.adoc,%.html,$(DOCSRC))\
	$(NULL)

ELMSRCS =\
	$(patsubst %.adoc,$(CODEDIR)/%.elm,$(CODESRCS))\
	$(NULL)

IMAGES =\
	$(IMAGEDIR)/wetselm-ui.png \
	$(IMAGEDIR)/chamber-layout.svg \
	$(NULL)

ATANGLEOPTS =\
	$(NULL)

CLEANFILES =\
	$(PDF) \
	$(HTML) \
	$(ELMSRCS) \
	$(NULL)

#	--attribute stylesheet=styles.css
ADOCTOR_OPTS =\
	--doctype=book\
	--attribute revnumber=$(VERSION)\
	--attribute revdate=$(REVISIONDATE)\
	--attribute umlet=$(HOME)/.local/bin/Umlet-15.0.0/umlet.jar\
	--attribute source-highlighter=rouge \
	--require asciidoctor-diagram\
	$(NULL)

$(DOCDIR)/%.pdf : %.adoc # $(IMAGEDIR)/classes.uxf
	asciidoctor-pdf $(ADOCTOR_OPTS)\
		--theme ./pwets-theme.yml\
		--out-file $@ $<

$(DOCDIR)/%.html : %.adoc
	asciidoctor $(ADOCTOR_OPTS)\
		--attribute iconfont-remote!\
		--attribute docinfo=shared-head\
		--attribute stylesheet=pwets-stylesheet.css\
		--out-file $@ $<

.PHONY : all doc code clean

html : $(HTML)

all : doc code

doc :  $(PDF) $(HTML)

$(PDF) : $(DOCSRC) $(DOCSRCS) pwets-theme.yml $(IMAGES)

$(HTML) : $(DOCSRC) $(DOCSRCS) pwets-theme.yml $(IMAGES)

elm.js : $()
	elm make --optimize --output=$@ $(SRC)/Main.elm

UGFLAGS =\
	--compress 'pure_funcs="F2,F3,F4,F5,F6,F7,F8,F9,A2,A3,A4,A5,A6,A7,A8,A9",pure_getters,keep_fargs=false,unsafe_comps,unsafe'

#	$(CP) $< $@
$(SITEDIR)/elm.js : elm.js
	uglifyjs $< $(UGFLAGS) | uglifyjs --mangle >$@

code : $(ELMSRCS)
	elm make --optimize --output=$(SITEDIR)/elm.js $(CODEDIR)/Main.elm

clean :
	$(RM) $(CLEANFILES)

$(CODEDIR)/%.elm : %.adoc
	atangle $(ATANGLEOPTS) -root $(notdir $@) $< \
		| elm-format --stdin > $@
