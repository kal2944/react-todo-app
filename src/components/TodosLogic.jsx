import InputTodo from "./InputTodo";
import TodosList from "./TodosList";
import { useState } from "react";

const TodosLogic = () => {

  const [todos, setTodos] = useState([
    {
      id: 1,
      title: 'Setup development environment',
      completed: false,
    },
    {
      id: 2,
      title: 'Develop website and add content',
      completed: true,
    },
    {
      id: 3,
      title: 'Deploy to live server',
      completed: false,
    },
  ]);

    return (
        <>
       <InputTodo/>

      <TodosList todosProps={todos} setTodos={setTodos}/> 

      </>
    )
  }
  export default TodosLogic;
  