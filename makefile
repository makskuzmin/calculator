publish:
	npm publish --dry-run

lint:
	npx eslint .

test:
	NODE_OPTIONS=--experimental-vm-modules npx jest PASS  __tests__/calculator.test.js
