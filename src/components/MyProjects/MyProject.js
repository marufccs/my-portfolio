import React, { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Link } from 'react-router-dom';
AOS.init();

const MyProject = ({myProject}) => {
    const {id, name, description, img, alt, link} = myProject;

    return (
        <div data-aos="zoom-in-right" data-aos-duration="3000">
            <div className="card card-compact w-96 bg-base-100 shadow-xl">
  <figure><img src={img} alt={alt} /></figure>
  <div className="card-body">
    <h2 className="card-title">{name}</h2>
    <p>{description.slice(0,100)}... <Link className='text-info' to={`/project/${id}`}>Read More</Link> </p>
    <div className="card-actions justify-end">
     <Link to={`/project/${id}`} >
     <button className="btn btn-outline btn-primary">View Project</button>
     </Link>
    </div>
  </div>
</div>
        </div>
    );
};

export default MyProject;