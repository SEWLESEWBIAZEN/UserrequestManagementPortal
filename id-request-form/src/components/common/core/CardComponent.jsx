import React from 'react'
import './card.css'

const CardComponent = ({card}) => {
    return (    
            <div class="card col-md-3 mx-2 border-info card-hover" >
                <div class="card-body">
                    <h5 class="card-title text-info">{card.title}</h5>
                    <hr/>
                    <p class="card-text text-center">{card.description}</p>
                    <a href="#" class="card-link">Read More...</a>                    
                </div>
            </div>
            
            
        
    )
}

export default CardComponent