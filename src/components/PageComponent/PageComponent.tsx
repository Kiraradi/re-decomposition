import React from 'react'
import NewsBar from '../NewsBar/NewsBar'
import Search from '../Search/Search'
import Widget from '../widget/widget'

export default function PageComponent() {

    const searchComponentContent = {
        logoLink: "#",
        titleList:[
            {link: '#', description: 'Title 1'},
            {link: '#', description: 'Title 2'},
            {link: '#', description: 'Title 3'}
        ]
    }
  return (
    <div className='PageComponent'>
        <NewsBar/>
        <Search logoLink={searchComponentContent.logoLink} titleList={searchComponentContent.titleList}>
            <div className='Baner'>Baner</div>
        </Search>

        <div className='widgetBar'>
            <Widget title='Weather'>
                <div className='widget-Content'></div>
            </Widget>
            <Widget title='German map'>
                <div className='widget-Content'></div>
            </Widget>
            <Widget title='Live'>
                <div className='widget-Content'></div>
            </Widget>
        </div>

    </div>
  )
}
