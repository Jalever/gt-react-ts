import * as React from "react";
// import { ChildCompCtx } from "./context-manager";
import { ChildCompCtx, IChildCompCtx } from "@components/ChildComp/context-manager";
import {
  IInitState
} from "@components/ChildComp/typings";
const { useState, useContext, useImperativeHandle } = React;
const ChildCompA: React.FC<IInitState> = props => {
  const { dispatch } = useContext<IChildCompCtx>(ChildCompCtx);
  return (
    <>
      <p>num: {props.num}</p>
      <p>step: {props.step}</p>
      <p>count: {props.count}</p>
      <p>ChildCompA</p>
      <button onClick={() => dispatch({
        type: "setStep",
        payload: 2
      })}>addStep</button>
    </>
  );
}

export default ChildCompA;