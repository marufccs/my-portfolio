import React from 'react';
import MySkill from './MySkill';

const MySkills = () => {
    const mySkillsData = [
        {
            "id" : "01",
            "logo" : "https://thumbs.dreamstime.com/b/vector-collection-web-development-shield-signs-html-css-javascript-isolated-icons-white-background-38571884.jpg",
            "name" : "HTML, CSS & JavaScript",
            "expertiseLevel" : "Expert"
        },
        {
            "id" : "02",
            "logo" : "https://viget.imgix.net/blog/bootstrap-vs-tailwind.png?auto=format%2Ccompress&crop=focalpoint&fit=crop&fp-x=0.5&fp-y=0.5&ixlib=php-2.1.1&q=90&s=6402297be3346cc91154e2e765359abe",
            "name" : "Bootstrap & Tailwind CSS",
            "expertiseLevel" : "Expert"
        },
        {
            "id" : "03",
            "logo" : "https://miro.medium.com/max/1400/1*FVtCyRdJ6KOr4YswTtwMeA.jpeg",
            "name" : "MERN Stack",
            "expertiseLevel" : "Comfortable"
        }
    ]
    return (
        <div id='my-skills' className='mt-12 lg:ml-12'>
             <h1 className='text-center project-text text-6xl'> My Skills</h1>
             <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 mt-6 '>
                {
                    mySkillsData.map(mySkill => <MySkill key={mySkill.id} mySkill={mySkill}></MySkill>)
                }
             </div>
        </div>
    );
};

export default MySkills;