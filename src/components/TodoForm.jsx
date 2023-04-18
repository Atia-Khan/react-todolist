import React, { useState } from 'react'

const TodoForm = (props) => {
    const [inputText, setInputText] = useState('');
    const handleEnterPress = (event) => {
      if(event.keyCode === 13){
props.addList(inputText)
setInputText('');
      }
    }
  return (
    <div className= 'input-container'> 
      <input type="text" className='input-box-todo' placeholder='Enter Your task to track' value={inputText}  onChange ={(event) => setInputText(event.target.value)} 
      onKeyDown={handleEnterPress}
      />
      <button className='add-btn' onClick = {() => {
        props.addList(inputText);

        setInputText('');

      }}>+</button>
      {/* <div>{inputText}</div> */}
    </div>
  )
}

export default TodoForm
