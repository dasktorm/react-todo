import React from 'react'
import { IoTrashOutline } from "react-icons/io5";
import { CiEdit } from "react-icons/ci";

import './taskStyle.css'

export const Task = ({id, label, done, finishTask, deleteTask, editTask}) =>{
  return(
    <div className={`container-task ${done?'complete':''}`}>

      <div className='iconDelete' onClick={()=> deleteTask(id)}>  
        <IoTrashOutline />
      </div>

      <div className='text-task' onClick={()=> finishTask(id)}>
        {label}
      </div>

      <div className='iconEdit' onClick={()=> editTask(id)}>  
        <CiEdit />
      </div>
       
    </div> 
  )
}