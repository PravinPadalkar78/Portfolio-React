import React from 'react'
import { Link } from 'react-router'

export default function Header() {
  return (
    <header>
      <div className="links">
        <Link to="">Home</Link>
        <Link to="/projects">Projects</Link>
        <Link to="/contact">Contact</Link>
      </div>
    </header>
  )
}
