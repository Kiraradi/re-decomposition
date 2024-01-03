import React from 'react'
import { Title } from '../TitlesBar/TitlesBar'
import TitlesBar from '../TitlesBar/TitlesBar'
import SearchForm from '../SearchForm/SearchForm'

export interface Search{
    logoLink: string
    titleList: Title[]
    children: any
}

export default function Search(props: Search) {
  return (
    <div className='Search-wrapper'>
        <img src={props.logoLink} className='Search-logo' alt="logo" />
        <div className='Search'>
            <>
                <TitlesBar listTitle={props.titleList}></TitlesBar>
            </>
            <SearchForm/>
            {props.children}
        </div>
    </div>
  )
}
