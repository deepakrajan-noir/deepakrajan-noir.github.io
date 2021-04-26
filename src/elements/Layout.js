import styled from "styled-components";
import Colors from "./Colors";

const MidWrapper = styled.div`
    /* display: grid; */
    /* place-items:center; */
    /* background-color:${Colors.purple}; */
    width:1020px;
    margin:auto;
    
`

const CatHeading = styled.div`
   padding: 0px 0px 20px 0px; 
   letter-spacing: 2px;
   font-size: 14px;
   text-transform: uppercase;
   color:${Colors.purple};
`

export {
    MidWrapper,
    CatHeading
}