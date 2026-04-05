import './Testimonial.css'
import Logo from '../../assets/8.png'


import React from 'react'

const Tesmotinial = () => {
  return (
    <div className="testimonial">
      <div className="testimonial container">
        <div className='heading'>
          <h1>What They Say</h1>
        </div>
        <div className='review'>
          <div className='people'>
            <img src={Logo} alt="" srcset="" />
            <p>ANNA LUCAS</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore.
               </p>
          </div>
          <div className='people'>
            <img src={Logo} alt="" srcset="" />
            <p>ANNA LUCAS</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore.
              </p>
          </div>
          <div className='people'>
            <img src={Logo} alt="" srcset="" />
            <p>ANNA LUCAS</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore.
           </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Tesmotinial