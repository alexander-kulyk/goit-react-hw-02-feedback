import { Title, SectionBox } from "./Section.styled"




export const Section = ({title, children}) =>{
   
    return(
        <SectionBox>
            <Title>{title}</Title>
            {children}
        </SectionBox>
        
    
    )
}