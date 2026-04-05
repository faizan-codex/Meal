import React from 'react'
import Logoimg1 from '../../assets/2.png'
import Logoimg2 from '../../assets/10.png'
import Logoimg3 from '../../assets/9.png'
import './FoodItem.css'


const FootItem = () => {
  return (
<div className="FoodItem">
  <div className="FoodItem container">

    <div className="ourFavrite">
      <h1>Our Favorites</h1>
      <p>MEALS THAT OUR CUSTOMERS ENJOY</p>
    </div>

    <div className="foodItem_detail">
      <div className="food">
        <p className="food__title">Pomegranate Glazed Salmon</p>
        <img src={Logoimg2} alt="" />
        <p className="food__desc">Lorem ipsum dolor sit amet...</p>
      </div>

      <div className="food">
        <p className="food__title">Pomegranate Pear Green Salad</p>
        <img src={Logoimg1} alt="" />
        <p className="food__desc">Lorem ipsum dolor sit amet...</p>
      </div>

      <div className="food">
        <p className="food__title">Chef’s Signature Meal Plan</p>
        <img src={Logoimg3} alt="" />
        <p className="food__desc">Lorem ipsum dolor sit amet...</p>
      </div>
    </div>

  </div>
</div>

  )
}

export default FootItem