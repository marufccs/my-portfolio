import React from 'react';
import MySkill from './MySkill';

const MySkills = () => {
    const mySkillsData = [
        {
            "id" : "01",
            "logo" : "https://www.freepnglogos.com/uploads/html5-logo-png/html5-logo-image-logo-html-7.png",
            "name" : "HTML",
            "expertiseLevel" : "Expert"
        },
        {
            "id" : "02",
            "logo" : "https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/CSS3_logo.svg/800px-CSS3_logo.svg.png",
            "name" : "CSS",
            "expertiseLevel" : "Expert"
        },
        {
            "id" : "03",
            "logo" : "https://www.freepnglogos.com/uploads/javascript-png/javascript-logo-transparent-logo-javascript-images-3.png",
            "name" : "JavaScript",
            "expertiseLevel" : "Expert"
        },
        {
            "id" : "04",
            "logo" : "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png",
            "name" : "React JS",
            "expertiseLevel" : "Expert"
        },
        {
            "id" : "05",
            "logo" : "https://codeplus.it/uploads/bootstrap.png",
            "name" : "Bootstrap",
            "expertiseLevel" : "Expert"
        },
        {
            "id" : "06",
            "logo" : "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Tailwind_CSS_Logo.svg/2048px-Tailwind_CSS_Logo.svg.png",
            "name" : "Tailwind CSS",
            "expertiseLevel" : "Expert"
        },
        {
            "id" : "07",
            "logo" : "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Node.js_logo.svg/590px-Node.js_logo.svg.png",
            "name" : "Node JS",
            "expertiseLevel" : "Familiar"
        },
        {
            "id" : "08",
            "logo" : "https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/MongoDB_Logo.svg/2560px-MongoDB_Logo.svg.png",
            "name" : "MongoDB",
            "expertiseLevel" : "Familiar"
        },
        {
            "id" : "09",
            "logo" : "https://img.icons8.com/office/480/express-js.png",
            "name" : "Express JS",
            "expertiseLevel" : "Familiar"
        },
    ]
    return (
        <div id='my-skills' className='mt-12'>
             <h1 className='text-center project-text text-6xl'> My Skills</h1>
             <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6 '>
                {
                    mySkillsData.map(mySkill => <MySkill key={mySkill.id} mySkill={mySkill}></MySkill>)
                }
             </div>
        </div>
    );
};

export default MySkills;