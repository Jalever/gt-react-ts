import * as React from "react";
import { connect } from "react-redux";
import { Dispatch } from "redux";
import { RootState } from "@/store/index";
import HeaderRow from "./header-row";
import ItemRow from "./item-row";
import "./index.less";
const { useState, useReducer, useEffect } = React;

interface iColumnStyleItem {
  column: number
}

export interface iResListItem {
  id: number,
  name: string,
  subName: string,
  coverImage: string,
  [prop: string]: any
}

export interface iSpliceArr {
  column: number,
  list: iResListItem[],
  id?: string,
}

interface iListRowItem {
  columnStyle: iColumnStyleItem[],
  id: number,
  name: string,
  resList: iResListItem[],
  type: number,
  [prop: string]: any
}

interface iProps {
  listrow: iListRowItem
}

const getSliceArr: any = (columnStyle: any, resList: any) => {
  let cloneList = resList.concat();
  return columnStyle.map((columnItem: iColumnStyleItem) => {
    const { column } = columnItem;
    const list = cloneList.splice(0, column);
    const id = list.map((i: any) => i.id).join("-");
    return { column, list, id }
  });
}

const ListRow: React.FC<any> = (props: iProps) => {
  const { listrow } = props;
  const { columnStyle, resList } = listrow;
  const formatArr = getSliceArr(columnStyle, resList);
  // console.log('formatArr');
  // console.log(formatArr);
  // console.log('\n');

  return (
    <div className="listrow-wrapper">

      <HeaderRow name={listrow.name} />

      {/* item-wrapper */}
      {
        formatArr.map((item: iSpliceArr, idx: number) => {
          return <ItemRow key={item.id} {...item} />
        })
      }
    </div>
  )
};


const mapStateToProps = (state: RootState) => ({

});
const mapDispatchToProps = (dispatch: Dispatch) => ({

});
export default connect(mapStateToProps, mapDispatchToProps)(ListRow);