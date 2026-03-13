# USE REDUCER
| Nm | #Question   |
| :---:   | :---: |
| 1   | [Write simple reducer to add, withdraw, clear your money in bank?](#reducer-simple)                               |

1. ### reducer-simple
```javascript
import { useReducer } from "react";
import "./styles.css";

type State = {
  inBank: number;
  inSofa: number;
  toPayBills: number;
};

type Action =
  | { type: "add"; payload: number }
  | { type: "withdaraw"; payload: number }
  | { type: "mess"; payload: number };

const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case "add":
      return { ...state, inBank: state.inBank + action.payload };
    case "withdaraw":
      return state;
    case "mess":
      return state;
    default:
      return state;
  }
};

const initialValue = {
  inBank: 1000,
  inSofa: 500,
  toPayBills: 700,
};

export default function App() {
  const [state, dispatch] = useReducer(reducer, initialValue);

  return (
    <div className="App">
      <button onClick={() => dispatch({ type: "add", payload: 50 })}>
        add to bank{" "}
      </button>

      <p>in bank money: {state.inBank}</p>
    </div>
  );
}
```

