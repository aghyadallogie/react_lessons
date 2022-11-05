import React, { useRef } from "react";

export const TodoForm = (props) => {
  const formRef = useRef();
  const textRef = useRef();

  const { todosArray, setTodosArray } = props;

  function addTodoItem(event) {
    event.preventDefault();
    if (!textRef.current.value) return alert("please add a text");

    // create a new todo object
    const newTodoItem = {
      id: Date.now(),
      text: textRef.current.value,
      done: false,
      deadline: 7,
    };

    // add new todo object to array
    setTodosArray([...todosArray, newTodoItem]);
    formRef.current.reset();
  }

  return (
    <form ref={formRef} onSubmit={addTodoItem}>
      <input ref={textRef} type="text" />
      <input type="submit" />
    </form>
  );
};
