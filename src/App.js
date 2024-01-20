import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Navbar from './components/Navbar';
import Parent from './components/Parent';
import Login from './components/Login';
import PrivateRoute from './components/PrivateRoute';
import DashBoard from './components/DashBoard';
import SignUp from './components/SignUp';
import { useState } from 'react';

function App() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    return (

        <div className="App">

            <Navbar isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
            {/* <Router> */}
            <Routes>
                <Route path='/' element={<Parent />} >

                    <Route index element={<Home />} />
                    {/* //! This is a default Route */}
                    <Route path='/about' element={<About />} />
                    <Route path='/contact' element={<Contact />} />
                    <Route path='/login' element={<Login setIsLoggedIn={setIsLoggedIn} />} />
                    <Route path='/signup' element={<SignUp setIsLoggedIn={setIsLoggedIn} />} />


                    <Route path='/dashboard' element={
                        <PrivateRoute isLoggedIn={isLoggedIn}>
                            <DashBoard />
                        </PrivateRoute>
                    } />
                    {/* //! Anyone can access dashboard by url /dashboard without login so to handle it we write use Private Routing */}

                    <Route path='*' element={<div>404 Site Not found</div>} />
                    {/* //! This is the wildcard route that matches any path that hasn't been matched by the previous routes. */}

                </Route>
            </Routes>

            {/* </Router> */}
        </div>
    );
}

export default App;
