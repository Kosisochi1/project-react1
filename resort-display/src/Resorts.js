import React from 'react'
import Resort from './Resort'

const Resorts = ({resorts, removeResort}) => {
  return (
    <section>
      <h1 className='title'> My Resort Gallary</h1>
      <div className='underline'></div>
      <div>
        {resorts.map((resort)=>{
          return(
            <Resort key={resort.id} resort = {resort} removeResort={ removeResort} />
             )
        })}
      </div>
    </section>
  )
}

export default Resorts