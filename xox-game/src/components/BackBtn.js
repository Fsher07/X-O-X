import React from 'react'
import { NavLink } from 'react-router-dom'

function BackBtn() {
  return (
    <NavLink to='/' className={'btn'}>{'<'} Back</NavLink>
  )
}

export default BackBtn