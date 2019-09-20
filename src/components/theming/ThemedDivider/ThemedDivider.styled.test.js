import 'jest-styled-components'

import React from 'react'
import ThemedDivider from './ThemedDivider.js'
import renderer from 'react-test-renderer'
import styled from 'styled-components'

describe('ThemedDivider', () => {

  test('should create', () => {
    const tree = renderer.create(<ThemedDivider />).toJSON()

    expect(tree).toBeTruthy()
  })

  test('should has "border-top-color" equals to "fakeColor" ', () => {
    const tree = renderer.create(<ThemedDivider theme={{second: 'fakeColor'}} />).toJSON()

    expect(tree).toMatchSnapshot()
    expect(tree).toMatchSnapshot('border-top-color', 'fakeColor', {
      modifier: '&&&:not(.vertical):not(.horizontal)'
    })
  })
})


