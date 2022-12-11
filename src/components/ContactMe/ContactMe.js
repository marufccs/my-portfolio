import React from 'react';

const ContactMe = () => {
    return (
        <div id='contact-me' className='mt-12'>
            
             <div className="hero bg-base-200">
                
  <div className="hero-content flex-col ">
  <h1 className='text-center project-text text-5xl'> Contact Me</h1>
    <div className="card flex-shrink-0 w-full lg:w-96 max-w-sm shadow-2xl bg-base-100">
        
      <div className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Your Name</span>
          </label>
          <input type="text" placeholder="Your Name" className="input input-bordered" />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Your Email</span>
          </label>
          <input type="text" placeholder="Your Email" className="input input-bordered" />
        </div>
        <div className="form-control">
        <textarea type="text" className="textarea textarea-bordered mt-4" placeholder="Your message here"></textarea>
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-outline btn-primary">Send</button>
        </div>
      </div>
    </div>
  </div>
</div>
        </div>
    );
};

export default ContactMe;