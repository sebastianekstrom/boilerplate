clean:
	rm -rf build/

install:
	npm prune
	npm install

serve:
	UV_THREADPOOL_SIZE=100 ./node_modules/.bin/webpack-dev-server
