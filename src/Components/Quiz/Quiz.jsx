import React, { useRef, useState } from 'react';
import { data } from '../../assets/data'; // Assuming data is a list of questions

const Quiz = () => {
  const [index, setIndex] = useState(0);
  const [currentQuestions, setCurrentQuestions] = useState(shuffleQuestions());
  const [question, setQuestion] = useState(currentQuestions[index]);
  const [lock, setLock] = useState(false);
  const [score, setScore] = useState(0);
  const [result, setResult] = useState(false);
  
  const option1 = useRef(null);
  const option2 = useRef(null);
  const option3 = useRef(null);
  const option4 = useRef(null);
  const option_array = [option1, option2, option3, option4];

  function shuffleQuestions() {
    let shuffled = [...data].sort(() => Math.random() - 0.5); // Shuffle the data array
    return shuffled.slice(0, 5); // Select first 5 questions from shuffled array
  }

  const checkAns = (e, ans) => {
    if (lock === false) {
      if (question.ans === ans) {
        e.target.classList.add("correct");
        setLock(true);
        setScore((prev) => prev + 1);
      } else {
        e.target.classList.add("wrong");
        setLock(true);
        option_array[question.ans - 1].current.classList.add("correct");
      }
    }
  };

  const next = () => {
    if (lock === true) {
      if (index === currentQuestions.length - 1) {
        setResult(true);
        return;
      }
      option_array.forEach((option) => {
        option.current.classList.remove('correct', 'wrong');
      });
      setIndex(index + 1);
      setQuestion(currentQuestions[index + 1]);
      setLock(false);
    }
    else {
      alert(`Quiz Completed Your Score is ${score} out of ${currentQuestions.length}`);
    }
  };

  const reset = () => {
    const newQuestions = shuffleQuestions();
    setCurrentQuestions(newQuestions);
    setIndex(0);
    setQuestion(newQuestions[0]);
    setScore(0);
    setLock(false);
    setResult(false);
  };

  return (
    <div className='border border-slate-100 shadow-lg my-24 h-auto md:mx-auto md:w-1/3 md:p-4 p-4 rounded-lg bg-slate-100 mb-10'>
      {result ? (
        <div className='flex flex-col items-center'>
          {/* Score Meter */}
          <div className="w-full h-6 bg-gray-200 rounded-full mb-4 relative">
            <div 
              className="h-full bg-green-500 rounded-full transition-all duration-300" 
              style={{ width: `${(score / currentQuestions.length) * 100}%` }}
            >
            </div>
            <span className="absolute inset-0 text-center text-black font-semibold">
              {Math.round((score / currentQuestions.length) * 100)}%
            </span>
          </div>

          {/* Score Display */}
          <p className='text-3xl font-bold m-2'>Your Score {score} out of {currentQuestions.length}</p>

          {/* Reset Button */}
          <button 
            onClick={reset} 
            className='bg-blue-600 shadow-lg px-4 py-2 m-2 rounded-lg text-xl tracking-wide font-semibold text-white cursor-pointer hover:text-blue-600 hover:bg-white hover:border hover:border-blue-500'>
            Reset
          </button>
        </div>
      ) : (
        <div className='relative'>
          <h2 className='mx-4 font-semibold text-3xl h-auto text-slate-800 '>{question.question}</h2>
          <h1 className='absolute text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-500 rounded-full w-fit p-4 left-1/2 transform -translate-x-1/2 -top-20 border'><span className='text-6xl'>{index + 1}</span>/{currentQuestions.length}</h1>

          {/* Conditional Image Rendering */}
          {question.image && (
            <div className='my-4 flex items-center justify-center'>
              <img 
                src={question.image} 
                alt="Related to the question" 
                className='w-1/3 flex justify-center h-auto border border-black rounded-md shadow-sm' 
              />
            </div>
          )}

          <ul className='mt-10 flex flex-col gap-4'>
            <li ref={option1} onClick={(e) => { checkAns(e, 1) }} className='border border-slate-500 cursor-pointer   mx-4 py-2 px-2 text-2xl rounded-lg'>{question.option1}</li>
            <li ref={option2} onClick={(e) => { checkAns(e, 2) }} className='border border-slate-500 cursor-pointer   mx-4 py-2 px-2 text-2xl rounded-lg'>{question.option2}</li>
            <li ref={option3} onClick={(e) => { checkAns(e, 3) }} className='border border-slate-500  cursor-pointer   mx-4 py-2 px-2 text-2xl rounded-lg'>{question.option3}</li>
            <li ref={option4} onClick={(e) => { checkAns(e, 4) }} className='border border-slate-500 cursor-pointer   mx-4 py-2 px-2 text-2xl rounded-lg'>{question.option4}</li>
          </ul>
          <div className='flex flex-col justify-center items-center my-8'>
            <button onClick={next} className='bg-blue-600 px-4 py-2 m-2 rounded-lg text-xl tracking-wide font-semibold text-white cursor-pointer hover:text-blue-600 hover:bg-white hover:border hover:border-blue-500 shadow-sm shadow-blue-900 hover:shadow-blue-950'>
              Next
            </button>
            <p className='text-sm font-semibold'>{index + 1} of {currentQuestions.length} Questions</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Quiz;
