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

test('rejects if topic is not supported', async (t) => {
  const message = 'Message in a bottle'
  const topic = 'GO AWAY'
  const error = await t.throwsAsync(async () => {
    await lobsangFormatterSchema(message, topic)
  })
  t.is(error.message, 'Topic is not supported')
})

test('wraps the message in an object', async (t) => {
  const message = 'Message in a bottle'
  const topic = 'CONTENT'
  const schemaMessage = await lobsangFormatterSchema(message, topic)
  t.is(schemaMessage.content, message)
  t.is(schemaMessage.topic, topic)
})
