// import { Box } from "./Box/Box";
import React, { Component } from "react";
import Feedback from "./Feedback/Feedback";
import { Statistics } from "./Statistics/Statistics";



export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0
  }

  handleIncrement = e =>{
    // console.log(e.target.name);


    const { name } = e.currentTarget
    
    this.setState(prevState => {
    
        
        return {
            [name]: prevState[name] + 1
        }
        // console.log(prevState.qwerty);
    })
}


  render(){
    return (
          <div>
            <Feedback handleIncrement = {this.handleIncrement}/>
            <Statistics state ={this.state}/>
          </div>
        );
  }
}




// export const App = () => {
//   return (
//     <>
//       <Feedback/>
//       <Statistics/>
//     </>
//   );
// };
