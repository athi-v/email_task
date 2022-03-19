import React, {useState} from 'react';
import { Divide as Hamburger } from 'hamburger-react'
import Logoimg from '../assets/extrahop.png'
import {Link} from 'react-scroll'

const Navcomps = () => {
    const [isOpen, setOpen] = useState(false)

  return (
<header>
<nav class="navbar navbar-expand-md  ">
  <div class="container-fluid">
    <Link class="navbar-brand" href="#">
    <img class='lg-image' src={Logoimg}  alt='Logo' />

    </Link>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <Hamburger class='ham' toggled={isOpen} toggle={setOpen} color='#fff' />
        </button>
    <div class="collapsse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
        <li class="nav-item">
        <li><Link className='list' to='hero' spy={true} smooth={true} duration={250} >Home</Link></li>  
              </li>
        <li class="nav-item">
        <Link className='list' to="cta" spy={true} smooth={true} offset={50} duration={500} >Download</Link> 
               </li>    
      </ul>    
    </div>
  </div>
</nav>
</header>
  )
}

export default Navcomps;