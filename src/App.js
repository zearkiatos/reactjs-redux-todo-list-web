import { legacy_createStore } from "redux";
import { Provider } from "react-redux";
import { composeWithDevTools } from "redux-devtools-extension";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";
import config from "./config";
import reducers from "./reducers";
import "./App.css";

const createStoreByEnvironment = () => {
  const isNotProduction = config.ENVIRONMENT !== "production";
  return isNotProduction
    ? legacy_createStore(reducers, composeWithDevTools())
    : legacy_createStore(reducers);
};

const store = createStoreByEnvironment();

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <TodoInput />
        <TodoList />
      </Provider>
    </div>
  );
}

export default App;
