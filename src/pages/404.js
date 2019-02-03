import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const Center = styled.div`
  max-width: 960px;
  margin: 0 auto;
  padding: 4rem 0;
  text-align: center;
`

const NotFoundPage = () => (
  <Center>
    <Link to="/">Go Back Home</Link>
  </Center>
)

export default NotFoundPage
