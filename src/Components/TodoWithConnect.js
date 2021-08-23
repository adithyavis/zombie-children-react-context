import connect from "HOC/connect";

import { useTodos } from "Providers/Todos";

function Todo(props) {
  const { id, content } = props;

  // For the sake of simplicity, we haven't implemented
  // dispatch to props. Instead, we directly inject deleteTodo
  const { deleteTodo } = useTodos();

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

const mapStateToProps = (state, ownProps) => ({
  content: state.todos.find((todo) => todo.id === ownProps.id).content
});

export default connect(mapStateToProps)(Todo);
