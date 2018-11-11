'use strict'
import test from 'ava'

import constants from '../lib/constants'
import wrapper from '../lib/sync'

test('checks for state against prepared state', async (t) => {
  const preparedState = constants.MATRIX_STATE_PREPARED
  const isSyncState = wrapper.isSyncState(preparedState)
  t.true(isSyncState)
})

test('checks for state against syncing state', async (t) => {
  const syncingState = constants.MATRIX_STATE_SYNCING
  const isSyncState = wrapper.isSyncState(syncingState)
  t.true(isSyncState)
})

test('checks for state against any other state', async (t) => {
  const otherState = 'OTHER'
  const isSyncState = wrapper.isSyncState(otherState)
  t.false(isSyncState)
})
