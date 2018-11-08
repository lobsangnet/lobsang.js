'use strict'
import test from 'ava'

import lobsangFormatterMatrix from '..'

test('rejects if message is not a string', async (t) => {
  const message = null
  const error = await t.throwsAsync(async () => {
    await lobsangFormatterMatrix(message)
  })
  t.is(error.message, 'Message is not a string')
})

test('wraps the message in an object for matrix', async (t) => {
  const message = 'Message in a bottle'
  const formattedMessage = await lobsangFormatterMatrix(message)
  t.is(formattedMessage.body, message)
  t.is(formattedMessage.msgtype, 'm.notice')
})
