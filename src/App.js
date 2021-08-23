import TodoListWithConnect from "Components/TodoListWithConnect";
import TodoListWithoutConnect from "Components/TodoListWithoutConnect";

import "styles.css";

export default function App() {
  return (
    <div className="App">
      <TodoListWithoutConnect />
      <TodoListWithConnect />
    </div>
  );
}
