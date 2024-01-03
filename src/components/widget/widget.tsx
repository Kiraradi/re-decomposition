import React from 'react'

// the widget component

export interface widget{
    title: string
    children: any
}

export default function Widget(props: widget) {
  return (
    <div className='widget-wpaper'>
        <h2 className='widget-title'>{props.title}</h2>
        {props.children}
    </div>
  )
}
