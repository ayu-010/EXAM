import React from 'react';
import { useNavigate } from 'react-router-dom';


const Landing = () => {

  const navigate = useNavigate();

  
  const goToMenu = () => {
    navigate('/card');
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen ">
    
      <h1 className="text-4xl font-bold text-black mb-8">
        Welcome to Food'screen 
        <br/>
        <p className=' text-center'>

            Kitchen
            </p>
      </h1>

    
      <button
        className="bg-blue-900 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition duration-300"
        onClick={goToMenu}
      >
        Go to Menu
      </button>
    </div>
  );
};

export default Landing;
