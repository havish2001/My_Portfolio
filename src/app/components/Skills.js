import React from 'react';

function Skills() {
  return (
    <>
      <div className="mt-2 border px-4 py-2">
        <div className="flex items-center justify-center text-3xl font-thin text-orange-600 underline font-ubuntu">
          Skills
        </div>
        <div className='mt-6 flex flex-wrap justify-center items-center rounded-md bg-white gap-4'>
          <img src='https://webimages.mongodb.com/_com_assets/cms/l3etz1z9tduxvdoni-c.svg?auto=format%252Ccompress' alt='C language' className='w-24 h-16 md:w-32 md:h-24 mt-3'></img>
          <img src='https://logos-world.net/wp-content/uploads/2022/07/Java-Logo.png' alt='Java' className='w-24 h-16 md:w-32 md:h-24 mt-3'></img>
          <img src='https://banner2.cleanpng.com/20180712/cos/kisspng-learning-to-program-using-python-programming-langu-tic-tac-toe-logo-5b47098b6cd292.0915139615313821554458.jpg' alt='Python' className='w-24 h-16 md:w-32 md:h-24 mt-3'></img>
          <img src='https://db.cs.uni-tuebingen.de/teaching/ws2223/sql-is-a-programming-language/logo.svg' alt='SQL' className='w-24 h-16 md:w-32 md:h-24 mt-3'></img>
          <img src='https://cdn0.iconfinder.com/data/icons/long-shadow-web-icons/512/html-512.png' alt='HTML' className='w-24 h-16 md:w-32 md:h-24 mt-3'></img>
          <img src='https://www.freepnglogos.com/uploads/javascript-png/png-javascript-badge-picture-8.png' alt='JavaScript' className='w-24 h-16 md:w-32 md:h-24 mt-3'></img>
          <img src='https://w7.pngwing.com/pngs/403/269/png-transparent-react-react-native-logos-brands-in-colors-icon.png' alt='React' className='w-24 h-16 md:w-32 md:h-24 mt-3'></img>
        </div>
      </div>
    </>
  );
}

export default Skills;
