import { ContainerStat, ItemStat, Positive, Total } from "./Statistics.styled"






export const Statistics = ({good, neutral, bad, totalFeedback, positivePercentage}) => {

    const total = totalFeedback();
    const positive = positivePercentage()

    const calcPositiveFeedback = () =>{
        return positive > 0 
         ? Math.round(positive)
         : 0
    }
    return(
        <ContainerStat>
            <ItemStat>Good: {good}</ItemStat>
            <ItemStat>Neutral: {neutral}</ItemStat>
            <ItemStat>Bad: {bad}</ItemStat>
            <Total> Total: {total}</Total>
            <Positive>Positive feedback: {calcPositiveFeedback()} %</Positive>
        </ContainerStat>
    )
}