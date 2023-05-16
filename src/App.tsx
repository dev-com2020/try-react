import React from 'react';
import logo from './logo.svg';
import './App.css';
import Home from './Home';
import AnotherScreen from './AnotherScreen';
import {Routes,Route} from "react-router-dom"
import Greeting from './Greeting';


class App extends React.Component {
  constructor(props:any){
    super(props);
    this.state = {
      enteredName: ""
    }
    this.onChangeName = this.onChangeName.bind(this);
  }
  state: {enteredName: string};
  onChangeName(event: React.ChangeEvent<HTMLInputElement>) {
    this.setState({
      enteredName: event.target.value
    });
  }
  // return (
  //   <div className="App">
  //     <header className="App-header">
  //       <Routes>
          
  //         <Route path="/" element={<Home/>}></Route>
  //         <Route path="/another" element={<AnotherScreen/>}></Route>
  //         <Route path="/greeting" element={<Greeting name="Tomasz"/>}></Route>
          
  //       </Routes>
  //     </header>
  //   </div>
  // );
}

export default App;
