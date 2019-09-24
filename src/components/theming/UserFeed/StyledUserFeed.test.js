import 'jest-styled-components'

import { configure, mount, shallow } from 'enzyme'

import Adapter from 'enzyme-adapter-react-16'
import React from 'react'
import StyledUserFeed from './StyledUserFeed'
import { ThemeProvider } from 'styled-components'
import UserFeed from './UserFeed'
import { mountWithTheme } from '../../../test'
import styled from 'styled-components'
import themes from '../../../themes'

configure({ adapter: new Adapter() })

describe('StyledUserFeed', () => {

  let wrapperStyled
  let mountedStyled
  let wrapperUserFeed
  let mountedUserFeed

  beforeEach(() => {
    wrapperStyled = shallow(<StyledUserFeed />)
    wrapperUserFeed = shallow(<UserFeed />)
    mountedStyled = mountWithTheme(<StyledUserFeed />, themes.tomato)
    mountedUserFeed = mountWithTheme(<UserFeed />, themes.tomato)
  })

  test('should create', () => {
    expect(wrapperStyled).toBeTruthy()
  })

  test('applies default and theme\'s styles ', () => {
    expect(mountedStyled).toMatchSnapshot()

    expect(mountedStyled).toHaveStyleRule('box-shadow', 'none', {
      modifier: '&&&',
    });

    expect(mountedUserFeed.find('div.user-feed')).toHaveLength(1);

    expect(mountedUserFeed).toHaveStyleRule('border-top-color', '#ff6347ab', {
      modifier: '&&& .user-feed',
    });
  })
})


