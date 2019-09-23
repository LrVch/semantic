import 'jest-styled-components'

import { configure, shallow } from 'enzyme'

import Adapter from 'enzyme-adapter-react-16'
import React from 'react'
import StyledUserFeed from './StyledUserFeed'
import { mountWithTheme } from '../../../test'
import styled from 'styled-components'
import themes from '../../../themes'

configure({ adapter: new Adapter() })

describe('StyledUserFeed', () => {

  let wrapper
  let mounted

  beforeEach(() => {
    wrapper = shallow(<StyledUserFeed />)
    // mounted = mountWithTheme(<StyledUserFeed />, themes.tomato)
  })

  test('should create', () => {
    expect(wrapper).toBeTruthy()
  })

  test('applies defaulst and theme\'s styles ', () => {
    wrapper = shallow(<StyledUserFeed theme={{ second: 'fakeColor' }} />)

    // expect(wrapper).toMatchSnapshot()
    // expect(mounted).toHaveStyleRule('box-shadow', 'none', {
    //   modifier: '&&',
    // });
    // expect(mounted.find('.content:last-child')).toHaveStyleRule('background-color', '#fff', {
    //   modifier: '&&',
    // });
    // expect(wrapper).toHaveStyleRule('box-shadow', 'none', {
    //   modifier: '&&&'
    // })
    // expect(tree).toHaveStyleRule('margin-bottom', '15px', {
    //   modifier: '&&&'
    // })
  })
})


