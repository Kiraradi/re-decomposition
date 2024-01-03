import React from 'react'

import TitlesBar from '../TitlesBar/TitlesBar'
import News from '../News/News'

//The main component of the news

export default function NewsBar() {

    const TitleBarContent = {
        listTitle:[
            {link: '#', description: 'Title 1'},
            {link: '#', description: 'Title 2'},
            {link: '#', description: 'Title 3'}
        ],
        date: '15.08.1887'
    }

    const newsList = [
        {
            logo: '#',
            description: 'News 1',
            link: "#"
        },
        {
            logo: '#',
            description: 'News 2',
            link: "#"
        },
        {
            logo: '#',
            description: 'News 3',
            link: "#"
        }
    ]

  return (
    <div className='NewsBar'>
        <TitlesBar listTitle={TitleBarContent.listTitle}>
            <div className='TitlesBar-Date-Wrapper'>
                <span className='TitlesBar-Date'>{TitleBarContent.date}</span>
            </div>
        </TitlesBar>
        <>
            {
                newsList.map((content) => {
                   return<News logo={content.logo} description={content.description} link={content.link}></News>
                })  
            }
        </>
    </div>
  )
}
