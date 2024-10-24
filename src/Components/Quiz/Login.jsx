import React, { useRef, useState } from 'react'
import { checkValidate } from '../../Utils/Validate';
import {auth} from '../../Utils/firebase'
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';


const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const [errorMsg,setErrorMessage] = useState(null);
  const navigate = useNavigate();
  const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);

  const handleButtonClick = () => {
    // console.log(email);
    console.log(password);
    // console.log(name);
    const msg = checkValidate(email.current.value, password.current.value);
    // console.log(msg);
    setErrorMessage(msg);
    if (msg) return;

    if (!isSignInForm) {
      // SignUp Logic
      createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
        .then((userCredential) => {
          // Signed up 
          const user = userCredential.user;
          console.log(user);
          navigate("/start");
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + "-" + errorMessage);
          // ..
        });
    } else {
      // SignIn Logic
      signInWithEmailAndPassword(auth, email.current.value, password.current.value)
        .then((userCredential) => {
          // Signed in 
          const user = userCredential.user;
          console.log(user);
          navigate("/start");
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + "-" + errorMessage);
        });
    }
  };
  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  };
  return (
    <div className='container '>
      <div className='flex flex-col justify-center mt-32 mx-auto   h-auto md:w-1/3'>
        <form onSubmit={(e) => e.preventDefault()} className='flex flex-col gap-4 p-8'>
          <h1 onClick={toggleSignInForm} className="text-white  font-bold text-center text-4xl mt-12 mb-4 px-4">
            {isSignInForm ? "Log In" : "Sign Up"}
          </h1>
          {!isSignInForm && (

            <input ref={name} type='text' className='text-2xl rounded-lg px-4 py-2 font-medium placeholder:text-slate-600 border border-black' placeholder='user-name' />
          )}
          <input ref={email} type='email' className='text-2xl rounded-lg px-4 py-2 font-medium placeholder:text-slate-600 border border-black' placeholder='email Id' />
          <input ref={password} type='password' className='text-2xl rounded-lg px-4 py-2 font-medium placeholder:text-slate-600 border border-black' placeholder='password' />
          <p className="cursor-pointer text-white" onClick={toggleSignInForm}>
            {isSignInForm ? "New to Quiz App? " : "Already Registered ! "}
            <span
              className="text-blue-500 text-2xl   underline cursor-pointer"
              onClick={toggleSignInForm}
            >
              {isSignInForm ? "Sign Up" : "Log In"}
            </span>
          </p>
          <button onClick={handleButtonClick} className='bg-blue-600 px-4 py-2  rounded-lg text-xl tracking-wide font-semibold text-white cursor-pointer hover:text-blue-600 hover:bg-white hover:border hover:border-blue-500'>{isSignInForm ? "Log In" : "Sign Up"}</button>
        </form>
      </div>
    </div>
  )
}

export default Login