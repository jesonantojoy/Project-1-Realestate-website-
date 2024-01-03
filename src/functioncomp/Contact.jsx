import React from 'react'
import "../functioncomp/Contact.css"
import { useForm } from "react-hook-form";
import { Link } from 'react-scroll';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-regular-svg-icons'
import { faBasketball, faPhoneVolume } from '@fortawesome/free-solid-svg-icons'
import { faFacebook, faGooglePlus, faPinterestP, faTwitter } from '@fortawesome/free-brands-svg-icons'


export default function Contact() {
  const {register,handleSubmit,formState,}=useForm({
    mode:"all",
    defaultValues:{
        name: "Jeson",
    }
})

const {errors}= formState
    
const onsubmit=(data)=>{  
console.log(data)
}


  return (
    <div>
      <section id='Contact'>
        <div className='email'>
          <h1 className='qoute'>Everting is about to change</h1>
          <p>Real estate is not just about buying and selling properties. It's about building dreams and creating a legacy.</p>
          <input type='email'name="email"
        placeholder="enter the email"
        {...register("email",{
            pattern:{ 
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                message: 'Invalid email address',
            }
            })}/>
            <span><button onSubmit={handleSubmit(onsubmit)}>Subscribe</button></span>
            <p>{errors?.email?.message}</p>
        </div>
      <div className='center'>
        <h1>JK Real Estate</h1>
        <ul className='links'>
    <Link to="Home" className='Home' onClick={close}  spy={true} offset={-100} smooth={true}>
        <li>HOME</li>
        </Link>

        <Link to="About" className='About' onClick={close} spy={true} offset={-100} smooth={true}>
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
      <div>
      <div className='row1'>
        <a><h4>ABOUT</h4></a>
        <a>ABOUT STUDIO</a>
        <a>JOBS</a>
        <a>TEAM</a>
        <a>SECURITY</a>
        <div className='row2'>
        <a><h4>INFORMATION</h4></a>
        <a>CUSTOMER SERVICE</a>
        <a>LEGAL INFORMATION</a>
        <a>SUPPORT</a>
        <a>FAQ</a>
        </div>
        <div className='row3'>
        <h4>RECENT NEWS</h4>
        <h6>Real estate outlook 2024: Is affordable housing finance ready for takeoff?</h6>
        <a>Tue,  02 Jan 2024</a>
        <h6>The Economic Times Real Estate Conclave 2024</h6>
        <a> Fri, 23 Feb 2024</a>
        </div>
        <div className='row4'>
          <ul>
            <h4>GET TOUCH</h4>
          <li>San Fransisco CA 125 California STP 2 Buildings</li>
          <li>www.studio.theme.com</li>
          <li>9566628303</li>
       </ul>
        </div>
        </div>
      </div>
      <div>

      </div>
      <div className='container7'>
      <div className='item4'> <span>PRIVACY POLICY |</span></div>
      <div className='item5'> <span>TERM & CONDITION</span></div>
      <div className='item6'><FontAwesomeIcon icon={faGooglePlus} />  <FontAwesomeIcon icon={faPinterestP} />  <FontAwesomeIcon icon={faTwitter}/>  <FontAwesomeIcon icon={faFacebook} />  <FontAwesomeIcon icon={faBasketball} />  </div>
     </div>
      </section>
      
    </div>
  )
}
