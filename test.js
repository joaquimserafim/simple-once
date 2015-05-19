'use strict'

var test = require('tape')
var once = require('./')

test('one crazy test', function(assert) {
  var cattivo = 0

  function buono (i) {
    assert.deepEqual(cattivo, 0)
    return (++cattivo) + i
  }

  var brutto = once(buono)

  for (var i = 0; i < 1E3; i++) {
    assert.deepEqual(cattivo, i === 0 ? 0 : 1)
    var j = brutto.call(1, 1)
    assert.deepEqual(j, 2)
    assert.deepEqual(cattivo, 1)
  }

  assert.end()
})
