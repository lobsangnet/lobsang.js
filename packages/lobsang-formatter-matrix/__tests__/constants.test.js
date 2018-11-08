'use strict'
import test from 'ava'

import CONSTANTS from '../lib/constants'

test('has MATRIX_NOTICE_TYPE', (t) => {
  t.truthy(CONSTANTS.MATRIX_NOTICE_TYPE)
})
