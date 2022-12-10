import React from 'react';
import MyProject from './MyProject';

const MyProjects = () => {

    const myProjectsData = [
        {
            "id" : "01",
            "name" : "Reselling Bay",
            "img" : "https://i.ibb.co/SrGkm0f/reselling-bay.png",
            "alt" : "Reselling Bay",
            "description" : "Reselling Bay is mainly a reselling website where you can sell your used books or buy books from any seller. ",
            "link" : "https://reselling-bay.web.app/"
        },
        {
            "id" : "02",
            "name" : "Capture The World",
            "img" : "https://i.ibb.co/kGz6pWP/capture-the-world.png",
            "alt" : "Capture The World",
            "description" : "Capture The World is a photographic service website where you can leave reviews of photographic services or add services ",
            "link" : "https://capture-the-world-dd22c.web.app/"
        },
        {
            "id" : "03",
            "name" : "My Lingua",
            "img" : "https://i.ibb.co/XZzw54r/my-lingua.png",
            "alt" : "My Lingua",
            "description" : "In this website, you can get access to some popular language courses. If you log in, you can get the premium access",
            "link" : "https://my-lingua.firebaseapp.com/"
        }
    ]

    return (
        <div id='my-projects' className='mt-12'>
            <h1 className='text-center project-text text-6xl'> My Projects</h1>
            <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 mt-6 '>
            {
                myProjectsData.map(myProject => <MyProject key={myProject.id} myProject={myProject}></MyProject>)
            }
            </div>
        </div>
    );
};

export default MyProjects;