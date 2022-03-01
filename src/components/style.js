import styled ,{ css,StyledComponent } from "styled-components";

export const Wrapper = styled.div`
    display:grid;
    place-content:center;
`

export const WrapperDiv = styled.div`
    display:flex;
    flex-direction:column;
    align-items:center;
    margin-top:100px;
    padding:50px;
    width:200px;
    box-shadow: 5px 10px 8px 10px #888888;
`
export const MainDiv = styled.div`
    margin-bottom:30px;
    display:flex;
    flex-direction:column;

`
export const Input = styled.input`
    margin-top:10px;
    border:1px solid blue;
    padding:10px;
    width:200px;
`
export const Label = styled.label`
    color:blue;
    font-weight:bold;
`
export const Button = styled.button`
    width:220px;
    padding:10px;
    color:white;
    font-weight:bold;
    border:none;
    ${props =>
        props.disabled ? css`
        background:grey;
        `: css`
        background:blue;
        `}
`
export const ValidateP = styled.p`
    color:red;
    font-weight:10px;
`