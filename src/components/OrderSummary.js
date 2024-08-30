import React from 'react'
import "./OrderSummary.css"
import Fanta from "../assets/fanta.jpg"

const OrderSummary = () => {
  return (
    <div className='order-summary'>
        <h3>Frequntly ordered</h3>
        <div className='Frequntly ordered'>
            <div className='order-item'>
                <img src={Fanta} alt="" />
                <p>Fanta - 1 PET</p>
                <p>$100</p>
                </div>
            <div className='order-item'>
                <img src={Fanta} alt="" />
                <p>Fanta - 1 PET</p>
                <p>$100</p>
                </div>

        </div>
        <div className='total-bill'>
            <h4>Total-Bill</h4>
            <p>$500</p>

        </div>

    </div>
  )
}

export default OrderSummary