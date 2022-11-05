import { useEffect, useState } from "react";
import { TodoList } from "./components/TodoList";
import { TodoForm } from "./components/TodoForm";

function App() {
  const [todosArray, setTodosArray] = useState([]);

  return (
    <div>
      <TodoForm todosArray={todosArray} setTodosArray={setTodosArray} />
      <TodoList list={todosArray} setTodosArray={setTodosArray} />
    </div>
  );
}

export default App;
