import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { add, subtract, clear } from "./countSlice";

function Counter() {
  const count = useSelector((state) => state.counter.value);
  console.log(count);
  const dispatch = useDispatch();
  return (
    <div className="text-center">
      <div className="d-flex justify-content-center align-items-center">
        <button
          className="btn btn-primary "
          aria-label="subtract value of state by 1"
          onClick={() => dispatch(subtract())}
        >
          -
        </button>
        <p className="fs-1 d-inline mx-5">{count}</p>
        <button className="btn btn-primary " aria-label="add value in state by 1" onClick={() => dispatch(add())}>
          +
        </button>
      </div>
      <button className="btn btn-danger" aria-label="clear value in state" onClick={() => dispatch(clear())}>Clear</button>
    </div>
  );
}

export default Counter;
