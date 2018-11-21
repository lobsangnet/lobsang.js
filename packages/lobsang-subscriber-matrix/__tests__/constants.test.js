'use strict'
import test from 'ava'

import CONSTANTS from '../lib/constants'

// TODO: Can't load .env
test.skip('has MATRIX_HOMESERVER', (t) => {
  t.truthy(CONSTANTS.MATRIX_HOMESERVER)
})

// TODO: Can't load .env
test.skip('has MATRIX_ACCESS_TOKEN', (t) => {
  t.truthy(CONSTANTS.MATRIX_ACCESS_TOKEN)
})

// TODO: Can't load .env
test.skip('has MATRIX_USER_ID', (t) => {
  t.truthy(CONSTANTS.MATRIX_USER_ID)
})

// TODO: Can't load .env
test.skip('has MATRIX_ROOM_ID', (t) => {
  t.truthy(CONSTANTS.MATRIX_ROOM_ID)
})

test('has MATRIX_ROOM_MESSAGE_TYPE', (t) => {
  t.truthy(CONSTANTS.MATRIX_ROOM_MESSAGE_TYPE)
})

test('has MATRIX_ROOM_TIMELINE_TYPE', (t) => {
  t.truthy(CONSTANTS.MATRIX_ROOM_TIMELINE_TYPE)
})
