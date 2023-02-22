import React, { useState} from 'react'

const Resort = ({ resort, removeResort}) => {
  const [readMore, setReadMore] = useState(false);
    const {image,info,name,price, id} = resort;
    
  return (
    <article className='single-resort'>
      <img src={image} alt={name} />
      <footer >
        <div className='single-resort-info'>
          <h3>{name}</h3>
          <h4>{price}</h4>
        </div>
        <p>
          {readMore ? info     : `${info.substring(0, 150)}...  `}

          <button className='.removeResort' onClick={() => { setReadMore(!readMore) }}>
            {readMore    ?         '  LESS' : 'MORE'}
          </button>
        </p>
        <button  className='btn' onClick={()=> removeResort (id)}>Remove.</button>

      </footer>
        
        
    </article>
  )
}

export default Resort