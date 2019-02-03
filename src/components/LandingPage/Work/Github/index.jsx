import React from 'react'
import { Project, GithubIcon } from '../../../common'
import HackerNews from '../../../../static/github/hacker-news.PNG'
import Youtube from '../../../../static/github/youtube-video-search.PNG'
import Burger from '../../../../static/github/burger.jpg'

const Github = () => {
  const repositories = [
    {
      id: 0,
      title: 'Hacker News',
      image: `${HackerNews}`,
      link: 'https://hacker-news-search.netlify.com/'
    },
    {
      id: 1,
      title: 'Youtube Video Search',
      image: `${Youtube}`,
      link: 'https://youtube-video-search.netlify.com/'
    },
    {
      id: 2,
      title: 'Burger Order',
      image: `${Burger}`,
      link: 'https://burger-order.netlify.com/'
    }
  ]
  return (
    <Project
      title="Projects on Github"
      icon={GithubIcon}
      projects={repositories}
      link="https://github.com/misacorn"
      color="#000"
      svg
    />
  )
}

export default Github
