import 'jest-styled-components'

import { configure, mount, shallow } from 'enzyme'

import Adapter from 'enzyme-adapter-react-16'
import { Dropdown } from 'semantic-ui-react'
import NoHoverDropdown from './NoHoverDropdown'
import React from 'react'
import styled from 'styled-components'

configure({ adapter: new Adapter() })

describe('ThemedDivider', () => {

  let wrapper
  let mounted

  beforeEach(() => {
    wrapper = shallow(
      <NoHoverDropdown>
        <Dropdown.Menu>
          <Dropdown.Header>Settings</Dropdown.Header>
          <Dropdown.Item>Account</Dropdown.Item>
        </Dropdown.Menu>
      </NoHoverDropdown>
    )
    mounted = mount(
      <NoHoverDropdown>
        <Dropdown.Menu>
          <Dropdown.Header>Settings</Dropdown.Header>
          <Dropdown.Item>Account</Dropdown.Item>
        </Dropdown.Menu>
      </NoHoverDropdown>
    )
  })

  test('should create', () => {
    expect(wrapper).toBeTruthy()
  })

  test('should has "background" equals to "transparent" with hover modifier ', () => {
    expect(mounted).toMatchSnapshot()

    expect(mounted).toHaveStyleRule('background', 'transparent', {
      modifier: '&&&.item:hover'
    })

    expect(mounted).toHaveStyleRule('background', 'transparent', {
      modifier: '&&&.item.visible'
    })
  })
})


