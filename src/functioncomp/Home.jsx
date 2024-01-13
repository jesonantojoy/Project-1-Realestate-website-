import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-regular-svg-icons'
import { faBasketball, faPhoneVolume } from '@fortawesome/free-solid-svg-icons'
import "../functioncomp/Home.css"
import { faFacebook, faGooglePlus, faPinterestP, faTwitter } from '@fortawesome/free-brands-svg-icons'
import { Link } from 'react-scroll'
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';


export default function Home() {
 return (
    <div>
    <div className='container1'>
      <div className='p1'>
      <div className='A'><FontAwesomeIcon icon={faEnvelope} /> <span>jesonantojoy@gmail.com</span>  ||  <FontAwesomeIcon icon={faPhoneVolume} /> <span>9566628303</span></div>

      </div>
      <div className='p2'>
      <div className='c'>
      <div><FontAwesomeIcon icon={faGooglePlus} /></div>
      <div><FontAwesomeIcon icon={faPinterestP} /></div>
      <div><FontAwesomeIcon icon={faTwitter}/></div>
     <div><FontAwesomeIcon icon={faFacebook} /></div> 
      <div><FontAwesomeIcon icon={faBasketball} /></div> 
      </div>
      </div>
     </div>
     <div className='navbar'> 
     <h1 className='logo'>JK Real Estate</h1>
  <ul className='nav-links'>
    <Link to="Home" className='Home' onClick={close}  spy={true} offset={-100} smooth={true}>
        <li>HOME</li>
        </Link>

        <Link to="me" className='me' onClick={close} spy={true} offset={-100} smooth={true}>
        <li>ABOUT</li>
        </Link>

        <Link to="Agents" className='Agents' spy={true} offset={-100} smooth={true}>
        <li>AGENTS</li>
        </Link>

        <Link to="Properties" className='Properties'spy={true} offset={-100} smooth={true}>
        <li>PROPERTIES</li>
        </Link>

        <Link to="Blog" className='Blog'spy={true} offset={-100} smooth={true}>
        <li>BLOG</li>
        </Link>

        <Link to="Contact" className='Contact'spy={true} offset={-100} smooth={true}>
        <li>CONTACT</li>
        </Link>
  </ul>
  </div>
        
  <Slide>

     <div className='Container3'>
    <h4 >If you Can dream, we can create it</h4>
    <h1 >Find Your House Without Any Difficulties</h1>
    <div className='button'><button>Know More</button></div>
          </div> 
          <div className='Container4'>
    <h4 >Landlords grow rich in their sleep</h4>
    <h1 >Real estate is an imperishable asset, ever increasing in value. It is the most solid security that human ingenuity has devised</h1>
    <div className='button'><button>Know More</button></div>
          </div> 
          <div className='Container5'>
    <h4 >Buy land, they're not making it anymore</h4>
    <h1 >Real estate cannot be lost or stolen, nor can it be carried away. Purchased with common sense, paid for in full, and managed with reasonable care, it is about the safest investment in the world</h1>
    <div className='button'><button>Know More</button></div>
          </div> 
          <div className='Container6'>
    <h4 >The best investment on Earth is Earth</h4>
    <h1 >Real estate is about the safest investment in the world</h1>
    <div className='button'><button>Know More</button></div>
          </div> 
        </Slide>
      </div>
      )
}


 