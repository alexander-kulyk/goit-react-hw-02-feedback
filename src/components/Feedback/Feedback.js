
// import React, { Component } from "react";
import { FeedbackOptions } from "components/FeedbackOptions/FeedbackOptions";
import { Container, TitleFeedback } from "./Feedback.styled";



const Feedback = ({onLeaveFeedback}) =>{
    
    return(
        <Container>
             <TitleFeedback>Please leave feedBack</TitleFeedback>
              {/* <FeedbackOptions  handleIncrement = {handleIncrement} /> */}
        </Container>
    )

}

// class Feedback extends Component{

    
//     // handleIncrement = e =>{
//     //     // console.log(e.target.name);

//     //     const qwerty = e.target.name
//     //     console.log(qwerty);
        
//     //     this.setState(prevState => {
            
//     //         return {
//     //             [e.target.name]: prevState.good + 1
//     //         }
//     //         // console.log(prevState.qwerty);
//     //     })
//     // }


//     render(){
//         return(
//             <Container>
//                 <TitleFeedback>Please leave feedBack</TitleFeedback>
//                 <Button name="good" onClick={this.handleIncrement}>Good</Button>
//                 <Button name="neutral" onClick={this.handleIncrement}>Neutral</Button>
//                 <Button name="bad" onClick={this.handleIncrement}>Bad</Button>
//             </Container>
//         )
//     }

// }


export default Feedback