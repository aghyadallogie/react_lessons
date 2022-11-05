export function TodoList(props) {
  const { list, setTodosArray } = props;

  const deleteTodoItem = (todoId) => {
    const newArr = list.filter((item) => {
      return item.id !== todoId;
    });
    setTodosArray(newArr);  
  };

  const toggleTodoItem = (todoId) => {
    const targetTodoItem = list.find((item) => item.id === todoId);
    targetTodoItem.done = !targetTodoItem.done;
    const filteredArr = list.filter((item) => {
      return item.id !== todoId;
    });
    setTodosArray([targetTodoItem, ...filteredArr])
    console.log(list);
  }

  return (
    <ol style={{ background: "yellow" }}>
      {list.map((item) => (
        <li
          key={item.id}
          style={{ display: "flex", justifyContent: "space-between" }}
          onDoubleClick={() => toggleTodoItem(item.id)}
        >
          <span style={{textDecoration: item.done ? 'line-through' : ''}}>{item.text}</span>
          <button onClick={() => deleteTodoItem(item.id)}>x</button>
        </li>
      ))}
    </ol>
  );
}
