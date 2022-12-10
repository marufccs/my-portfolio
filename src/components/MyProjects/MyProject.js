import React from 'react';

const MyProject = ({myProject}) => {
    const {name, description, img, alt, link} = myProject;
    return (
        <div>
            <div className="card card-compact w-96 bg-base-100 shadow-xl">
  <figure><img src={img} alt={alt} /></figure>
  <div className="card-body">
    <h2 className="card-title">{name}</h2>
    <p>{description.slice(0,100)}... <a className='text-info' href=''>Read More</a> </p>
    <div className="card-actions justify-end">
     <a href={link} target='_blank'>
     <button className="btn btn-outline btn-primary">View Project</button>
     </a>
    </div>
  </div>
</div>
        </div>
    );
};

export default MyProject;