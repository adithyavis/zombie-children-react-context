import Todo from "Components/TodoWithoutConnect";

import { useTodos } from "Providers/Todos";

function TodoList() {
  const { todos } = useTodos();

  return (
    <>
      <p> TODO List that is directly injected with Provider value </p>
      <ul style={{ textAlign: "left" }}>
        {todos.map((todo) => (
          <Todo key={todo.id} id={todo.id} />
        ))}
      </ul>
    </>
  );
}

export default TodoList;
