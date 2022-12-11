import React from 'react';
import maruf from '../../Pictures/Maruf.png'
import { BsLinkedin, BsGithub } from "react-icons/bs";
import { SiGmail } from "react-icons/si";
import './Banner.css'
import Resume from '../Resume/Resume';

const Banner = () => {
    return (
        <div id='banner' className='lg:flex justify-between'>
            <div>
            {/* <section >
                <span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span>
                <span></span><span></span>
            </section> */}
            </div>
          <div>
            <div className='sm:text-3xl lg:text-6xl lg:ml-12  font-extrabold  lg:mt-36 starting-lines'>
<h1 className='animate__animated animate__backInLeft'>Hello There</h1>
<h1 className='animate__animated animate__backInLeft animate__delay-1s w-full'>I'm Maruf Mozumder</h1>
<h1 className='animate__animated animate__backInLeft animate__delay-2s'>I'm a MERN Stack Developer</h1>
<div className='mt-4'>
  <h4 className='text-2xl'>Find Me On: </h4>
  <div className='text-2xl mt-2 mb-0 flex gap-6'>
    <a href='https://www.linkedin.com/in/maruf-mozumder7/' target='_blank'>
<BsLinkedin></BsLinkedin>
</a>
    <a href='https://github.com/marufccs' target='_blank'>
<BsGithub></BsGithub>
</a>
    <a href='https://marufmozumder7@gmail.com' target='_blank'>
<SiGmail></SiGmail>
</a>
  </div>
  <div className='resume'>
  <Resume/>
</div>
</div>
</div>
          </div>
          <div>
            <img className='image' src={maruf} width='1000' height='800' alt="Maruf-Mozumder" />
          </div>

        </div>
    );
};

export default Banner;