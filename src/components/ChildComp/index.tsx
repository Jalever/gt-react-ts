import * as React from "react";
import { ChildCompCtx } from "./context-manager";
import ChildCompA from "@components/ChildCompA";
import {
  IInitState,
  IAction
} from "./typings";
const { useState, useReducer, useRef, useImperativeHandle } = React;
const initState = {
  step: 0,
  num: 0,
  count: 0
};

const reducer = (state: IInitState, action: IAction) => {
  switch (action.type) {
    case "setStep":
      return Object.assign({}, state, {
        step: state.step * 1 + 1
      });
    case "setCount":
      return Object.assign({}, state, {
        count: state.count * 1 + 1
      });
    case "setNum":
      return Object.assign({}, state, {
        num: state.num * 1 + 1
      });

    default:
      return state;
  }
}

let ChildComp = React.forwardRef<HTMLInputElement, {}>((props, ref) => {
  // const [step, setStep] = useState(0);
  // const [num, setNum] = useState(0);
  // const [count, setCount] = useState(0);
  const [state, dispatch] = useReducer(reducer, initState);
  const { num, step, count } = state;
  const focusRef = useRef<HTMLInputElement | null>(null);
  const inputRef = useRef<HTMLInputElement | null>(null);
  // const inputRef = useRef<HTMLInputElement>(null);

  const fetchData = () => {
    return new Promise((resolve, reject) => {
      setTimeout(() => resolve(new Date()));
    });
  }

  useImperativeHandle(ref, (): any => {
    return {
      focusRef,
      inputRef,
      name: 'ChildComp',
      focus() {
        if (focusRef.current) focusRef.current.focus();
      },
      change(e: any) {
        if (inputRef.current) inputRef.current.value = e;
      }
    }
  });
  // const getFocus = () => {
  //   if (inputRef.current) inputRef.current.focus();
  // };
  const value = {
    dispatch
  }

  return (
    <ChildCompCtx.Provider value={value}>
      <p>num: {num}</p>
      <ChildCompA num={num} step={step} count={count} />
      <input type="text" ref={ref} />
      <input type="text" ref={focusRef} />
      <input type="text" ref={inputRef} />
      {/* <button onClick={getFocus}>getFocus</button> */}
    </ChildCompCtx.Provider>
  );
});

// ChildComp = React.forwardRef<HTMLInputElement>(ChildComp)

export default ChildComp;