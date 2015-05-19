'use strict'

module.exports = once

function once (fn) {
  var called = false
  var value

  return function() {
    if (called) {
      return value
    } else {
      called = true
      return value = fn.apply(this, arguments)
    }
  }
}
