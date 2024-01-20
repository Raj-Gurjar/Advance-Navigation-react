import React from 'react'
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

export default function Login({ setIsLoggedIn }) {

  const navigate = useNavigate();

  function loginHandler() {
    setIsLoggedIn(true)
    toast.success('Logged In 😊');
    navigate('/dashboard');

  }
  return (
    <div>
      <h2>LogIn</h2>

      <div>
        <h4>Login as</h4>

        <button onClick={loginHandler} >Log in</button>
        <h4>Not Registered Yet ?</h4>

        <Link to='/signup'>
          <button>SignUp</button>
        </Link>




      </div>

    </div>

  )
}
