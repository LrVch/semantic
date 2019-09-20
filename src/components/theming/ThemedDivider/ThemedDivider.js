import {
  Divider
} from 'semantic-ui-react'
import styled from 'styled-components'

export default styled(Divider)`
  &&&:not(.vertical):not(.horizontal) {
    border-top-color:  ${({ theme }) => theme.second};
  }
`