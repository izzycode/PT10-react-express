import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import Home from './Home'
import About from './About'
import Projects from './Projects'
import Navigation from './Navigation'

const Main = (props) => {
  return (
    <BrowserRouter>
      <Navigation />
      <Route path="/home" component={ Home }/>
      <Route path="/about" component={ About }/>
      <Route path="/projects" component={ Projects }/>
    </BrowserRouter>
  )
}

export default Main
