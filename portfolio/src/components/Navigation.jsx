import React from 'react'
import { Link } from 'react-router-dom'

const Navigation = (props) => {
  return (
    <nav>
      <Link to="/home">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/projects">Projects</Link>
    </nav>
  )
}

export default Navigation
