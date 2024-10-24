import React, { useEffect } from 'react'
import { createBrowserRouter,RouterProvider } from 'react-router-dom';
import Quiz from "./Quiz";
import Login from "./Login";
import Header from "./Header";
import { useDispatch } from 'react-redux';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '../../Utils/firebase';
import { addUser, removeUser } from '../../Utils/userSlice';
import Start from './Start';
const Body = () => {
  const dispatch = useDispatch();
  const appRouter = createBrowserRouter([
    {
      path : "/",
      element: <Login />,
    },
    {
      path : "/Quiz",
      element : <Quiz />
    },
    {
      path : "/Start",
      element : <Start />
    },
  ]);
  useEffect(()=>{
    onAuthStateChanged(auth, (user) => {
      if(user){
        
        const {uid,email,displayName} = user;
        dispatch(addUser({
          uid:uid,email:email,displayName:displayName
        }));
        
      } else {
        
        dispatch(removeUser());
      }
    });
  },[]);
  return (
    <div className="bg-gradient-to-br from-black to-purple-800 h-screen mb-10">
      <Header />
      <RouterProvider router = {appRouter} />
    </div>
  )
};

export default Body