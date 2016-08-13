'use strict'

var test = require('tape')

var once = require('./')

test('one crazy test', function(assert) {
  var cattivo = 0

  function buono(i) {
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

test('should load a function once', function(assert) {
  var value = 0

  function fn(cb) {
    value++
    cb(null, value)
  }

  var testFn = once(fn)

  testFn(function(err, val) {
    assert.deepEqual(val, 1)

    testFn(function(err, val) {
      assert.deepEqual(val, 1)
      assert.end()
    })
  })
})

test('should load a function once and pass some arguments', function(assert) {

  function fn(val1, val2, cb) {
    cb(null, val1 + ' ' + val2)
  }

  var testFn = once(fn)

  testFn('hello', 'world', function(err, val) {
    assert.deepEqual(err, null)
    assert.deepEqual(val, 'hello world')

    testFn('world', 'hello', function(err, val) {
      assert.deepEqual(err, null)
      assert.deepEqual(val, 'hello world')
      assert.end()
    })
  })
})
