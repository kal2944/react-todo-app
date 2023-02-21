const TodoItem = ({ itemProps , setTodos}) => {
  const handleChange = (id) => { 
    console.log ("clicked", id);
  } 
    return (
        <li>
         <input 
         type="checkbox" 
         checked={itemProps.completed}
        onChange={() => handleChange(itemProps.id)} 
        />
        {itemProps.title}</li>
        );
  };
  export default TodoItem;
  