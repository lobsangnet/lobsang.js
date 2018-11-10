'use strict'
import test from 'ava'
import sinon from 'sinon'

import constants from '../lib/constants'
import wrapper from '../lib/fetch'
import schema from '../lib/schema'

test('rejects if topic is not supported', async (t) => {
  const message = 'Message in a bottle'
  const topic = 'GO AWAY'
  const error = await t.throwsAsync(async () => {
    await schema(message, topic)
  })
  t.is(error.message, 'Topic is not supported')
})

test('resolves to an object containing the message', async (t) => {
  const fakeFetch = sinon
    .stub(wrapper, 'fetch')
    .withArgs(constants.LOBSANG_CONTENT_SCHEMA_URL)
    .returns({
      $schema: 'http://json-schema.org/draft-07/schema#'
    })
  const topic = constants.LOBSANG_CONTENT_TOPIC
  const schemaMessage = await schema(topic)
  t.true(fakeFetch.called)
  t.is(schemaMessage.$schema, 'http://json-schema.org/draft-07/schema#')
})
