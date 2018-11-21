'use strict'
import test from 'ava'

import connect from '../lib/connect'

test.skip('returns an Promise', async (t) => {
  const fakeClient = {
    startClient: () => {}
  }
  const connectedClient = await connect(fakeClient)
  t.true(connectedClient === fakeClient)
})
