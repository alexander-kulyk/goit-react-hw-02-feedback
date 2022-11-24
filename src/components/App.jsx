// import { Box } from "./Box/Box";
import React, { Component } from "react";
import { FeedbackOptions } from "./FeedbackOptions/FeedbackOptions";
import { TitleFeedback } from "./SectionTitle/SectionTitle";
import { Statistics } from "./Statistics/Statistics";



export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0
  }

  

  handleIncrement = e =>{
    const { name } = e.currentTarget
    this.setState(prevState => {

        return {
            [name]: prevState[name] + 1
        }
       
    });
  }

  countTotalFeedback = () =>{
    const {good, neutral, bad} = this.state
    const totalFeedback = good+neutral+bad
    return totalFeedback
  }

  countPositiveFeedbackPercentage = () =>{
    const {good, neutral, bad} = this.state
    const totalFeedback = good+neutral+bad
    const positivFeedback = good / totalFeedback * 100
    return positivFeedback
  }
  


  render(){
    const {good, neutral, bad} = this.state
    return (
          <div>
            <TitleFeedback>Please leave feedback</TitleFeedback>
            <FeedbackOptions  FeedbackOptions = {this.handleIncrement} />
            <Statistics 
                good = {good}
                neutral = {neutral}
                bad = {bad}
                totalFeedback={this.countTotalFeedback}
                positivePercentage={this.countPositiveFeedbackPercentage}
                />
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
