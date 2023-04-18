import React, { useState } from "react";

const TodoList = (props) => {
  const [updatedText, setUpdatedText] = useState("");
  function editTodoText(event) {
  
   setUpdatedText(updatedText)
  }
  
    
  

  return (

    <li className="list-item">
      <input type="text" value={props.item} />
      {/* {props.item} */}
      {/* </input> */}
      <span className="icons">
        <i
          className="fa-solid fa-trash icon-delete"
          onClick={(event) => {
            props.deleteItem(props.index);
          }}></i>
        <i
          className="fa-solid fa-pen-to-square"
          onClick={(event)=> {
            props.editItem(props.index)
          }}
          // <input type="text" value={"inputText"} />;
          // props.editItem(props.index)
        ></i>
      </span>
    </li>
  );

        }
export default TodoList;
