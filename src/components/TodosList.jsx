import TodosItem from "./TodoItem"
const TodosList = ({todosProps , setTodos}) => {
  
return(
    <ul>
    {todosProps.map((todo) => (
     <TodosItem key = {todo.id} itemProps = {todo} setTodos = {setTodos}/>

    ))}
  </ul>
)
}
export default TodosList;