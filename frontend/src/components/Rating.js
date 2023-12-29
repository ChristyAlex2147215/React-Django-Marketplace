import React from 'react';

const Rating = ({text,value,color}) => {
  return (
    <div className='rating'>
    <span>
    <i style={{color}} className={value>=1 ? 'fas fa-star': value>=.5 ? 'fas fa-star-half-alt':'far fa-star'}>
    
    </i>
    </span>
    <span>
        {text && text}
    </span>
        
    </div>
  )
}

export default Rating