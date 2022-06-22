import React from 'react'
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <nav>
      
      <ul className="nav-links">
        <Link to='/'>
          <li>Home</li>
        </Link>

        <Link to='user-screen'>
          <li>Items</li>
        </Link>

      </ul>

    </nav>
  )
}
