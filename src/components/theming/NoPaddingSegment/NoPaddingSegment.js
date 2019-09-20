import {
  Segment
} from 'semantic-ui-react'
import styled from 'styled-components'

export default styled(Segment)`
  &&& {
    /* padding: 0; */
    border-color: ${({theme}) => theme.second};
  }
`