import React,{useReducer} from 'react';
import './App.css';
import Greeting from './GreetingFunctional';

const reducer = (state: any, action: any) => {
  console.log("reducer");
  switch (action.type) {
    case "enteredName":
      if(state.enteredName === action.payload){
        return state;
      }
      return {...state, enteredName: action.payload}
    case "message":
      return {...state, message: `Hello, ${action.payload}`}
    default:
      throw new Error("Niepoprawna akcja" + action.type);
    }
  }

const initialState = {
  enteredName: "",
  message: ""
};
function App() {
  const [{message, enteredName}, dispatch] = useReducer(reducer, initialState);
   
  const onChangeName = (event: React.ChangeEvent<HTMLInputElement>) => {
    dispatch({type: "enteredName", payload: event.target.value});
    dispatch({type: "message", payload: event.target.value});
    }
  
    return (
      <div className="App">
        <header className="App-header">
          <input value={enteredName} onChange={onChangeName} />
          <Greeting message={message} />
        </header>
      </div>

    )
  }
export default App;
