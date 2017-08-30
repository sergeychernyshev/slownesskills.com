all:	checkconfig updatedb updateusers

prod: webpackprod
dev: webpackdev

webpackprod:
	export NODE_ENV=production; ./node_modules/.bin/webpack -p --progress

webpackdev:
	./node_modules/.bin/webpack -d --progress

watch:
	export NODE_ENV=watch; ./node_modules/.bin/webpack -d --watch --progress

clean:
	rm -rf node_modules

check:
	npm-check --specials=bin,webpack,eslint,babel --skip-unused

commit:	prod
	git add app index.html about.html
	git commit
