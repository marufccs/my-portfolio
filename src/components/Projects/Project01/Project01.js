import React from 'react';

const Project01 = () => {
    return (
        <div className='text-center mb-6'>
        <div className='text-6xl'>
        <h1>Reselling Bay</h1>
        </div>
        <div className='mx-auto  lg:ml-64 rounded mt-6'>
            <img className='rounded-md website-image' src='https://i.ibb.co/3d2SDtw/first-Project.png' width='1000' height='400'></img>
        </div>
        <div className='flex gap-x-6 mt-6 lg:ml-96 lg:pl-32'>
            <a href='https://reselling-bay.web.app/' target='_blank' className='link-button'>
            <button className="btn btn-outline btn-primary ">Website Link</button>
            </a>
            <a href='https://github.com/marufccs/reselling-bay-client' target='_blank' className='link-button'>
            <button className="btn btn-outline btn-primary">Github Client</button>
            </a>
            <a href='https://github.com/marufccs/reselling-bay-original-server' target='_blank' className='link-button'>
            <button className="btn btn-outline btn-primary">Github Server</button>
            </a>
        </div>
        <div>
            <p className='text-justify website-description text-xl mt-6 lg:mx-64'>
            In this reselling website, you can log in both as buyer and seller. If you're a seller, you can add books for sale. And if you're a buyer, you can buy books. Some of the features are:
            </p>
            <p className='text-justify website-description text-xl mt-6 lg:mx-64'>
            &#x2022; When you log in, a dashboard appears. If you're a seller, you can add your product from the dashboard. You have to provide all the details. Then the product will be added in the booklists.
            </p>
            <div className='mx-auto  lg:ml-64 rounded mt-6'>
            <img className='rounded-md website-image' src='https://i.ibb.co/tzs8ZN4/firstprojectfirstpic.png' width='1000' height='400'></img>
        </div>
            <p className='text-justify website-description text-xl mt-6 lg:mx-64'>
            &#x2022; If you're a buyer, from the booklist, you can either put your desired book on your wishlist or you can book the book. Then from the dashboard you can move to the payment system and you can pay by any card you want.
            </p>
            <div className='mx-auto  lg:ml-64 rounded mt-6'>
            <img className='rounded-md website-image' src='https://i.ibb.co/4K9j8dw/first-Project-Second.png' width='1000' height='400'></img>
        </div>
            <p className='text-justify website-description text-xl mt-6 lg:mx-64'>
            &#x2022; After doing the payment, you'll receive your transactional id, and from the book's status will change in your dashboard.
            </p>
            <div className='mx-auto  lg:ml-64 rounded mt-6'>
            <img className='rounded-md website-image' src='https://i.ibb.co/cr182sj/first-Project-Third.png' width='1000' height='400'></img>
        </div>
        <p className='text-justify website-description text-xl mt-6 lg:mx-64'>
            &#x2022; If you're a seller, you can advertise your products also. You just have to click in the 'advertise' button below your product. Then the product will arrive in the homepage.
            </p>     <p className='text-justify website-description text-xl mt-6 lg:mx-64'>
            &#x2022; From the dashboard you can manage your products as well. You can either update them or delete them.
            </p>
        </div>
    </div>
    );
};

export default Project01;