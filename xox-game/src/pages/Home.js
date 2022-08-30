import React from 'react'
import { NavLink } from 'react-router-dom'

const Home = () => {
  return (
    <nav>
      <NavLink to='/player' className='options'>Player vs Player</NavLink>
      <NavLink to='/computer' className='options'>Player vs Computer</NavLink>
    </nav>
  )
}

export default Home;