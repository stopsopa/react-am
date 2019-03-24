
#h: # show any help that is available
#	@/bin/bash test.sh --help
#	@echo https://github.com/stopsopa/nlab

c: # run local server to browse coverage
	@node server.js --log 15 --dir coverage

cc: # run local server to general testing
	@nodemon -e js,html server.js --log 15

dev:
	yarn dev

build:
	yarn build

#u: # update npm and git (generates new tag)
#	@/bin/bash update.sh
#
#uf: # update even if there is nothing new committed
#	@/bin/bash update.sh force
#
#ct: # karma parameters.json
#	@/bin/bash update.sh --travis
#
#cp: # jest parameters.json
#	@/bin/bash update.sh --prod

#t: # just run tests once
#	@/bin/bash test.sh
#
#tw: # run tests in watch mode
#	@/bin/bash test.sh --watch

twa: # run tests in watchAll mode

#nt: # test .npmignore
#	@npm pack