'use strict'

import test from 'ava'

import send from '../lib/send'

test('sends a message to matrix', async (t) => {
  const message = 'Message in a bottle'
  const mockClient = {
    sendEvent: () => Promise.resolve(null)
  }
  const messageSent = await send(mockClient, message)
  t.true(messageSent)
})
