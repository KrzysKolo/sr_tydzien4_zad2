import React from 'react'
import styled from 'styled-components';
import ErrorMessage from './ErrorMessage';

const RadioDiv = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-bottom: -8px;

`;
const RadioLabel = styled.label`
    font-size: 1rem;
    padding: 5px;
`;

const RadioError = styled.input`
    margin-left: 10px;
`;

const Checkbox = (props) => {
    const { name,  message, errorInfo, options }= props;
    return (
        <>
              {options.map(option =>  <RadioDiv key={option.id}>
                    <RadioError id={option.value} name={name} {...props} errorInfo={errorInfo} message={message} />
                    <RadioLabel htmlFor={option.value}>{option.label}</RadioLabel>
                </RadioDiv>)}
            {errorInfo && <ErrorMessage message={message} /> }
        </>
    )

}

export default Checkbox;
