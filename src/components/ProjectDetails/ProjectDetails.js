import React from 'react';
import './ProjectDetails.css'


const ProjectDetails = () => {

    


    return (
        <div className='text-center'>
            <div className='text-6xl'>
            <h1>Project Title</h1>
            </div>
            <div className='mx-auto  lg:ml-64 rounded mt-6'>
                <img className='rounded-md website-image' src='https://www.robin-noorda.com/uploads/1/6/8/3/16830688/3347022_orig.jpg' width='1000' height='400'></img>
            </div>
            <div className='flex gap-x-6 mt-6 lg:ml-96 lg:pl-32'>
                <div className='link-button'>
                <button className="btn btn-outline btn-primary ">Website Link</button>
                </div>
                <div className='link-button'>
                <button className="btn btn-outline btn-primary">Github Client</button>
                </div>
                <div className='link-button'>
                <button className="btn btn-outline btn-primary">Github Server</button>
                </div>
            </div>
            <div>
                <p className='text-justify website-description text-xl mt-6 lg:mx-64'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione eveniet asperiores nihil deserunt quis eum doloribus odit rerum deleniti soluta hic tempore dolores, debitis voluptas suscipit nulla ea cumque totam dolorem at numquam. Fugiat vero molestias voluptatum iusto aut quam, voluptas et, voluptates explicabo non sapiente illo excepturi enim tempora.
                </p>
                <p className='text-justify website-description text-xl mt-6 lg:mx-64'>
                &#x2022;Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam nobis quos cumque eaque dolore, dolorum odio inventore, explicabo incidunt obcaecati nesciunt. Sequi animi amet suscipit?
                </p>
                <div className='mx-auto  lg:ml-64 rounded mt-6'>
                <img className='rounded-md website-image' src='https://www.robin-noorda.com/uploads/1/6/8/3/16830688/3347022_orig.jpg' width='1000' height='400'></img>
            </div>
                <p className='text-justify website-description text-xl mt-6 lg:mx-64'>
                &#x2022;Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam nobis quos cumque eaque dolore, dolorum odio inventore, explicabo incidunt obcaecati nesciunt. Sequi animi amet suscipit?
                </p>
                <div className='mx-auto  lg:ml-64 rounded mt-6'>
                <img className='rounded-md website-image' src='https://www.robin-noorda.com/uploads/1/6/8/3/16830688/3347022_orig.jpg' width='1000' height='400'></img>
            </div>
                <p className='text-justify website-description text-xl mt-6 lg:mx-64'>
                &#x2022;Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam nobis quos cumque eaque dolore, dolorum odio inventore, explicabo incidunt obcaecati nesciunt. Sequi animi amet suscipit?
                </p>
                <div className='mx-auto  lg:ml-64 rounded mt-6'>
                <img className='rounded-md website-image' src='https://www.robin-noorda.com/uploads/1/6/8/3/16830688/3347022_orig.jpg' width='1000' height='400'></img>
            </div>
            <p className='text-justify website-description text-xl mt-6 lg:mx-64'>
                &#x2022;Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam nobis quos cumque eaque dolore, dolorum odio inventore, explicabo incidunt obcaecati nesciunt. Sequi animi amet suscipit?
                </p>     <p className='text-justify website-description text-xl mt-6 lg:mx-64'>
                &#x2022;Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam nobis quos cumque eaque dolore, dolorum odio inventore, explicabo incidunt obcaecati nesciunt. Sequi animi amet suscipit?
                </p>
            </div>
        </div>
    );
};

export default ProjectDetails;