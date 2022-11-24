// import { Box } from "./Box/Box";
import React, { Component } from "react";
import { FeedbackOptions } from "./FeedbackOptions/FeedbackOptions";
import { Section } from "./Section/Section";
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
    const totalFeedback = good + neutral + bad
    return totalFeedback
  }

  countPositiveFeedbackPercentage = () =>{
    const {good, neutral, bad} = this.state
    const totalFeedback = good + neutral + bad
    const positivFeedback = good / totalFeedback * 100
    return positivFeedback
  }
  


  render(){
    const {good, neutral, bad} = this.state
    return (
          <div>
            <Section title = 'Please leave feedback'>
              <FeedbackOptions 
              options = {Object.keys(this.state)}  
              onLeaveFeedback = {this.handleIncrement} 
              />
            </Section>
            
            <Section title = 'Statiatic'>
            <Statistics 
                good = {good}
                neutral = {neutral}
                bad = {bad}
                totalFeedback={this.countTotalFeedback}
                positivePercentage={this.countPositiveFeedbackPercentage}
                />
            </Section>
            
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
