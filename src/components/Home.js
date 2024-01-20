import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function Home() {

    const navigate = useNavigate();

    function clickHandler() {
        navigate('/about');
    }
    return (
        <div>
            <h2>Home</h2>
            <br />
            <button onClick={clickHandler}>Go to About</button>
        </div>

    )
}
