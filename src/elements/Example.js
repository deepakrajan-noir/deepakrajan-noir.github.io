import styled ,{css} from 'styled-components';

const Button = styled.button`
    font-family: sens-serif;
    font-size: 1.3rem;
    border:none;
    border-radius: 0px;
    padding: 6px 10px;
    /* background-color:red; */
    background-color: ${(props) => (props.primary ? 'red': 'green')};
    cursor: pointer;
    &:hover{
        color:yellow;
    }

`

const Button2 = styled.button`
    /* background-color: yellow; */
    font-size:10px;
    ${(props) =>
        props.color &&
        css `
        background: ${(props)=>props.color}; 
        padding: ${(props)=>props.padding};
        `}
`

export {
    Button,
    Button2
} 
        // <Button primary>Create</Button>
        // <Button2 color="yellow" padding="5px">Hello</Button2>