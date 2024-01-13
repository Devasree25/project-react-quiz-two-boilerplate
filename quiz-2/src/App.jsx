import { Component } from "react";
// import Home from "./components/Home"
import Quiz from "./components/Quiz"
// import Result from "./components/Result"

export default class App extends Component{
  render(){
    return(
      <div>
        {/* <Home/> */}
        <Quiz/>
        {/* <Result/> */}
      </div>
    );
  };
}