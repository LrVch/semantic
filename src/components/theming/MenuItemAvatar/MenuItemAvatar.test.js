import 'jest-styled-components'

import { StyledMenuItemAvatar, px } from './MenuItemAvatar'
import { configure, mount, shallow } from 'enzyme'

import Adapter from 'enzyme-adapter-react-16'
import React from 'react'
import { device } from '../../../media'
import styled from 'styled-components'

configure({ adapter: new Adapter() })

describe('StyledMenuItemAvatar', () => {

  let wrapper

  beforeEach(() => {
    wrapper = mount(<StyledMenuItemAvatar></StyledMenuItemAvatar>)
  })

  test('should create', () => {
    expect(wrapper).toBeTruthy()
  })

  test('should has default styles', () => {
    expect(wrapper).toMatchSnapshot()

    expect(wrapper).toHaveStyleRule('display', 'none', {
      modifier: '&&&:before'
    })

    expect(wrapper).toHaveStyleRule('padding-left', `${px}`, {
      modifier: '&&&',
      media: `${device.tablet}`,
    })

    expect(wrapper).toHaveStyleRule('padding-right', `${px}`, {
      modifier: '&&&',
      media: `${device.tablet}`,
    })

    expect(wrapper).toHaveStyleRule('padding-left', `${px}`, {
      modifier: '&&&'
    })

    expect(wrapper).toHaveStyleRule('padding-right', `${px}`, {
      modifier: '&&&'
    })

    wrapper.setProps({position: 'left'})

    expect(wrapper).toHaveStyleRule('padding-left', `${px}`, {
      modifier: '&&&'
    })

    expect(wrapper).toHaveStyleRule('padding-right', '0', {
      modifier: '&&&'
    })

    wrapper.setProps({position: 'right'})

    expect(wrapper).toHaveStyleRule('padding-left', '0', {
      modifier: '&&&'
    })

    expect(wrapper).toHaveStyleRule('padding-right', `${px}`, {
      modifier: '&&&'
    })
  })
})


