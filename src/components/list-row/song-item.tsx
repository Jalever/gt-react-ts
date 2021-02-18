import * as React from "react";
import { connect } from "react-redux";
import { Dispatch } from "redux";
import { RootState } from "@/store/index";
import * as CONSTANTS from "@constants/index";
import { iResListItem } from "./index";
import "./song-item.less";
const { useState, useReducer, useEffect } = React;

interface iProps extends iResListItem {
  column: number
}

const SongItem: React.FC<iProps> = (props: iProps) => {
  // const { resListItem } = props;
  const { column } = props;
  // console.log('props');
  // console.log(props);
  // console.log('column');
  // console.log(column);
  let maxWidth = 100;
  if (column > 1) maxWidth = (100 - (column - 1) * 4.927536) / column;
  if (column > 3) maxWidth = 21.304348;
  // console.log('maxWidth');
  // console.log(maxWidth);

  // console.log('\n');

  return (
    <div className="song-item-wrapper" style={{ maxWidth: `${maxWidth}%` }}>
      <div className="song-item-coverimage-wrapper">
        <img src={props.coverImage} className="song-item-coverimage" />
      </div>
      <i className="song-item-name">{props.name}</i>
    </div>
  )
};


const mapStateToProps = (state: RootState) => ({

});
const mapDispatchToProps = (dispatch: Dispatch) => ({

});
export default connect(mapStateToProps, mapDispatchToProps)(SongItem);