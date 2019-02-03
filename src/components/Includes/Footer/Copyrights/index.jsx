import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { SmallerContainer } from '../../../common'
import netlifyIcon from '../../../../static/footer/netlify.svg'
import reactIcon from '../../../../static/footer/react.svg'

const Copyrights = () => (
  <SmallerContainer tc copyrights>
    <Links>
      ©{' '}
      <Item as={Link} to="/">
        Misa
      </Item>
      {`${new Date().getFullYear()} `}
      Built with
      <a href="https://reactjs.org/" rel="noopener noreferrer" target="_blank">
        <Item src={reactIcon} img alt="React" />
      </a>
      and hosted on
      <a
        href="https://www.netlify.com"
        rel="noopener noreferrer"
        target="_blank"
      >
        <Item src={netlifyIcon} img alt="Netlify" />
      </a>
    </Links>
  </SmallerContainer>
)

const Links = styled.div`
  margin: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  @media (max-width: 960px) {
    flex-direction: column;
  }
`

const Item = styled.img`
  margin: 0 0.2rem;
  color: ${p => p.theme.primaryColor};
  ${({ img }) =>
    img &&
    `
		position: relative;
		top: .15rem;
	`}
`

export default Copyrights
