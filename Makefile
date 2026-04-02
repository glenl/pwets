.PHONY: all doc code clean html

all: doc code

doc:
	$(MAKE) --directory=./docsrc doc

html:
	$(MAKE) --directory=./docsrc html

code:
	$(MAKE) --directory=./docsrc code

clean:
	$(MAKE) --directory=./docsrc clean
