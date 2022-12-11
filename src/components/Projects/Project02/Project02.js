import React from 'react';

const Project02 = () => {
    return (
        <div className='text-center mb-6'>
        <div className='text-6xl'>
        <h1>Capture The World</h1>
        </div>
        <div className='mx-auto  lg:ml-64 rounded mt-6'>
            <img className='rounded-md website-image' src='https://i.ibb.co/C0Wr74z/second-Project.png' width='1000' height='400'></img>
        </div>
        <div className='flex gap-x-6 mt-6 lg:ml-96 lg:pl-32'>
            <a href='https://capture-the-world-dd22c.web.app/' target='_blank' className='link-button'>
            <button className="btn btn-outline btn-primary ">Website Link</button>
            </a>
            <a href='https://github.com/marufccs/capture-the-world-client' target='_blank' className='link-button'>
            <button className="btn btn-outline btn-primary">Github Client</button>
            </a>
            <a href='https://github.com/marufccs/capture-the-world-server' target='_blank' className='link-button'>
            <button className="btn btn-outline btn-primary">Github Server</button>
            </a>
        </div>
        <div>
            <p className='text-justify website-description text-xl mt-6 lg:mx-64'>
            This is a Photographic Service Provider website. You can get any photographic service from here. Some of the features are:
            </p>
            <p className='text-justify website-description text-xl mt-6 lg:mx-64'>
            &#x2022; In the details of the service page, you can get the detailed information of the website. You'll see the reviews of other people here. In order to leave your own review, you must log in first.
            </p>
            <div className='mx-auto  lg:ml-64 rounded mt-6'>
            <img className='rounded-md website-image' src='https://i.ibb.co/kq9JjZH/second-Project-First.png' width='1000' height='400'></img>
        </div>
            <p className='text-justify website-description text-xl mt-6 lg:mx-64'>
            &#x2022; After logging in, you can access to this form of leaving reviews. After submitting the form, your review will be added under the product.
            </p>
            <div className='mx-auto  lg:ml-64 rounded mt-6'>
            <img className='rounded-md website-image' src='https://i.ibb.co/X4W7vtD/second-Project-Second.png' width='1000' height='400'></img>
        </div>
            <p className='text-justify website-description text-xl mt-6 lg:mx-64'>
            &#x2022; After logging in, in the navbar you can see the option 'My Reviews'. There you can either update your review or you can delete it. 
            </p>
            <div className='mx-auto  lg:ml-64 rounded mt-6'>
            <img className='rounded-md website-image' src='https://i.ibb.co/p04yvtJ/second-Project-Third.png' width='1000' height='400'></img>
        </div>
        <p className='text-justify website-description text-xl mt-6 lg:mx-64'>
            &#x2022; In the add service page from the navbar, you can add your own service too.
            </p>     <p className='text-justify website-description text-xl mt-6 lg:mx-64'>
            &#x2022; In the homepage, you can subscribe to their newsletter also.
            </p>
        </div>
    </div>
    );
};

export default Project02;