import React from 'react'
import styled from 'styled-components'
import { Container } from '../components/common'
import { Details } from '../components/AboutPage'
import MyImage from '../static/me.jpg'

const AboutContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  @media (max-width: 960px) {
    flex-direction: column;
  }
`

const Portrait = styled.div`
  display: flex;
  flex: 1;
  width: 100%;
  justify-content: center;
`

const ImgWrapper = styled.div`
  height: 450px;
  width: 337.5px;
`

const StyledImg = styled.img`
  height: 450px;
`

const About = () => (
  <Container>
    <h2>About me</h2>
    <AboutContainer>
      <Details />
      <Portrait>
        <ImgWrapper>
          <StyledImg src={MyImage} alt="me" />
        </ImgWrapper>
      </Portrait>
    </AboutContainer>
  </Container>
)

export default About
