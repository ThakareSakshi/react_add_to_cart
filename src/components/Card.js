import React from 'react'

const Card = (props) => {
  return (
    <div className='card'>
        <div className='card-image'>
            <img src={props.src} alt="" />

        </div>
        <div className='card-info'>
            <h2>{props.title}</h2>
            <p className='price'>{props.price}</p>
            <p className='remove'>remove</p>
        </div>
        <div>
        <div>
        <i class="fa-solid fa-chevron-up"></i>
        </div>
        <div>1</div>
        <div><i class="fa-solid fa-chevron-down"></i></div>
        </div>
      
    </div>
  )
}

export default Card
