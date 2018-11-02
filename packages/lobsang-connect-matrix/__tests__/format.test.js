'use strict'
import test from 'ava'

import CONSTANTS from '../lib/constants'
import format from '../lib/format'

test('wraps the message', async (t) => {
  const message = 'Message in a bottle'
  const formattedMessage = await format(message)
  t.is(formattedMessage.body, message)
  t.is(formattedMessage.msgtype, CONSTANTS.MATRIX_NOTICE_TYPE)
})
