import React from 'react'
import styled from 'styled-components';
import ErrorMessage from './ErrorMessage';
const InputDiv = styled.div`
    display: flex;
    flex-direction: row;
    align-content: center;
    margin: 5px auto;
`;
const InputLabel = styled.label`
    width: 10%;
    font-size: 1rem;
    padding: 5px 10px;
`;
const inputStyles = errorInfo => `
    width: 80%;
    max-width: 305px;
    padding: 5px 10px;
    border: 1px solid ${errorInfo ? '#d3170d' : '#ccc'};
    border-radius: 4px;
    font-family: inherit;
    font-size: 0.9rem;
    ${!errorInfo && 'margin-bottom: 10px;'}
`;
const InputError = styled.input`
    ${props => inputStyles(props.errorInfo)}
`;

const Input = (props) => {
    const { name, message, errorInfo }= props;
    return (
        <>
            <InputDiv>
                <InputLabel>{name} </InputLabel>
                <InputError {...props} errorInfo={errorInfo} message={message}/>
            </InputDiv>
            {errorInfo && <ErrorMessage message={message} /> }
        </>
    )

}

export default Input
