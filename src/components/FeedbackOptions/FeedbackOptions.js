import { Button } from "./FeedbackOptions.styled"






export const FeedbackOptions = ({handleIncrement}) =>{
    return (
        <>
            <Button name="good" onClick={handleIncrement}>Good</Button>
            <Button name="neutral" onClick={handleIncrement}>Neutral</Button>
            <Button name="bad" onClick={handleIncrement}>Bad</Button>
        </>
        
        
    )
}//onClick={handleIncrement}


// <Button name="good">Good</Button>
//         <Button name="neutral">Neutral</Button>
//         <Button name="bad" >Bad</Button>