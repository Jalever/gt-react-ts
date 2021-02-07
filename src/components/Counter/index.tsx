import * as React from "react";
import { connect } from "react-redux";
import { RootState } from "@/store/index";
import { Dispatch } from "redux";
import { SendMessage } from "@/store/chat/actions";
import * as ChatTypes from "@/store/chat/types";
const { useState, useReducer, useEffect } = React;

interface iState {
  text: String,
  completed: Boolean
}

type typeReducer = {
  text: String,
  completed: Boolean
}

interface iAction {
  type: String,
  payload: iState,
}

function todosReducer(state: iState[], action: iAction): iState[] | undefined {
  switch (action.type) {
    case 'add': {
      const { text } = action.payload
      return [
        ...state,
        {
          text: text,
          completed: false,
        }
      ]
    }

    default:
      return state;
  }
}

function useR(reducer: any, initialState: any) {
  const [state, setState] = useState(initialState);

  function dispatch(action: any) {
    const nextState = reducer(state, action);
    setState(nextState);
  }

  return [state, dispatch];
}

const ListItem: React.FC<iState> = (props) => {
  return <p>{props.text}</p>
}

const Counter: React.FC = (props: any) => {
  const { messages } = props.chat;
  const [count, setCount] = useState(0);
  const [todos, dispatch] = useR(todosReducer, [{ text: '111', completed: false }]);
  // const [messages, setMessages] = useState([]);
  useEffect(() => {
    console.warn('props - Counter: ');
    console.log(props);
    console.log('\n');
  }, [props.chat]);


  return (
    <React.Fragment>
      {/* <p>you clicked {count} time</p>
      {
        todos.map((item: iState, idx: Number) => {
          return (
            <p>{item.text}</p>
          )
        })
      }
      <button onClick={() => setCount(count + 1)}>Click</button>
      <button onClick={() => onDispatch()}>dispatch</button>
      <button onClick={onPrintNum}>print late</button> */}
      {
        messages.length && messages.map((msg: string, idx: number) => {
          return <div key={idx}>{msg}</div>
        })
      }
      {
        !messages.length && <div>no data</div>
      }
    </React.Fragment>
  )
};

const mapStateToProps = (state: RootState) => ({
  chat: state.chat,
});
const mapDispatchToProps = (dispatch: Dispatch) => ({
  SendMessage: (msg: ChatTypes.Message) => dispatch(SendMessage(msg))
});
export default connect(mapStateToProps, mapDispatchToProps)(Counter);