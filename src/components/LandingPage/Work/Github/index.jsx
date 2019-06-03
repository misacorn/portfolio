import React from 'react'
import { Project, GithubIcon } from '../../../common'
import HackerNews from '../../../../static/github/hacker-news.png'
import Youtube from '../../../../static/github/youtube.png'
import Burger from '../../../../static/github/burger.png'
import PersonalTrainer from '../../../../static/github/personal-trainer.png'
import TeliaMenu from '../../../../static/github/telia-menu.png'
import Upcloud from '../../../../static/github/upcloud-servers.png'

const Github = () => {
  const repositories = [
    {
      id: 0,
      title: 'Telia English Menu',
      image: `${TeliaMenu}`,
      link: 'https://telia-english-menu.netlify.com/',
      code: 'https://github.com/misacorn/telia-enlgish-menu'
    },
    {
      id: 1,
      title: 'UpCloud Servers',
      image: `${Upcloud}`,
      link: 'https://misa-upcloud.netlify.com/',
      code: 'https://github.com/misacorn/upcloud-servers'
    },
    {
      id: 2,
      title: 'Hacker News',
      image: `${HackerNews}`,
      link: 'https://hacker-news-search.netlify.com/',
      code: 'https://github.com/misacorn/hacker-news'
    },
    {
      id: 3,
      title: 'Youtube Video Search',
      image: `${Youtube}`,
      link: 'https://youtube-video-search.netlify.com/',
      code: 'https://github.com/misacorn/react-youtube-vids'
    },
    {
      id: 4,
      title: 'Burger Order',
      image: `${Burger}`,
      link: 'https://burger-order.netlify.com/',
      code: 'https://github.com/misacorn/burger-builder'
    },
    {
      id: 5,
      title: 'Personal Trainer Database',
      image: `${PersonalTrainer}`,
      link: 'https://personal-trainer-database.netlify.com/',
      code: 'https://github.com/misacorn/personal-trainer-database'
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
