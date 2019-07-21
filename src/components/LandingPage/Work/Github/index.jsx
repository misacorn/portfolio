import React from 'react'
import { Project, GithubIcon } from '../../../common'
import DadsJokes from '../../../../static/github/dads-jokes.png'
// import Burger from '../../../../static/github/burger-order.png'
import PersonalTrainer from '../../../../static/github/personal-trainer.png'
import TeliaMenu from '../../../../static/github/telia-menu.png'
import Upcloud from '../../../../static/github/upcloud-servers.png'
import Weather from '../../../../static/github/weather.png'
import Movies from '../../../../static/github/movies.png'

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
      title: "Dad's Jokes",
      image: `${DadsJokes}`,
      link: 'https://dads-jokes.netlify.com/',
      code: 'https://github.com/misacorn/dad-jokes'
    },
    {
      id: 3,
      title: 'Weather App (NodeJS)',
      image: `${Weather}`,
      link: 'https://misa-weather-app.herokuapp.com/',
      code: 'https://github.com/misacorn/weather-app'
    },
    // {
    //   id: 4,
    //   title: 'Burger Order',
    //   image: `${Burger}`,
    //   link: 'https://burger-order.netlify.com/',
    //   code: 'https://github.com/misacorn/burger-builder'
    // },
    {
      id: 4,
      title: 'Movie DB (VueJS)',
      image: `${Movies}`,
      link: 'https://moviedb-vuejs.netlify.com',
      code: 'https://github.com/misacorn/moviedb-vuejs'
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
