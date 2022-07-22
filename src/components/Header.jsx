import React from 'react'
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <div className='container d-flex justify-content-center'>
      <nav className=' bg-dark '>
        <div>
          
        </div>
        <ul className="nav-links">
          </div>
            <Link to='/'>
              <li>Home</li>
            </Link>
          <div>
            

          <Link to='user-screen'>
            <li>Items</li>
          </Link>

        </ul>

      </nav>
    </div>
  )
}
