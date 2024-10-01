import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import './HomePage.css'
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faList, faCheck, faPlus } from '@fortawesome/free-solid-svg-icons';

function HomePage() {
  return (
    <div className="homepage">
      <Navbar />
      <section className="intro-container">
        <div className="intro-content">
          <h1>Organize Your Tasks, Simplify Your Life</h1>
          <p>Manage tasks effortlessly and increase your productivity.</p>
          <Link to="/tasks" className="homepage-button">Get Started</Link>
        </div>
      </section>
      <section className='feature-container'>
        <div className='feature'>
          <FontAwesomeIcon icon={faList} className='feature-icon' />
          <h3>Easy Task Management</h3>
          <p>Quickly add and manage all your tasks in one place.</p>
        </div>
        <div className='feature'>
          <FontAwesomeIcon icon={faCheck} className='feature-icon' />
          <h3>Track Progress</h3>
          <p>Check off completed tasks and keep track of your goals.</p>
        </div>
        <div className='feature'>
          <FontAwesomeIcon icon={faPlus} className='feature-icon' />
          <h3>Fast Add</h3>
          <p>Quickly add new tasks with a single click.</p>
        </div>
      </section>
      <section className='contact-section'>
        <h2>Contact Us</h2>
        <p>If you have any questions or need assistance, we'd love to hear from you!</p>
        <Link to="/contact" className='homepage-button'>Go to Contact Page</Link>
      </section>
    </div>
  )
}

export default HomePage;