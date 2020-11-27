import React from 'react'
import styled from 'styled-components';

const InputDiv = styled.div`
display: flex;
flex-direction: row;
`;
const inputStyles = errorInfo => `
border: 1ps solid ${errorInfo ? "red" : "#ccc"}
`;
const InputError = styled.input`
 width: 200px;
 background: pink;
 font-size: 1.2rem;
 ${props => inputStyles(props.errorInfo)}
`;

const Input = (props) => {
    const { name }= props;
    return (
        <>
            <InputDiv>
                <label>{name} </label>
                <InputError {...props}/>
            </InputDiv>
        </>
    )

}

export default Input
