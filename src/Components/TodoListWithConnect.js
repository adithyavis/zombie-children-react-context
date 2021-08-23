import connect from "HOC/connect";

import Todo from "Components/TodoWithConnect";

function TodoList(props) {
  const { todos } = props;

  return (
    <>
      <p> TODO List with react-redux type connect HOC</p>
      <ul style={{ textAlign: "left" }}>
        {todos.map((todo) => (
          <Todo key={todo.id} id={todo.id} />
        ))}
      </ul>
    </>
  );
}

const mapStateToProps = (state) => ({
  todos: state.todos
});

export default connect(mapStateToProps)(TodoList);
