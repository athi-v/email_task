import React from 'react';
import Heroimg from '../assets/Security.png'

const Hero = () => {
  return (
  <div class='hero'>
<div class="container-fluid">
<div class="row">

<div class="col-lg-6">
<h1>Network Detection And Response: <br/>
Cloud Security’s Missing Link</h1>
</div>

<div class="col-lg-6">
<img class='title-image' src={Heroimg}  alt='hero' />
</div>
</div>
</div>
</div>

  )
}

export default Hero;
