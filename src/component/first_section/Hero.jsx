import './Hero.css'
import Logo from '../../assets/2.png'
import Logoimg2 from '../../assets/10.png'
import Logoimg3 from '../../assets/9.png'



const Hero = () => {
  return (

    <div className='hero-section'>
      <div className='hero-section container'>

        <div className='image'>
          <img src={Logo} alt="" srcset="" />
          <div className='image_para'>
            <p className='p1'>SMOKED MILKFISH GARDEN SALA</p>
            <p className='p2'>Includes: Vegetable Lasagna, Fresh <br /> Fruit Platter, Fresh Lemon Juice, and Creme Brulee  </p>
          </div>
        </div>
        <div className='writting'>
          <h1> Worry-Free Meal Plans.
          </h1>
          <div className='btn_para'>
            <button className='btn1'>START YOUR JOURNEY</button>
            <button className='btn2'>LEARN MORE</button>
          </div>
          <div className='writing_img'>
            <div className='div'>
              <img src={Logoimg3} alt="" />
              <p>Pomegranate Glazed Salmon</p>
            </div>
            <div className='div'>
              <img src={Logoimg2} alt="" />
              <p>Pomegranate Glazed Salmon</p>
            </div>
            <div className='div'>
              <img src={Logoimg2} alt="" />
              <p>Pomegranate Glazed Salmon</p>
            </div>
            <div className='div'>
              <img src={Logoimg3} alt="" />
              <p>Pomegranate Glazed Salmon</p>
            </div>
          </div>
        </div>
      </div>
    </div>


  )
}

export default Hero