import { Button, ButtonBox } from "./FeedbackOptions.styled"






export const FeedbackOptions = ({onLeaveFeedback, options}) =>{
    
    return (
        <ButtonBox> 
           {options.map(item =>(
                <Button type="button" key={item} name={item} onClick={onLeaveFeedback}>{item}</Button>
           ))}
        </ButtonBox>
        
        
    )
}//onClick={handleIncrement}


// <Button name="good">Good</Button>
//         <Button name="neutral">Neutral</Button>
//         <Button name="bad" >Bad</Button>