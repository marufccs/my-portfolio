import React from 'react';

const MySkill = ({mySkill}) => {
    const {logo, name, expertiseLevel} = mySkill;
    return (
        <div>
            <div className="card bg-base-100 w-96 shadow-xl">
  <figure className="px-10 pt-10 ">
    <img src={logo} alt="" className="h-60 w-72 rounded-xl" />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title">{name}</h2>
    <p className='card-title'>Skill Level: {expertiseLevel}</p>
  </div>
</div>
        </div>
    );
};

export default MySkill;