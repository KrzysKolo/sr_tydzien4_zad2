import React from 'react'
import styled from 'styled-components';

const InputDiv = styled.div`
    display: flex;
    flex-direction: row;
    align-content: center;
`;
const InputLabel = styled.label`
    width: 20%;
    font-size: 1.2rem;
    padding: 5px 10px;
`;
const inputStyles = errorInfo => `
border: 1ps solid ${errorInfo ? "red" : "#ccc"}
`;
const InputError = styled.input`
 width: 200px;
 background: pink;
 font-size: 1.2rem;
 margin-left: 10px;
 ${props => inputStyles(props.errorInfo)}
`;

const Input = (props) => {
    const { name }= props;
    return (
        <>
            <InputDiv>
                <InputLabel>{name} </InputLabel>
                <InputError {...props}/>
            </InputDiv>
        </>
    )

}

export default Input
