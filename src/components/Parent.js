import React from 'react'
import { Outlet } from 'react-router-dom'

export default function Parent() {
    return (

        <div>
            <Outlet />
            {/* Parent */}
        </div>
    )
}
