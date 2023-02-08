import React from 'react'
import './hero_card.scss'

const HeroCard = ({img,name,year}) => {
  return (
    <div className="block">
    <div className="info">
      <h3 className="name">{name}</h3>
      <p className="year">{year}</p>
    </div>
    <img
      src={img}
      alt=""
    />
  </div>
  )
}

export default HeroCard