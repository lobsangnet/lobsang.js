'use strict'
import test from 'ava'
import sinon from 'sinon'

import connect from '../lib/connect'

test.skip('returns an Promise', async (t) => {
  const fakeClient = {
    startClient: () => {},
    once: sinon.stub()
  }
  const observable = await connect(fakeClient)
  t.true(fakeClient.once.called)
})
