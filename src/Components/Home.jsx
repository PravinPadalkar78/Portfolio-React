import React from 'react'
import profilePic from '/profile.png'
import nightImg from '/night.jpg'
import { Link } from 'react-router'
export default function Home() {
  return (
    <main className="grid">
    <div className="intro scale">
      <h2>Who am I?</h2>
      <p>
        I am a passionate web developer, specializing in Frontend
        Development.My skills includes building dynamic, responsive user
        interfaces and solving complex problems, demonstrated by solving
        300+ DSA problems on GeeksforGeeks.With a strong foundation in
        frontend development, competitive programming, and intermediate SQL
        expertise, I am driven to create innovative and scalable digital
        solutions.
      </p>
    </div>

    <img className="quote-img scale" src={nightImg} alt="" />
    <div className="quote-text scale">
      <h3>"The only way to do great work is to love what you do."</h3>
    </div>
    <div className="role scale">
      <h3>Frontend Developer & A Lifetime Student</h3>
    </div>
    <Link to="https://github.com/PravinPadalkar78" className="profile-container scale">
      <img src={profilePic} alt="profilePic" />
      <h2 className="name">Pravin Padalkar</h2>
    </Link>
    <div className="technologies">
      <h2>Technologies i have worked with</h2>
      <div className="icons">
        <i className="fa-brands fa-2x fa-html5" title="HTML"></i>
        <i className="fa-brands fa-2x fa-css3" title="CSS"></i>
        <i className="fa-brands fa-2x fa-js" title="Javascript"></i>
        <i className="fa-brands fa-2x fa-react" title="ReactJS"></i>
        <i className="fa-brands fa-2x fa-java" title="Java"></i>
        <i className="fa-brands fa-2x fa-git" title="Git"></i>
        <i className="fa-brands fa-2x fa-github" title="Github"></i>
        <i className="fa-brands fa-2x fa-git-alt" title="Gitbash"></i>
        <i className="fa-brands fa-2x fa-node-js" title="NodeJS"></i>
      </div>
    </div>
    <div className="education">
      <h2>Education</h2>
      <div className="btech">
        <i className="fa-solid fa-1x fa-graduation-cap"></i>
        &nbsp;<span className="degree"><b>Btech</b></span>&nbsp;<span className="grade"><b>9.29/10</b> CGPA</span>&nbsp;<span className="year">(2020-2024)</span> 
        <p>I have completed my graduation from Vidyalankar institute of technology,Mumbai.</p>
      </div>
      <div className="twe-th">
        <i className="fa-solid fa-1x fa-graduation-cap"></i>
        &nbsp;<span className="degree"><b>12th</b></span>&nbsp;<span className="grade"><b>86.62</b> %</span>&nbsp;<span className="year">(2018-2020)</span> 
        <p>Swami Vivekanand junior college,Chembur (Bifocal-Electronics)</p>
      </div>
      <div className="ten-th">
        <i className="fa-solid fa-1x fa-graduation-cap"></i>
        &nbsp;<span className="degree"><b>10th</b></span>&nbsp;<span className="grade"><b>93.20</b> %</span>&nbsp;<span className="year">(2016-2020)</span> 
        <p>Nutan Vidya Mandir,Mankhurd.</p>
      </div>
    </div>
  </main>
  )
}
