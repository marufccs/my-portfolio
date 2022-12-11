import React from 'react';

const Project03 = () => {
    return (
        <div className='text-center mb-6'>
        <div className='text-6xl'>
        <h1>My Lingua</h1>
        </div>
        <div className='mx-auto  lg:ml-64 rounded mt-6'>
            <img className='rounded-md website-image' src='https://i.ibb.co/3Ny2b5x/third-Project.png' width='1000' height='400'></img>
        </div>
        <div className='flex gap-x-6 mt-6 lg:ml-96 lg:pl-32'>
            <a href='https://my-lingua.firebaseapp.com/' target='_blank' className='link-button'>
            <button className="btn btn-outline btn-primary ">Website Link</button>
            </a>
            <a href='https://github.com/marufccs/my-lingua' target='_blank' className='link-button'>
            <button className="btn btn-outline btn-primary">Github Client</button>
            </a>
            <a href='https://github.com/marufccs/my-lingua-client' target='_blank' className='link-button'>
            <button className="btn btn-outline btn-primary">Github Server</button>
            </a>
        </div>
        <div>
            <p className='text-justify website-description text-xl mt-6 lg:mx-64'>
            This is a language learning course website. One of my first very projects. So the features are not that good. Some of the features are:
            </p>
            <p className='text-justify website-description text-xl mt-6 lg:mx-64'>
            &#x2022; You can explore all the courses. You can learn about the duration and the price.
            </p>
            <div className='mx-auto  lg:ml-64 rounded mt-6'>
            <img className='rounded-md website-image' src='https://i.ibb.co/cLh9V4g/third-Project-First.png' width='1000' height='400'></img>
        </div>
            <p className='text-justify website-description text-xl mt-6 lg:mx-64'>
            &#x2022; If you click the read more button, you can explore all the details of the course in a new page.
            </p>
            <div className='mx-auto  lg:ml-64 rounded mt-6'>
            <img className='rounded-md website-image' src='https://i.ibb.co/qr71tRw/third-Project-Second.png' width='1000' height='400'></img>
        </div>
            <p className='text-justify website-description text-xl mt-6 lg:mx-64'>
            &#x2022; After logging in, you can officially get the premium access of the course. 
            </p>
            <div className='mx-auto  lg:ml-64 rounded mt-6'>
            <img className='rounded-md website-image' src='https://i.ibb.co/mRVFdCj/third-Project-Third.png' width='1000' height='400'></img>
        </div>
        <p className='text-justify website-description text-xl mt-6 lg:mx-64'>
            &#x2022; If you log in with google, in the navbar you can see your picture. 
            </p>     <p className='text-justify website-description text-xl mt-6 lg:mx-64'>
            &#x2022; You can also logout by clicking the logout button from the navbar.
            </p>
        </div>
    </div>
    );
};

export default Project03;