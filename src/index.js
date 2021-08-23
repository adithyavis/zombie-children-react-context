import { StrictMode } from "react";
import ReactDOM from "react-dom";

import { TodosProvider } from "Providers/Todos";

import App from "App";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <TodosProvider>
      <App />
    </TodosProvider>
  </StrictMode>,
  rootElement
);
