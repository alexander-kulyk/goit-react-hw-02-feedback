import { ContainerStat, ItemStat, Positive, TitleStat, Total } from "./Statistics.styled"






export const Statistics = ({state:{good, neutral, bad}, totalFeedback, positivFeedback}) => {

    const total = totalFeedback();
    const positive = positivFeedback()

    const calcPositiveFeedback = () =>{
        return positive > 0 
         ? Math.round(positive)
         : 0
    }
    return(
        <ContainerStat>
            <TitleStat>Statistic</TitleStat>
            <ItemStat>Good: {good}</ItemStat>
            <ItemStat>Neutral: {neutral}</ItemStat>
            <ItemStat>Bad: {bad}</ItemStat>
            <Total> Total: {total}</Total>
            <Positive>Positive feedback: {calcPositiveFeedback()} %</Positive>
        </ContainerStat>
    )
}