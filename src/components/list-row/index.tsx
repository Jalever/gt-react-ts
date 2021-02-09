import * as React from "react";
import { connect } from "react-redux";
import { Dispatch } from "redux";
import { RootState } from "@/store/index";
const { useState, useReducer, useEffect } = React;

const ListRow: React.FC<any> = (props: any) => {
  const { listrow } = props;
  return (
    <div>
      {listrow.name}
    </div>
  )
};

const mapStateToProps = (state: RootState) => ({

});
const mapDispatchToProps = (dispatch: Dispatch) => ({

});
export default connect(mapStateToProps, mapDispatchToProps)(ListRow);