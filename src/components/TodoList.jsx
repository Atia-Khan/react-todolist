import React from 'react'

const TodoList = (props) => {
  return (
    
      <li className="list-item">
        {props.item} 
<span className='icons'> 
<i className="fa-solid fa-trash icon-delete" onClick={event => {
  props.deleteItem(props.index)
}}></i>
<i className="fa-solid fa-pen-to-square" onClick={event => {
  props.editItem(props.index);
}} ></i>

      </span>
      </li>
   
  )
}

export default TodoList
