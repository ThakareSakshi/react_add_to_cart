import React from 'react'
import {useState} from 'react'

const Card = (props) => {

  const [count,setCount]=useState(1);

  const onIncrease=()=>{
    let num=count+1
    setCount(num);

  }
  const onDecrease=(e)=>{
    let num=count-1;
    setCount(num);
    if(num<=0){
      e.target.parentNode.parentNode.parentNode.remove();
 console.log(e.target.parentNode.parentNode);
    }
  }
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
        <i class="fa-solid fa-chevron-up" onClick={onIncrease}></i>
        </div>
        <div>{count}
        </div>
        <div><i class="fa-solid fa-chevron-down" onClick={onDecrease}></i></div>
        </div>
      
    </div>
  )
}

export default Card
