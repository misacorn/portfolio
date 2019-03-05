import React from 'react'
import styled from 'styled-components'
import { SmallerContainer } from '../../common'

const Intro = () => (
  <SmallerContainer intro>
    <IntroWrapper>
      <h1>I'm Misa</h1>
      <p>
        A front-end developer with heavy focus on React ecosystem and Redux.
        Excited about styled-components, GraphQL and design. I often help out
        open source projects on Github and enjoy coding in my free time.
      </p>
      <MagicalButton
        href="https://drive.google.com/open?id=1L4MflR4Fh55CZb2FuVXCsIHBY9tVGtDC"
        rel="noopener noreferrer"
        target="_blank"
      >
        View resume
      </MagicalButton>
    </IntroWrapper>
  </SmallerContainer>
)

const MagicalButton = styled.a`
  color: #fff;
  text-decoration: none;
  padding: 0.9rem 1.4rem;
  background: ${p => p.theme.primaryColor};
  border-radius: 0.3rem;
  box-shadow: ${p => p.theme.primaryBoxShadow} 0px 13px 19px -6px;
  transition: 0.5s;
  &:hover {
    box-shadow: 0px 0px 17px 0px ${p => p.theme.secondaryBoxShadow};
    transition: 0.5s;
  }
`

const IntroWrapper = styled.div`
  padding: 3rem 1rem;
  p {
    color: gray;
    margin-bottom: 2rem;
  }
`

export { Intro }
