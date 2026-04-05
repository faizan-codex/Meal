import './navbar.css'
import { IconMenu2 ,IconShoppingCart,IconSearch} from '@tabler/icons-react';
import Logo from '../../assets/logo.png'



const Navbar = () => {
  return (
          <nav className='navbar'>
            <div className="navbar container">
             <div className='logo'>
             <img src= {Logo} alt="" />
             </div>
             <div className='menu'>
              <ul>
                <li>Home</li>
                <li>About</li>
                <li>shop</li>
                <li>Contact Us</li>
              
              </ul>
             </div>
             <div className='btn'>
              <button>Order Your Meal</button>
              <IconMenu2 className='icon' stroke={2} />
               <IconSearch style={{ color : '#6E9A89'}} />
               <IconShoppingCart style={{ color : '#6E9A89'}} />
             </div>
         </div>
    </nav>
  )
}

export default Navbar