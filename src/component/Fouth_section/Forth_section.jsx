import React from 'react'
import './Forth.css'
import Foodimg from "../../assets/5.png"
import Logo from "../../assets/4.png"
const Forth_section = () => {
  return (
    <div className='Forth_section'>
             <div className='Forth_section container'>
               <div className="left">
                         <div className="recipes">
                              <p>
                                 SMOKED MILKFISH GARDEN SALAD
                              </p>
                              <h1>
                                 Recipes
                              </h1>
                              <p>
                                 Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. 
                              </p>
                         </div>
                         <div className="see_more_item">
                            <div className="recipe_cart" >
                             <img src={Foodimg} alt="" />
                             <button>SEE RECIPE</button>
                            </div>
                              <div className="recipe_cart" >
                             <img src={Foodimg} alt="" /> 
                              <button>SEE RECIPE</button>
                            </div>
                               <div className="recipe_cart" >
                             <img src={Foodimg} alt="" /> 
                              <button>SEE RECIPE</button>
                            </div>
                             <div className="recipe_cart" >
                             <img src={Foodimg} alt="" />
                             <button>SEE RECIPE</button>
                            </div>
                           
                         </div>
                        
                     </div>
                     <div className="right">
                          <img src={Logo} alt="" srcset="" />
                     </div>
             
        
           </div>
    </div>
  )
}

export default Forth_section