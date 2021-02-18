import * as React from "react";
import { Dispatch } from "redux";
import { connect } from "react-redux";
import Cookies from 'js-cookie';
import { rootReducer, RootState } from "@/store/index";
import * as ChatActions from "@/store/chat/actions";
import * as ChatTypes from "@/store/chat/types";
import * as SystemActions from "@/store/system/actions";
import Counter from "@components/Counter";
import Counter6 from "@components/Counter6";
import ContentCloud from "@/pages/content-cloud";
import REQUEST from "@/request/index";
import * as CONSTANTS from "@/constants/index";

import "./App.less";
const { useState, useEffect, useReducer, useRef } = React;
interface IProps {
  name: string
  age: number
}

interface iParentRef {
  focusRef: any
  inputRef: any
  name: string
  focus: () => void
  onchange: (e: string) => void
}

//get token
const fetchToken = async () => {
  const params = {
    appKey: CONSTANTS.VAR_APPKEY,
    appSecret: CONSTANTS.VAR_APPVALUE
  };
  const token = await REQUEST.getToken(params);
  const tokenkey = CONSTANTS.VAR_TOKENKEY;
  Cookies.set(tokenkey, token);
  return token;
}

const App = (props: any) => {
  const [newMsg, setNewMsg] = useState('');
  const [list, setList] = useState([]);

  useEffect(() => {
    const onAsync = async () => {
      fetchToken();
    }
    onAsync();
  }, []);

  return (
    <React.Fragment>
      <ContentCloud />
    </React.Fragment>
  )
}

const mapStateToProps = (state: RootState) => state;
const mapDispatchToProps = (dispatch: Dispatch) => ({
  sendMessage: (msg: ChatTypes.Message) => dispatch(ChatActions.SendMessage(msg))
});

export default connect(mapStateToProps, mapDispatchToProps)(App);