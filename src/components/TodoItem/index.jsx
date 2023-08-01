const TodoItem = ({ item, onClickRemove }) => {
  console.log(item);
  
  return (
  <p>
    
    {item} <button type="button" onClick={() => onClickRemove(item)}>❌</button>
  </p>
)};

export default TodoItem;
