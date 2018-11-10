'use strict'
import test from 'ava'

import format from '../lib/format'

test('wraps a message in a schemaMessage', async (t) => {
  const message = 'Message in a bottle'
  const schemaMessage = format(message)
  t.is(schemaMessage.content, message)
  t.not(typeof schemaMessage.topic, undefined)
  t.not(typeof schemaMessage.license, undefined)
  t.not(typeof schemaMessage.contentType, undefined)
  t.not(typeof schemaMessage.created, undefined)
  t.not(typeof schemaMessage.derivedFrom, undefined)
  t.not(typeof schemaMessage.id, undefined)
  t.not(typeof schemaMessage.issuer, undefined)
})
