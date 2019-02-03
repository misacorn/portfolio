import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const NavLink = styled.div`
  text-decoration: none;
  color: ${p => p.theme.primaryColor};
  ${({ device }) =>
    device === 'desktop' &&
    `
                margin-right: 1rem;
                &:last-child {
                    margin-right: unset;
                }
            `}
  ${({ device }) =>
    device === 'mobile' &&
    `
                margin-bottom: 1rem;
                &:last-child {
                    margin-bottom: unset;
                }
            `}
            &.current {
    background: ${p => p.theme.secondaryBoxShadow};
  }
`
const Links = styled.div`
  ${({ device }) =>
    device === 'desktop' &&
    `
                @media (max-width: 960px) {
                    display: none;
                }
            `}
  ${({ device }) =>
    device === 'mobile' &&
    `
                padding: 3rem;
                display: flex;
                flex-direction: column;
            `}
`

const NavbarLinks = ({ device }) => (
  <Links device={device}>
    <NavLink as={Link} to="/" device={device} activeclassame="current">
      Home
    </NavLink>
    <NavLink as={Link} to="/about" device={device} activeclassame="current">
      About
    </NavLink>
  </Links>
)

export default NavbarLinks
