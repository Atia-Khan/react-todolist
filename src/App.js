import { useState } from "react";
import "./App.css";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";

function App() {
  const [listTodo, setListTodo] = useState([]);

  let addList = (inputText) => {
    if(inputText !== '')
    setListTodo([...listTodo, inputText]);
  }

  const deleteListItem = (key) => {
     let newListTodo = [...listTodo];
     newListTodo.splice(key, 1);
     setListTodo([...newListTodo]);
  }

  const editItem = (key, inputText) => {
    for(let i in listTodo){
      if(key === i){
        listTodo[i] = inputText;
      }
    }
     
    // let editList = [...listTodo, inputText];
    // setListTodo(editList);
  }
  listTodo.forEach(element => {
    console.log(element)
  });

  return (
    <div className="main-container">
      <div className="center-container">
        <TodoForm addList={addList} />
        {/* <TodoList /> */}
        <h1 className="app-heading">TODO</h1>
        <hr />
        {listTodo.map((listItem, i) => {
          return <TodoList key={i} index={i} item={listItem} deleteItem={deleteListItem} editItem={editItem} />;
        })}
             
          {/* {listTodo.map((listItem, i) => {
          return <TodoList key={i} index={i} item={listItem} editTodo={editItem} />;
        })} */}
      </div>
    </div>
  );
}

export default App;
