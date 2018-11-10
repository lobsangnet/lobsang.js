'use strict'
import test from 'ava'

import constants from '../lib/constants'

test('is an object', async (t) => {
  t.is(typeof constants, 'object')
})

test('has a LOBSANG_CONTENT_TOPIC property', async (t) => {
  t.not(constants.LOBSANG_CONTENT_TOPIC, undefined)
})

test('has a LOBSANG_CONTENT_SCHEMA_URL property', async (t) => {
  t.not(constants.LOBSANG_CONTENT_SCHEMA_URL, undefined)
})

test('has a LOBSANG_DEFAULT_LICENSE property', async (t) => {
  t.not(constants.LOBSANG_DEFAULT_LICENSE, undefined)
})
