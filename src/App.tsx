import * as React from "react";
import { Dispatch } from "redux";
import { connect } from "react-redux";
import { rootReducer, RootState } from "@/store/index";
import * as ChatActions from "@/store/chat/actions";
import * as ChatTypes from "@/store/chat/types";
import * as SystemActions from "@/store/system/actions";
import Counter from "@components/Counter";
import Counter6 from "@components/Counter6";
import ChildComp from "@components/ChildComp";
import REQUEST from "@/request/index";
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

const App = (props: any) => {
  const { name, age } = props;
  const [newMsg, setNewMsg] = useState('');
  const parentRef = useRef<HTMLInputElement>(null);
  const getFocus = () => {
    if (!parentRef.current) return;
  };
  useEffect(() => {
    const fetchData = async () => {
      // const params = {
      //   appKey: 'd13aee18d153440787b28fefd5ed07e7',
      //   appSecret: 'g/J7EbjkwZuYYZvotc1jzcbHxPMmtAFofBRjPtAUa7Z5uqg5H+f80A=='
      // };
      // const p2 = {
      //   channelId: 91,
      //   pageId: 90
      // };
      // const getToken = await REQUEST.getData(params);
      // console.warn('getToken');
      // console.log(getToken);

      // const getPageData = await REQUEST.getPage(p2);
      // console.warn('getPageData');
      // console.log(getPageData);
    }
    fetchData();
  }, []);

  const onSendMessage = () => {
    console.warn('newMsg');
    console.log(newMsg);
    console.log('\n');
    props.sendMessage(newMsg);
  }

  return (
    <React.Fragment>
      <div className='app'>
        <Counter />
        <input value={newMsg} onChange={e => setNewMsg(e.target.value)} />
        {/* <Counter6 />
        <ChildComp ref={parentRef} />
        <div className="rect"></div>
        <span>{`Hello! I'm ${name}, ${age} years old.`}</span>
        <p className="title">精品推荐</p> */}
        <button onClick={onSendMessage}>send message</button>
      </div>
    </React.Fragment>
  )
}

const mapStateToProps = (state: RootState) => state;
const mapDispatchToProps = (dispatch: Dispatch) => ({
  sendMessage: (msg: ChatTypes.Message) => dispatch(ChatActions.SendMessage(msg))
});

export default connect(mapStateToProps, mapDispatchToProps)(App);