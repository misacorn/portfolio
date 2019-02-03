import React from 'react'
import styled from 'styled-components'

//!
const CardBody = ({ svg, title, image }) => (
  <Wrapper svg={svg}>
    <img src={image} alt={title} />
  </Wrapper>
)

const Wrapper = styled.div`
  overflow: hidden;
  padding: 10px 2px;
  img {
    position: relative;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    width: 100%;
    display: block;
  }
`

export default CardBody
