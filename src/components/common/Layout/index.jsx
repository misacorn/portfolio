import React from 'react'
import styled from 'styled-components'
import Header from '../../Includes/Header'
import Footer from '../../Includes/Footer'
import './index.scss'
import './main.scss'

const Layout = ({ children }) => (
  <>
    <Header />
    <LayoutStyled>{children}</LayoutStyled>
    <Footer />
  </>
)

const LayoutStyled = styled.div`
  width: 100%;
  padding-top: 7rem;
`

export { Layout }
