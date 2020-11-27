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
    const { name, message, errorInfo, radioOptions }= props;
    return (
        <>
              {radioOptions.map(option =>  <RadioDiv key={option.id}>
                    <RadioError id={name} {...props} errorInfo={errorInfo} message={message} />
                    <RadioLabel htmlFor={name}>{option.value}</RadioLabel>
                </RadioDiv>)}
            {errorInfo && <ErrorMessage message={message} /> }
        </>
    )

}

export default Checkbox;
