import React from 'react'

// The component creating news 

export interface News {
    logo: string
    description: string
    link: string
}

export default function News(props: News) {
  return (
    <a className='news' href={props.link}>
        <img className='news-logo' src={props.logo} alt='news-logo'/>
        <span className='news-description'>{props.description}</span>
    </a>
  )
}
