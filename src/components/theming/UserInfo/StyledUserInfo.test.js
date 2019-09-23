import 'jest-styled-components'

import React from 'react'
import StyledUserInfo from './StyledUserInfo'
import { device } from '../../../media'
import renderer from 'react-test-renderer'
import styled from 'styled-components'

describe('StyledUserInfo', () => {

  test('should create', () => {
    const tree = renderer.create(<StyledUserInfo />).toJSON()

    expect(tree).toBeTruthy()
  })

  test('should has "margin-bottom" equals to "15px" ', () => {
    const tree = renderer.create(<StyledUserInfo />).toJSON()

    expect(tree).toMatchSnapshot()
    expect(tree).toHaveStyleRule('margin-bottom', '15px', {
      media: `${device.tabletL}`,
      modifier: '&&&'
    })
  })
})


