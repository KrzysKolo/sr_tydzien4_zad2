import React from 'react'
import styled from 'styled-components';
import ErrorMessage from './ErrorMessage';
const InputDiv = styled.div`
    display: flex;
    flex-direction: row;
    align-content: center;
    margin: 10px auto;
`;
const InputLabel = styled.label`
    width: 10%;
    font-size: 1.2rem;
    padding: 5px 10px;
`;
const inputStyles = errorInfo => `
border: 1ps solid ${errorInfo ? "red" : "#ccc"}
`;
const InputError = styled.input`
    width: 80%;
    width-max: 300px;
    background: rgb(238, 238, 238);
    font-size: 1rem;
    padding: 3px 10px;
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
            {errorInfo && <ErrorMessage /> }
        </>
    )

}

export default Input
