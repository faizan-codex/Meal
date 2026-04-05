import "./Third_section.css"
import Foodimg from "../../assets/5.png"
import Logo from "../../assets/4.png"

import React from 'react'

const Third_section = () => {
  return (
    <div className="third_section">
    <div className="third_section container">
        
        <div className="left">
            <img src={Logo} alt="" srcset="" />
        </div>
        <div className="right">
            <div className="content">
                 <p>
                    SMOKED MILKFISH GARDEN SALAD
                 </p>
                 <h1>
                    April 2021 Meal Plans
                 </h1>
                 <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. 
                 </p>
            </div>
            <div className="meals_cart">
               <div className="foodcart" >
                <img src={Foodimg} alt="" />
                <button>ORDER NOW</button>
               </div>
               <div>
                 <div className="foodcart" >
                <img src={Foodimg} alt="" /> 
                 <button>ORDER NOW</button>
               </div>
               </div>
            </div>
           
        </div>
        </div>
    </div>

  )
}

export default Third_section