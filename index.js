'use strict'

module.exports = once

function once (fn) {
  var called = false
  var value

  return function onceFn () {
    var cb = arguments[arguments.length - 1]
    var isFn = typeof cb === 'function';

    if (called) {
      return isFn ?
        cb(null, value) :
        value
    }

    called = true

    if (!isFn) {
      return value = fn.apply(this, arguments)
    }

    arguments[arguments.length - 1] = function (err, res) {
      value = res
      cb(err, res)
    }

    fn.apply(null, arguments)
  }
}
