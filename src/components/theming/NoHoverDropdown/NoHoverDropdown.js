import { Dropdown } from 'semantic-ui-react'
import styled from 'styled-components'

const NoHoverDropdown = styled(Dropdown)`
  &&&.item {
    &:hover {
      background: transparent;
    }
    &.visible {
      background: transparent;
    }
  }
`

export default NoHoverDropdown
