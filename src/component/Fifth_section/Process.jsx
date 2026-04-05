import React from 'react'
import Meal from '../../assets/6.png' 
import Checkout from '../../assets/7.png' 
import Seatback from '../../assets/8.png' 
import './Process.css'
 
const Process = () => {
  return (
       <div className='process'>
              <div className='process container'>
    
            <div className='ourprocess'>
                <h1>Our Process</h1>
                <p>MEALS THAT OUR CUSTOMERS ENJOY</p>
            </div>
            <div className='our_process_item'>
                <div className='cart'>
                    <p>Pick A Meal Plan</p>
                    <img src={Meal} alt="" />
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit sed </p>
                </div>
                <div className='cart'>
                       <p>Ready to Checkout</p>
                    <img src={Checkout} alt="" />
                      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit sed </p>
                </div>
                <div className='cart'>
                       <p>Seat Back and Relax</p>
                    <img src={Seatback} alt="" />
                      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit sed </p>
                </div>
            </div>
            </div>
        </div>
  )
}

export default Process