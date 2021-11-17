import React from 'react'
import styled from 'styled-components'
import BaseToggle from 'components/Toggle'
import get from 'utils/get'
import Container from 'components/Container'
import BaseSearchbox from 'components/Searchbox'

const Toggle = styled(BaseToggle)`
  display: none;
  @media (min-width: ${get('breakpoints.desktop')}) {
    display: flex;
  }
`

const Wrapper = styled(Container)`
  @media (min-width: ${get('breakpoints.desktop')}) {
    height: 200px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`

const Searchbox = styled(BaseSearchbox)`
  display: flex;
  flex: 1;
  @media (min-width: ${get('breakpoints.desktop')}) {
    justify-content: center;
    margin: 0 48px;
  }
`

const Header = () => (
  <Wrapper>
    <img src="images/logo-light-mode.svg" alt="Where to Watch" />
    <Searchbox />
    <Toggle onChange={window.__setPreferredTheme} />
  </Wrapper>
)

export default Header