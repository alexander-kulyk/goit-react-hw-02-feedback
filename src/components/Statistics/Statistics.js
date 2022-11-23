import { ContainerStat, ItemStat, TitleStat } from "./Statistics.styled"






export const Statistics = ({state:{good, neutral, bad}}) => {
    return(
        <ContainerStat>
            <TitleStat>Statistic</TitleStat>
            <ItemStat>Good: {good}</ItemStat>
            <ItemStat>Neutral: {neutral}</ItemStat>
            <ItemStat>Bad: {bad}</ItemStat>
        </ContainerStat>
    )
}