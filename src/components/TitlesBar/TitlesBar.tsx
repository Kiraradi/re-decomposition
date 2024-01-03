import React from 'react'

// The component for managing the list of news headlines

export interface TitlesBarInterface {
    listTitle: Title[]
    children?: any
}

export interface Title {
  link: string
  description: string
}

export default function TitlesBar(props: TitlesBarInterface) {
  return (
    <div className='TitlesBar'>
      <>
      {
        
        props.listTitle.map(title => {
          return <a href={title.link}>{title.description}</a>
        })
      }
    </>
    {props.children}
    
    </div>
    
  )
}
