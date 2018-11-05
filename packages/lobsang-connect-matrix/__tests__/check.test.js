'use strict'

import test from 'ava'

import check from '../lib/check'

test('without a message', async (t) => {
  const message = ''
  const error = await t.throwsAsync(async () => {
    await check(message)
  })
  t.is(error.message, 'Argument must not be falsy!')
})

test('with a non-string message', async (t) => {
  const message = 42
  const error = await t.throwsAsync(async () => {
    await check(message)
  })
  t.is(error.message, 'Argument must be a string!')
})

test('with a message', async (t) => {
  const message = 'Message in a bottle'
  await t.notThrowsAsync(async () => {
    await check(message)
  })
  const result = await check(message)
  t.is(result, message)
})
