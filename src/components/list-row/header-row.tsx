import * as React from "react";
import { connect } from "react-redux";
import { Dispatch } from "redux";
import { RootState } from "@/store/index";
import * as CONSTANTS from "@constants/index";
import "./header-row.less";
const { useState, useReducer, useEffect } = React;

interface iProps {
  name: string
}

const ViewMore: React.FC = () => {
  return (
    <span className="viewmore-wrapper">
      <i className="viewmore-content">{CONSTANTS.LABEL_VIEWMORE}</i>
    </span>
  );
};

const HeadRow: React.FC<any> = (props: iProps) => {
  const { name } = props;
  return (
    <div className="header-row-wrapper">
      <i className="title">{name}</i>
      <ViewMore />
    </div>
  )
};


const mapStateToProps = (state: RootState) => ({

});
const mapDispatchToProps = (dispatch: Dispatch) => ({

});
export default connect(mapStateToProps, mapDispatchToProps)(HeadRow);