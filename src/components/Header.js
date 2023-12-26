import React from 'react'

const Header = ({totalitem}) => {
  return (
   <nav className='header'>
    <div>UseReducer</div>
    <div className='cart-icon-container'>
        <span><i class="fa-solid fa-cart-plus"></i></span>
        <span className='totalItem'>{totalitem}</span>
    </div>
   </nav>
  )
}

export default Header
