import React from 'react'
import './footer.css'
import { IconBrandFacebook } from '@tabler/icons-react';
import { IconBrandInstagram } from '@tabler/icons-react';
import { IconBrandTwitter } from '@tabler/icons-react';


export const footer = () => {
    return (
        <>
            <div className="footer">
                <div className="footer-sections ">
                    <h2>OUR SERVICES</h2>
                    <ul>
                        <li>What’s New</li>
                        <li>How to Order</li>
                        <li>Payment Method</li>
                        <li>Order Status</li>
                        <li>Subscription</li>
                    </ul>
                </div>
                <div className="footer-sections">
                    <h2>OUR Team</h2>
                    <ul>
                        <li> Our Local Farms</li>
                        <li>Craftsmanship</li>
                        <li>Our Sources</li>
                        <li>Sustainability</li>

                    </ul>

                </div>
                <div className="footer-sections">
                    <h2>LEGAL</h2>
                        <ul>
                        <li> Privacy Policy</li>
                        <li>Our Promise</li>
                        <li>More Information</li>
                             </ul>
                </div>
                <div className="footer-sections">
                    <h2>JOIN OUR NEWSLETTER</h2>
                    <p> Get the latest updates on our meals.</p>
                    <form action="">
                        <input type="email" placeholder='Your E-mail Address' className=''/>
                        <br />
                        <button>SUBMIT</button>
                    </form>


                </div>

            </div>
            <div className='footer-wrap'>
                <div className="footer-bottom-section container">
                    <div className='copyright'>
                        <p>Copyright 2021 Chef Norman Meals Co. All Rights Reserved.</p>
                    </div>
                    <div className='follow'>
                        <IconBrandFacebook stroke={2} size={30}/>
                        <IconBrandInstagram strike={2} size={30} />
                        <IconBrandTwitter strike={2} size={30}/>
                    </div>
                </div>
            </div>



        </>
    )
}
export default footer