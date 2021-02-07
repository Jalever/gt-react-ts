import * as React from "react";

export interface IChildCompCtx {
  dispatch: any
}

const defaultValue: IChildCompCtx = {
  dispatch: () => { }
};

export const ChildCompCtx = React.createContext<IChildCompCtx>(defaultValue);
