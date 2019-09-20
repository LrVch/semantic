import { Dropdown } from 'semantic-ui-react'
import styled from 'styled-components'

const NoHoverDropdown = styled(Dropdown)`
  &&&.item {
    &:hover {
      background: 0 0;
    }
    &.visible {
      background: 0 0;
    }
  }
`

export default NoHoverDropdown
