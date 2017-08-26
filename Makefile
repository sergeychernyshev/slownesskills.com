all:	checkconfig updatedb updateusers

js: webpackprod
dev: webpackdev

checkconfig:
ifeq "$(wildcard config.php)" ""
	@echo =
	@echo =	You must create config.php file first
	@echo =	Start by copying config.sample.php
	@echo =
	@exit 1
endif

updatedb:
	php dbupgrade.php

updateusers:
	cd users && $(MAKE)

webpackprod:
	export NODE_ENV=production; ./node_modules/.bin/webpack -p --progress

webpackdev:
	./node_modules/.bin/webpack -d --progress

watch:
	export NODE_ENV=watch; ./node_modules/.bin/webpack -d --watch --progress

dbdata:
	php data/load_mock_data.php

clean:
	rm -rf node_modules
	rm -f resizer_lambda.zip
	rm -f transformer_lambda.zip

node_modules:
	npm install sharp qs axios

resizer: resizer_lambda.zip
resizer_lambda.zip: src/lambdas/DeckPackResize.js node_modules
	mkdir -p lambda_dist/node_modules
	cp src/lambdas/DeckPackResize.js lambda_dist/index.js
	cp -R node_modules lambda_dist/
	(cd lambda_dist; zip -r ../resizer_lambda.zip *)
	rm -rf lambda_dist
resizer-dev: resizer_lambda.zip
	aws lambda update-function-code \
	--function-name DeckPackCreateThumbnailsDev \
	--publish \
	--zip-file fileb://./resizer_lambda.zip
resizer-prod: resizer_lambda.zip
	aws lambda update-function-code \
	--function-name DeckPackCreateThumbnails \
	--publish \
	--zip-file fileb://./resizer_lambda.zip

transformer: transformer_lambda.zip
transformer_lambda.zip: src/lambdas/DeckPackScanTransformation.js node_modules
	mkdir -p lambda_dist/node_modules
	cp src/lambdas/DeckPackScanTransformation.js lambda_dist/index.js
	cp -R node_modules lambda_dist/
	(cd lambda_dist; zip -r ../transformer_lambda.zip *)
	rm -rf lambda_dist
transformer-dev: transformer_lambda.zip
	aws lambda update-function-code \
	--function-name DeckPackScanTransformationDev \
	--publish \
	--zip-file fileb://./transformer_lambda.zip
transformer-prod: transformer_lambda.zip
	aws lambda update-function-code \
	--function-name DeckPackScanTransformation \
	--publish \
	--zip-file fileb://./transformer_lambda.zip

lambda: resizer-prod transformer-prod
lambda-dev: resizer-dev transformer-dev

check:
	npm-check --specials=bin,webpack,eslint,babel --skip-unused

commit:	js
	git add app
	git commit
