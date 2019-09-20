import {
  Container,
  Dropdown,
  Menu
} from 'semantic-ui-react'

import MenuItemAvatar from '../MenuItemAvatar/MenuItemAvatar'
import NoHoverDropdown from '../NoHoverDropdown/NoHoverDropdown'
import React from 'react'
import styled from 'styled-components'

const StyledHeader = styled(Container)`
  .stackable.menu {
    border-bottom: 1px solid ${({ theme }) => theme.second};
    border-radius: 0;
    
    .item {
      &:before {
        background: ${({ theme }) => theme.main};
        opacity: 0.5
      }
    }
  }
`

const createOptions = values => values.map((v, i) => ({
  key: v, value: v, text: v
}))

const Header = ({
  activeTheme,
  onChangeTheme,
  themes,
}) => {
  return (
    <StyledHeader fluid>
      <Menu stackable>
        <Menu.Item>
          <img src='https://react.semantic-ui.com/logo.png' alt="logo" />
        </Menu.Item>

        <Menu.Item
          name='features'
        >
          Features
          </Menu.Item>

        <Menu.Item
          name='testimonials'
        >
          Testimonials
          </Menu.Item>

        <Menu.Menu position='right'>
          <Menu.Item>
            <Dropdown
              onChange={(e, d) => onChangeTheme(d.value)}
              defaultValue={activeTheme}
              options={createOptions(themes)}>
            </Dropdown>
          </Menu.Item>

          <NoHoverDropdown
            text='Joe Dou'
            pointing className='link item'
          >
            <Dropdown.Menu>
              <Dropdown.Header>Settings</Dropdown.Header>
              <Dropdown.Item>Account</Dropdown.Item>
              <Dropdown.Item>Intnertal</Dropdown.Item>
              <Dropdown.Divider />
              <Dropdown.Header>Actions</Dropdown.Header>
              <Dropdown.Item>Change Id</Dropdown.Item>
              <Dropdown.Item>Logout</Dropdown.Item>
            </Dropdown.Menu>
          </NoHoverDropdown>

          <MenuItemAvatar position="right" src='https://react.semantic-ui.com/images/wireframe/square-image.png' />
        </Menu.Menu>
      </Menu>
    </StyledHeader>
  )
}

export default Header;