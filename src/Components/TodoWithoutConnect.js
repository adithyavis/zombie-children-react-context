import connect from "HOC/connect";

import { useTodos } from "Providers/Todos";

function Todo(props) {
  const { id } = props;

  const { todos, deleteTodo } = useTodos();
  const content = todos.find((todo) => todo.id === id).content;

  return (
    <li>
      {content}
      <button
        onClick={() => {
          deleteTodo(id);
        }}
      >
        Delete
      </button>
    </li>
  );
}

export default Todo;
