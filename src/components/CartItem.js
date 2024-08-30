import React from 'react'
import "./CartItem.css"

const CartItem = ({name,price , calories,image,quantity}) => {
  return (
    <div className='cart-item'>
        <img src={image} alt={name} className='cart-item-image'/>
        <div className='cart-item-info'>
            <h4>{name}</h4>
            <p>{calories}</p>
            <p>$ {price}</p>

        </div>
        <div className='cart-item-quantity'>
            <button>- {quantity} +</button>
            {/* <span>{quantity}</span>
            <button>+</button> */}

        </div>

        
    </div>
  )
}

export default CartItem