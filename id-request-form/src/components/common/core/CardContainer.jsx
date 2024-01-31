import React from 'react'
import CardComponent from './CardComponent'
import './card.css'

const CardContainer = () => {
    const cards=[
        {
            title:"VISION",
            description:"Destined to be the leading inclusive Bank in Africa!",
            link:""
        },
        {
            title:"MISSION",
            description:"To provide efficient and effective full-fledged banking services by utilizing qualified, honest and motivated staff and state-of-the-art technology and thereby optimizing shareholders’ interest.",
            link:""
        },
        {
            title:"VALUES",
            description:"Corporate Social responsibility, Creativity and innovation, Professionalism ,Highest personal standards of integrity at all levels",
            link:""
        },
    ]
  return (
    <div className='d-xs-block d-md-flex justify-content-evenly card-container'>
        {cards.map((card)=>{
            return <CardComponent card={card}/>
        })}
        
    </div>
  )
}

export default CardContainer