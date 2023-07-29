import { legacy_createStore } from "redux";
import "./App.css";

const INITIAL_VALUE = []

const reducer = (state = INITIAL_VALUE, action) => {
  return state;
};
const store = legacy_createStore(reducer);

function App() {
  return <div className="App">Hello World!</div>;
}

export default App;
