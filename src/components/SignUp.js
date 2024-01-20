import React from 'react'
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';

export default function SignUp({setIsLoggedIn}) 
{
  const navigate = useNavigate();

  function signInHandler() {
    setIsLoggedIn(true)
    toast.success('Account Created Successfully😊');
    navigate('/dashboard');

  }
  return (
    <div>
      <h2>Sign Up</h2>

      <div>
        <h4>Sign Up as</h4>
        <div>
          <h4>Student</h4>
          <h4>Teacher</h4>
        </div>

        <button onClick={signInHandler} >Sign Up</button>

      </div>

    </div>

  )
}
