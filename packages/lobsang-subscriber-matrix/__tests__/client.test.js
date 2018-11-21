'use strict'
import test from 'ava'

import client from '../lib/client'

test('it creates a matrix client', async (t) => {
  const matrixClient = await client()
  t.truthy(matrixClient.startClient)
})
