import React from 'react'

function Card(props) {

    let icon = props.icon;
    let title = props.title;
    let description = props.description;

  return (
    <div className='card'>
      <div className='icon'>{icon}</div>
      <div className='title'>{title}</div>
      <div className='desc'>{description}</div>
    </div>
  )
}

export default Card
