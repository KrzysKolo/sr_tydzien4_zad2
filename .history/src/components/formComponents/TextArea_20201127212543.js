import React from 'react'
import styled from 'styled-components';
import ErrorMessage from './ErrorMessage';

const TextAreaDiv = styled.div`
    display: flex;
    flex-direction: column;
    align-content: center;
    margin: 0 auto;
    padding-top: 5px;

`;
const TextAreaLabel = styled.label`
    width: 10%;
    font-size: 1rem;
    padding: 5px 10px;
`;
const textAreaStyles = errorInfo => `
    width: 80%;
    max-width: 305px;
    margin: 0 auto 0 15%;
    padding: 5px 10px;
    border: 1px solid ${errorInfo ? '#d3170d' : '#ccc'};
    border-radius: 4px;
    font-family: inherit;
    font-size: 0.9rem;

`;
const TextAreaError = styled.textarea`
    ${props => textAreaStyles(props.errorInfo)}
`;

const Input = (props) => {
    const { name, message, errorInfo }= props;
    return (
        <>
            <TextAreaDiv>
                <TextAreaLabel htmlFor={name}>{name} </TextAreaLabel>
                <TextAreaError id={name} {...props} errorInfo={errorInfo} message={message}/>
            </TextAreaDiv>
            {errorInfo && <ErrorMessage message={message} /> }
        </>
    )

}

export default Input;
