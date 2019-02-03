import React from 'react'
import styled from 'styled-components'
import { Container } from '../../common'
import Skill from './Skill'
import Graphic from '../../../static/skills/graphic.svg'
import Uix from '../../../static/skills/ui.svg'
import WebDev from '../../../static/skills/webdev.svg'

const Skills = () => {
  const skills = [
    {
      id: 0,
      title: 'Content Creating',
      icon: `${Graphic}`
    },
    {
      id: 1,
      title: 'Rapid Product Prototyping',
      icon: `${Uix}`
    },
    {
      id: 2,
      title: 'Front-end development',
      icon: `${WebDev}`
    }
  ]
  return (
    <SkillsWrapper>
      <Container>
        <h2>Skills</h2>
        <SkillsContainer>
          {skills.map(skill => (
            <Skill key={skill.id} {...skill} />
          ))}
        </SkillsContainer>
      </Container>
    </SkillsWrapper>
  )
}

const SkillsWrapper = styled.div`
  margin-bottom: 1.45rem;
  color: white;
  padding: 8rem 1rem 4rem 1rem;
  clip-path: polygon(0% 14%, 100% 0, 100% 84%, 0 100%);
  background-image: ${p => p.theme.gradient};
`

const SkillsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2rem 0;
  max-width: 960px;
  margin: 0 auto;

  @media screen and (max-width: 680px) {
    flex-direction: column;
  }
`

export { Skills }
