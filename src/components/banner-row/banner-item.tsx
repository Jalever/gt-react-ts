import * as React from "react";
import { connect } from "react-redux";
import { Dispatch } from "redux";
import { RootState } from "@/store/index";
import { iBannerItem } from "./index"
import "./banner-item.less";
const { useState, useReducer, useEffect } = React;


// export interface iBannerItem {
//   id: number,
//   name: string,
//   url: string,
//   [prop: string]: any
// }

const BannerItem: React.FC<iBannerItem> = (props: iBannerItem) => {


  const { url, name } = props;

  return (
    <div className="banner-item-wrapper">
      <img src={url} className="banner-item-image" />
      <i className="banner-item-name">{name}</i>
    </div>
  )
};


const mapStateToProps = (state: RootState) => ({

});
const mapDispatchToProps = (dispatch: Dispatch) => ({

});
export default connect(mapStateToProps, mapDispatchToProps)(BannerItem);