import React from 'react'
import { FaStar ,FaRegHeart  } from 'react-icons/fa'


export default function ProductItem(props) {
  return (
    <div className='product'>
    <img src={props.img} alt="product"/>
    <h2>{props.name}</h2>
    <p>{props.description}</p>
    <ul>
        <i><FaStar /></i>
        <i><FaStar /></i>
        <i><FaStar /></i>
        <i><FaStar /></i>
        <i><FaStar /></i>
    </ul>
    <h1>
        <p>{props.price}</p>
        <p>{props.price}</p>
    </h1>
    <button className='btn_cart'>Add to cart</button>
    <div>
        <i><FaRegHeart /></i>
    </div>
</div>
  )
}
