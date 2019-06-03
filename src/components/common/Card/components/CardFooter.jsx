import React from 'react'
import styled from 'styled-components'

const CardFooter = ({ description, link, code }) => (
  <Wrapper>
    <p>{description}</p>
    <a target="_blank" rel="noopener noreferrer" href={link}>
      Link
    </a>
    <a id="right" target="_blank" rel="noopener noreferrer" href={code}>
      Code
    </a>
  </Wrapper>
)

const Wrapper = styled.div`
  padding: 16px 24px;
  a {
    color: ${p => p.theme.primaryColor};
    font-weight: normal;
    font-size: 16px;
    text-transform: uppercase;
  }
  #right {
    float: right;
  }
  p {
    color: #212121;
    font-size: 16px;
    line-height: 1.46429em;
    margin-bottom: 1rem;
  }
`

export default CardFooter
