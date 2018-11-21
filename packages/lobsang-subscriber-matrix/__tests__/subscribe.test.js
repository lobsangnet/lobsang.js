'use strict'

import test from 'ava'
import sinon from 'sinon'

import subscribe from '../lib/subscribe'

test.skip('it should call back on messages', async (t) => {
  const fakeClient = {
    on: () => {}
  }
  const spy = sinon.stub()
  subscribe(fakeClient, spy)
  // fakeClient.triggerMessage()
  t.true(spy.called)
})
