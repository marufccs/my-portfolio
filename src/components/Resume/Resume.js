import React from 'react';
import './Resume.css';
import maruf_resume from '../../Resume/Maruf-Mozumder-Resume.pdf'

const Resume = () => {
    return (
        <div className='mx-auto text-center mt-5 resume-button'>
         <a href={maruf_resume} download="Maruf Mozumder Resume">
         <button className="btn btn-outline btn-primary">Download My Resume</button>
         </a>
        </div>
    );
};

export default Resume;