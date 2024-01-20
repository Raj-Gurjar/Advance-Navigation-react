import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import toast from 'react-hot-toast';


export default function Navbar({isLoggedIn, setIsLoggedIn}) {

    return (
        <div>


            <div className="nav" style={{ backgroundColor: "cyan" }}>

                <h4>Navbar</h4>
                <div>
                    <ul>
                        <li>
                            <NavLink to='/'>Home</NavLink>
                            {/* //! NavLink adds the active class to the current opened link */}
                        </li>
                        <li>
                            <NavLink to='/about'>About</NavLink>
                        </li>
                        <li>
                            <NavLink to='/contact'>Contact</NavLink>
                        </li>

                    </ul>

                </div>

                <div>


                    {!isLoggedIn &&

                        <Link to='/login'>
                            <button>Login</button>
                        </Link>
                    }
                    {!isLoggedIn &&

                        <Link to='/signup'>
                            <button>SignUp</button>
                        </Link>
                    }
                    {
                        isLoggedIn &&
                        <Link to='/'>
                            <button
                                onClick={() => {
                                    setIsLoggedIn(false);
                                    toast.success('Logged Out')
                                }}>
                                Logout
                            </button>
                        </Link>
                    }
                    {
                        isLoggedIn &&
                        <Link to='/dashboard'>
                            <button>DashBoard</button>
                        </Link>
                    }





                </div>

            </div >
        </div >

    )
}
