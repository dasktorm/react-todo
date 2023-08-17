import React from 'react'

import './styleButton.css'

export const Button = ({children, deleteAllTasks}) => {
  return (
    <button onClick={()=>deleteAllTasks()} className='clear-Button btn'>{children}</button>
  )
}