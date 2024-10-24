import React from 'react';
import '../../Utils/Start.css';  // Import custom CSS
import { useNavigate } from 'react-router-dom';

const Start = () => {
  const navigate = useNavigate();
  const QuizPage = () => {
    navigate("/quiz");
  }

  return (
    <div className="start-page bg-black min-h-screen flex flex-col justify-center items-center">
      <div className="rocket mb-10">
        <img 
          src="https://th.bing.com/th/id/R.47a8f3867a20bae6c4c4d88cf752c770?rik=3B3pGJ95X6EJKA&riu=http%3a%2f%2fwww.pngall.com%2fwp-content%2fuploads%2f2%2fRocket-PNG-File-Download-Free.png&ehk=wryCeE6fEjRn8aXTWKkmTXj2xEbipGqRbumtqychDts%3d&risl=&pid=ImgRaw&r=0" 
          alt="rocket" 
          className="rocket-img w-40 md:w-60 h-auto" 
        />
      </div>
      <div className="flex flex-col gap-6 md:gap-10 items-center content">
        <h1 className="font-bold text-center text-3xl md:text-5xl text-white">Welcome to the Quiz</h1>
        <button className="start-button px-6 py-3 text-lg bg-green-400-600 text-white rounded-md hover:bg-blue-700 transition-colors duration-200" onClick={QuizPage}>
          Start
        </button>
      </div>
    </div>
  );
};

export default Start;
