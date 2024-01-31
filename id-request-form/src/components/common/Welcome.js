import React from 'react'
import './common.css'
import Progress from "./Progress";

const Welcome = () => {
    
    const content=(
        <section className="welcome container">
            <h1>               
                Welcome
               <Progress/>
            </h1>
        </section>
    )
  return content
}

export default Welcome
