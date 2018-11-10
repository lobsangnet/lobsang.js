'use strict'
import test from 'ava'

import lobsangFormatterSchema from '..'

test('rejects a message if not a string', async (t) => {
  const message = null
  const error = await t.throwsAsync(async () => {
    await lobsangFormatterSchema(message)
  })
  t.is(error.message, 'Message is not a string')
})
