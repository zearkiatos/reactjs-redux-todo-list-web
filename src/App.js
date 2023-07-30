import { legacy_createStore } from "redux";
import { Provider } from "react-redux";
import { composeWithDevTools } from "redux-devtools-extension";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";
import config from "./config";
import "./App.css";

const INITIAL_VALUE = {
  items: [
    {
      item: "one",
    },
    {
      item: "two",
    },
    {
      item: "three",
    },
  ],
};

const reducer = (state = INITIAL_VALUE, action) => {
  return state;
};

const createStoreByEnvironment = () => {
  const isNotProduction = config.ENVIRONMENT !== "production";
  return isNotProduction
    ? legacy_createStore(reducer, composeWithDevTools())
    : legacy_createStore(reducer);
};

const store = createStoreByEnvironment();

function App() {
  return (
    <Provider store={store}>
      <TodoInput />
      <TodoList />
    </Provider>
  );
}

export default App;
