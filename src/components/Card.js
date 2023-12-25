import React from 'react'

const Card = () => {
  return (
    <div className='card'>
        <div className='card-image'>
            <img src="https://www.course-api.com/images/cart/phone-1.png" alt="" />

        </div>
        <div className='card-info'>
            <h2>samsung galaxy</h2>
            <p className='price'>$233.12</p>
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
