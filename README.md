# simple-once

the simplest way to call a function once

<a href="https://nodei.co/npm/simple-once/"><img src="https://nodei.co/npm/simple-once.png?downloads=true"></a>

[![Build Status](https://img.shields.io/badge/build-passing-brightgreen.svg?style=flat-square)](https://travis-ci.org/joaquimserafim/simple-once)![Code Coverage 100%](https://img.shields.io/badge/code%20coverage-100%25-green.svg?style=flat-square)[![ISC License](https://img.shields.io/badge/license-ISC-blue.svg?style=flat-square)](https://github.com/joaquimserafim/simple-once/blob/master/LICENSE)

## API
`var once = require('simple-once')`

**once(*function*)**

## Usage

```js
var once = require('simple-once')
var fs = require('fs')

var file = fs.createReadStream('file.txt')

function log () {
  console.log.apply(this, arguments)
}

var cb = once(log)

// cb will be called only once

file.on('data', cb)
file.on('end', cb)
file.on('close', cb)
file.on('error', cb)
```

**loading a function once**

```js
var once = require('simple-once')

// file foo.js
var counter = 0

module.exports = foo

function foo (cb) {
  counter++
  cb(null, counter)
}

// file bar.js

var foo = require('./foo')

foo(function (error, result) {
  console.info(result) // should print 1
})

// file barr.js

var foo = require('./foo')

foo(function (error, result) {
  console.info(result) // should print 1
})

```

with arguments

```js
var once = require('simple-once')

// file foo.js

module.exports = once(foo)

function foo (message, cb) {
  cb(null, message.toUpperCase() + '!')
}

// file bar.js

var foo = require('./foo')

foo('hello world', function (error, result) {
  console.info(result) // should print HELLO WORLD!
})

```


## Development

##### this projet has been set up with a precommit that forces you to follow a code style, no jshint issues and 100% of code coverage before commit


to run test
``` js
npm test
```

to run jshint
``` js
npm run lint
```

to run code style
``` js
npm run style
```

to run check code coverage
``` js
npm run coverage:check
```

to open the code coverage report
``` js
npm run coverage:open
```
