import React from 'react';
import maruf from '../../Pictures/Maruf.png'
import './Banner.css'
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
            <div className='sm:text-3xl lg:text-6xl  font-extrabold  lg:mt-36 starting-lines'>
<h1 className='animate__animated animate__backInLeft'>Hello</h1>
<h1 className='animate__animated animate__backInLeft animate__delay-1s w-full'>I'm Maruf Mozumder</h1>
<h1 className='animate__animated animate__backInLeft animate__delay-2s'>I'm a MERN Stack Developer</h1>
</div>
          </div>
          <div>
            <img className='image' src={maruf} width='1000' height='800' alt="Maruf-Mozumder" />
          </div>

        </div>
    );
};

export default Banner;