import React from 'react'
import { Link } from "react-router-dom";

import './Navbar.css'

function Navbar() {
  return (
    <header className="page-header">
        <h3 class="page-title">Task Manager</h3>
        <ul class="nav-bar">
          <li class="nav-bar-item"><Link to="/">Home</Link></li>
          <li class="nav-bar-item"><Link to="/tasks">Tasks</Link></li>
          <li class="nav-bar-item"><Link to="/contact">Contact</Link></li>
        </ul>
      </header>
  )
}

export default Navbar;