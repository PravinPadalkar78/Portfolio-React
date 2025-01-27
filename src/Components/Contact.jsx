import React from 'react'
import './Contact.css'
import { Link } from 'react-router'
export default function Contact() {
  return (
    <section className="contact-cards">
    <div className="email-card flex-center">
      <Link target='_blank' to="mailto:pravinpadalkar78@gmail.com" className="email-content">
        <i className="fa-solid fa-1x fa-envelope"></i> &nbsp;<span>pravinpadalkar78@gmail.com</span>
      </Link>
    </div>
    <Link target='_blank' to="https://www.linkedin.com/in/pravinpadalkar78/" className="linkedin-card flex-center">
      <i className="fa-brands fa-3x fa-linkedin"></i>
    </Link>
    <div className="resume-card flex-center">
      <div className="resume-content">
        <h2>Resume</h2>
        <Link target='_blank' to="/Pravin_Padalkar_Resume_Dec.pdf"><i className="fas fa-1x fa-eye"></i> &nbsp;<span>preview</span></Link>
      </div>
    </div>
    <div className="github-card flex-center">
      <div className="github-content">
        <h2>Github Profile</h2>
        <Link target='_blank' to="https://github.com/PravinPadalkar78"><i className="fa-brands fa-3x fa-github"></i></Link>
        <p>Find more of my Repositories</p>
      </div>
    </div>
  </section>
  )
}
