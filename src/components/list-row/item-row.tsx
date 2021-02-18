import * as React from "react";
import { connect } from "react-redux";
import { Dispatch } from "redux";
import { RootState } from "@/store/index";
import * as CONSTANTS from "@constants/index";
import { iSpliceArr } from "./index";
import SongItem from "./song-item";
import "./item-row.less";
const { useState, useReducer, useEffect } = React;


const ItemRow: React.FC<any> = (props: iSpliceArr) => {
  const { list, column } = props;
  const isSlide = column > 3;

  return (
    <div className="item-row-wrapper" style={{ overflowX: isSlide ? 'scroll' : 'hidden' }}>
      {
        list.map((item: any) => {
          return <SongItem {...item} key={item.id} column={column} />
        })
      }
    </div>
  )
};

const mapStateToProps = (state: RootState) => ({});
const mapDispatchToProps = (dispatch: Dispatch) => ({});
export default connect(mapStateToProps, mapDispatchToProps)(ItemRow);