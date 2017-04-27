import expect from 'expect'
import assert from 'assert'
import React from 'react'
import {render, unmountComponentAtNode} from 'react-dom'

import If from 'src/'

describe('If', () => {
  let node

  beforeEach(() => {
    node = document.createElement('div')
  })

  afterEach(() => {
    unmountComponentAtNode(node)
  })

  it('hide test', () => {
    render(<If show={false}>hide</If>, node, () => {
       assert.equal(node.innerText, '');
    })
  })
  it('show test', () => {
    render(<If show={true}>show</If>, node, () => {
       assert.equal(node.innerText, 'show');
    })
  })
})
