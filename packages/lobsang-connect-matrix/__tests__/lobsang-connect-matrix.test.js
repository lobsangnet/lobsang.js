'use strict'

import test from 'ava'

import lobsangConnectMatrix from '..'

test('without a message', async (t) => {
  const message = ''
  const result = await lobsangConnectMatrix(message)
  t.is(result, null, 'Message not set')
})

test('with a message', async (t) => {
  const message = 'Message in a bottle'
  const result = await lobsangConnectMatrix(message)
  t.not(result, null)
})
