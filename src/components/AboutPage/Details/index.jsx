import React from 'react'
import styled from 'styled-components'
import { Container } from '../../common'
import Envelope from '../../../static/about/envelope.svg'

const Details = () => (
  <Container details>
    <p>
      I’m Misa. I'm a business professional turned front-end developer
      looking for a front-end engineering position. I have
      strong knowledge of React ecosystem, Redux and a burning passion to learn
      more.
    </p>
    <p>
      Currently studying at{' '}
      <StyledLink
        href="https://www.haaga-helia.fi/en/frontpage"
        target="_blank"
        rel="noopener noreferrer"
      >
        Haaga-Helia
      </StyledLink>{' '}
      as a Software Engineering student.
    </p>
    <p>For business inquiries please get in touch with me at:</p>
    <DetailsContainer>
      <P>
        <Img src={Envelope} alt="email" />
        dieuhuongngo@gmail.com
      </P>
    </DetailsContainer>
  </Container>
)

const Img = styled.img`
  margin-right: 0.6rem;
`

const DetailsContainer = styled.div`
  padding-left: 1.5rem;
`

const P = styled.p`
  display: flex;
  align-items: center;
`

const StyledLink = styled.a`
  text-decoration: none;
  color: ${p => p.theme.primaryColor};
`

export { Details }
