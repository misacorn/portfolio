import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { Container, Logo } from '../../../common'
import NavbarLinks from '../NavbarLinks'

const Navbar = () => (
  <Container nav>
    <Brand as={Link} to="/">
      <BrandLogo as={Logo} />
      Misa
    </Brand>
    <NavbarLinks device="desktop" />
  </Container>
)

const Brand = styled.div`
  display: flex;
  align-items: center;
  color: ${p => p.theme.primaryColor};
`

const BrandLogo = styled.div`
  transition: 0.5s;
  height: 2.8rem;
  width: 2.8rem;
  margin-bottom: 0;
  margin-right: 0.5rem;
  &:hover {
    opacity: 0.7;
    transition: 0.5s;
    transform: rotate(360deg);
  }
`

export default Navbar
