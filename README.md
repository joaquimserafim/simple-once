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


## Development

##### this projet has been set up with a precommit that forces you to follow a code style, no jshint issues and 100% of code coverage before commit


to run test
``` js
npm test
```

to run jshint
``` js
npm run jshint
```

to run code style
``` js
npm run code-style
```

to run check code coverage
``` js
npm run check-coverage
```

to open the code coverage report
``` js
npm run open-coverage
```
