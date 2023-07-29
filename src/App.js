import { legacy_createStore } from "redux";
import { Provider } from "react-redux";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";
import "./App.css";

const INITIAL_VALUE = []

const reducer = (state = INITIAL_VALUE, action) => {
  return state;
};
const store = legacy_createStore(reducer);

function App() {
  return (
    <Provider store={store}>
        <TodoInput />
        <TodoList />
    </Provider>
  );
}

export default App;
