import "./App.css";
// import ShowCounter from "./components/ShowCounter";

import { useSelector, useDispatch } from "react-redux";
import { increment, decrement } from "./state/actions";

function App() {
  const counterState = useSelector((state) => state.counter.counter);
  const dispatch = useDispatch();

  console.log(counterState);
  return (
    <div className="App">
      <div className="counter-container">
        <div className="content">Counter : {counterState} </div>
        <div className="counter-btn">
          <button onClick={() => dispatch(increment())}>+</button>
          <button onClick={() => dispatch(decrement())}>-</button>
        </div>
      </div>
    </div>
  );
}

export default App;
