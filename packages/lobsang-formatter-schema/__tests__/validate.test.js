'use strict'
import test from 'ava'

import validate from '../lib/validate'

test('rejects if schema is not an object or boolean', async (t) => {
  const schema = 'Something'
  const error = await t.throwsAsync(async () => {
    await validate(schema)
  })
  t.is(error.message, 'schema should be object or boolean')
})

test('derives the validator from a schema', async (t) => {
  const schema = {}
  const validator = await validate(schema)
  t.is(typeof validator, 'function')
})
