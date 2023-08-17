import { useState } from "react"

import './inputStyle.css'
import { HiPlus } from "react-icons/hi";
import { v4 as uuidv4 } from 'uuid';

export const Input = ({onSubmit}) =>{
  const [inputValue, setInputValue] = useState('');

  const handleInputValue = (e)=>{
    setInputValue(e.target.value);
  };
  const handleAddTask = (e) =>{
    e.preventDefault();
    
    const newTask = {
      id: uuidv4(),
      label: inputValue,
      done: false
    }
    onSubmit(newTask);
    setInputValue('');
  }
  
  return(
    <>
      <form className="input-group" onSubmit={handleAddTask}>
        <input
          type="text"
          className="form-control"
          placeholder="Add your task here..."
          onChange={handleInputValue}
          value={inputValue}/>
        <button type="submit" className="btn btn-outline-primary">
          <HiPlus />
        </button>
      </form>
    </>
  )
}