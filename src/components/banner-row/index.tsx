import * as React from "react";
import { connect } from "react-redux";
import { Dispatch } from "redux";
import { RootState } from "@/store/index";
import BannerItem from "./banner-item";
import "./index.less";
const { useState, useReducer, useEffect } = React;


export interface iBannerItem {
  id: number,
  name: string,
  url: string,
  [prop: string]: any
}


export interface iBannerRowProps {
  items: iBannerItem[],
}

const BannerRow: React.FC<iBannerRowProps> = (props: iBannerRowProps) => {
  const { items = [] } = props;
  console.warn('props');
  console.log(props);
  console.log('\n');



  return (
    <div className="banner-row-wrapper">
      {
        items.map((item: iBannerItem) => {
          return (<BannerItem key={item.id} {...item} />);
        })
      }
    </div>
  )
};


const mapStateToProps = (state: RootState) => ({

});
const mapDispatchToProps = (dispatch: Dispatch) => ({

});
export default connect(mapStateToProps, mapDispatchToProps)(BannerRow);