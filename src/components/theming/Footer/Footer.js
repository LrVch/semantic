import { Container } from 'semantic-ui-react'
import React from 'react'
import styled from 'styled-components'

const StyledFooter = styled(Container)`
  background-color: ${({theme}) => theme.main};
  color: ${({theme}) => theme.invert};
  padding: 10px;
`

const Footer = (props) => {
  return (
    <StyledFooter fluid>
      Deserunt laborum et exercitation excepteur aliqua Lorem exercitation do minim quis sit veniam.
    </StyledFooter>
  )
}

export default Footer;