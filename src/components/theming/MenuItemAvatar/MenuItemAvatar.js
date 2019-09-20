import {
  Image,
  Menu
} from 'semantic-ui-react'

import React from 'react'
import { device } from '../../../media'
import styled from 'styled-components'

const px = '1.14285714em'

const StyledMenuItemAvatar = styled(Menu.Item)`
  &&& {
    padding-left: ${({ position }) => position === 'right' ? 0 : px};
    padding-right: ${({ position }) => position === 'left' ? 0 : px};

    &:before {
      display: none;
    }

    @media ${device.tablet} {
      padding-left: ${px};
      padding-right: ${px}
    }
  }
`

const MenuItemAvatar = ({
  position = 'right',
  src,
  to = '/'
}) => {
  return (
    <StyledMenuItemAvatar position={position}>
      <Image
        as="a"
        circular
        href={to}
        src={src}
        width={35}
      />
    </StyledMenuItemAvatar>
  )
}

export default MenuItemAvatar
