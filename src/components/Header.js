import React from 'react'

const Header = () => {
  return (
   <nav className='header'>
    <div>UseReducer</div>
    <div className='cart-icon-container'>
        <span><i class="fa-solid fa-cart-plus"></i></span>
        <span className='totalItem'>3</span>
    </div>
   </nav>
  )
}

export default Header
