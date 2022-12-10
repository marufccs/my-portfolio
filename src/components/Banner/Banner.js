import React from 'react';
import maruf from '../../Pictures/Maruf.png'
import './Banner.css'
const Banner = () => {
    return (
        <div className='flex justify-between'>
            <div>
            <section >
                <span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span>
                <span></span><span></span>
            </section>
            </div>
          <div>
         
            <div className='lg:text-6xl md:text-4xl font-extrabold lg:mt-36'>
<h1 className='animate__animated animate__backInLeft'>Hello</h1>
<h1 className='animate__animated animate__backInLeft animate__delay-1s'>I'm Maruf Mozumder</h1>
<h1 className='animate__animated animate__backInLeft animate__delay-2s'>I'm a MERN Stack Developer</h1>
</div>
          </div>
          <div className=''>
            <img src={maruf} width='1000' height='800' alt="Maruf-Mozumder" />
           
          </div>

        </div>
    );
};

export default Banner;