import { produce } from "immer";
import { useReducer } from "react";
import Button from "../components/Button";
import Panel from "../components/Panel";

const reducer = (state, action) => {
  switch (action.type) {
    case "increment":
      return {
        ...state,
        count: state.count + 1,
      };
    case "add-value-to-count":
      return {
        ...state,
        count: state.count + state.valueToAdd,
        valueToAdd: 0,
      };
    case "change-value-to-add":
      return {
        ...state,
        valueToAdd: action.payload,
      };
    case "decrement-count":
      return {
        ...state,
        count: state.count - 1,
      };

    default:
      return state;
    //  throw new Error ('unexpected action type: ' + action.type);
  }
};
const CounterPage = ({ initialCount }) => {
  // const [count , setCount] = useState(initialCount);
  // const [ valueToAdd, setValueToAdd] =  useState(0);
  const [state, dispatch] = useReducer(reducer, {
    count: initialCount,
    valueToAdd: 0,
  });
  const increment = () => {
    dispatch({
      type: "increment",
    });
  };
  const decrement = () => {
    dispatch({
      type: "decrement-count",
    });
  };
  const handleChange = (event) => {
    const value = parseInt(event.target.value) || 0;
    dispatch({
      type: "change-value-to-add",
      payload: value,
    });
  };
  const handleSubmit = (event) => {
    event.preventDefault();

    dispatch({
      type: "add-value-to-count",
    });
  };
  return (
    <Panel className="m-3">
      <h1 className="text-lg">Count is {state.count}</h1>
      <div className="flex flex-row">
        <Button onClick={increment}>Increment</Button>
        <Button onClick={decrement}>decrement</Button>
      </div>
      <form onSubmit={handleSubmit}>
        <label>Add a lot</label>
        <input
          value={state.valueToAdd || ""}
          onChange={handleChange}
          type="number"
          className="p-1 m-3 bg-gray-50 border border-gray-300"
        />
        <Button>Add it</Button>
      </form>
    </Panel>
  );
};
export default CounterPage;
