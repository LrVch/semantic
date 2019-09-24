import 'jest-styled-components'

import { configure, mount, shallow } from 'enzyme'

import Adapter from 'enzyme-adapter-react-16'
import NoPaddingSegment from './NoPaddingSegment'
import React from 'react'
import { mountWithTheme } from '../../../test'
import styled from 'styled-components'
import themes from '../../../themes'

configure({ adapter: new Adapter() })

describe('ThemedDivider', () => {

  let wrapper
  let mounted

  beforeEach(() => {
    wrapper  = shallow(<NoPaddingSegment />)
    mounted = mountWithTheme(<NoPaddingSegment />, themes.tomato)
  })

  test('should create', () => {
    expect(wrapper).toBeTruthy()
  })

  test('should has "border-color" equals to "#ff6347ab" ', () => {
    expect(mounted).toMatchSnapshot()
    expect(mounted).toHaveStyleRule('border-color', '#ff6347ab', {
      modifier: '&&&'
    })
  })
})


