import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { Container, Logo, GithubIcon, Linkedin } from '../../common'
import Copyrights from './Copyrights'

const Footer = () => {
  const social = [
    {
      id: 1,
      name: 'Github',
      link: 'https://github.com/misacorn',
      icon: GithubIcon,
      last: false
    },
    {
      id: 2,
      name: 'Linkedin',
      link: 'https://www.linkedin.com/in/ngodieuhuong/',
      icon: Linkedin,
      last: false
    }
  ]
  return (
    <FooterContainer>
      <FullContainer>
        <Container footer>
          <List>
            <li>
              <Brand as={Link} to="/">
                <StyledLogo as={Logo} fill="#fff" /> Misa
              </Brand>
            </li>
          </List>
          <List>
            <li>Follow me on</li>
            <li>
              {social.map(({ id, name, link, icon, last }) => (
                <Social
                  key={id}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`follow me on ${name}`}
                  href={link}
                  last={last}
                >
                  <Grow as={icon} width="24" height="24" />
                </Social>
              ))}
            </li>
          </List>
        </Container>
      </FullContainer>
      <Copyrights />
    </FooterContainer>
  )
}

const FooterContainer = styled.footer`
  margin-top: 6rem;
`

const FullContainer = styled.div`
  width: 100%;
  padding: 8rem 0 2rem 0;
  color: #fff;
  background-image: ${p => p.theme.gradient};
`

const List = styled.ul`
  list-style: none;
  align-self: center;
  a {
    color: #fff;
  }
`

const Brand = styled.div`
  display: flex;
  align-items: center;
`

const StyledLogo = styled.div`
  transition: 0.5s;
  height: 4rem;
  width: 4rem;
  margin-right: 1rem;
  margin-bottom: 0;
  &:hover {
    opacity: 0.7;
    transition: 0.5s;
    transform: rotate(360deg);
  }
`

const Social = styled.a`
  margin-right: 1rem;
  ${({ last }) =>
    last &&
    `
		margin-right: unset;
	`}
`

const Grow = styled.div`
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  &:hover {
    transform: scale(1.1);
    transition: all 0.2s ease-in-out;
  }
`

export default Footer
