import React from 'react'
import './Cell.css'

function Cell(props) {

  /* check if the cell is empty */
  


  return (
    <div id={props.id} onClick={props.onClick}  className='cell'></div>
  )
}

export default Cell