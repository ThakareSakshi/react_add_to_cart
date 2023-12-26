import React from 'react'
import {useState} from 'react'

const Card = (props) => {

  const [count,setCount]=useState(1);

  const onIncrease=()=>{
    let num=count+1
    setCount(num);
    props.handleTotalItem(1,props.price);

  }
  const onDecrease=(e)=>{
    let num=count-1;
    props.handleTotalItem(-1,-props.price);
    setCount(num);
    if(num<=0){
      
deleteCard(e);
    }
  }


  const deleteCard=(e)=>{
    e.target.parentNode.parentNode.parentNode.remove();
  }
  return (
    <div className='card'>
        <div className='card-image'>
            <img src={props.src} alt="" />

        </div>
        <div className='card-info'>
            <h2>{props.title}</h2>
            <p className='price'>${props.price}</p>
            <div><p className='remove' onClick={deleteCard}>remove</p></div>
        </div>
        <div>
        <div>
        <i className="fa-solid fa-chevron-up" onClick={onIncrease}></i>
        </div>
        <div>{count}
        </div>
        <div><i className="fa-solid fa-chevron-down" onClick={onDecrease}></i></div>
        </div>
      
    </div>
  )
}

export default Card
