import React from 'react'
import styled from 'styled-components';
import ErrorMessage from './ErrorMessage';

const RadioDiv = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-top: 5%;
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
            <RadioDiv>
                <RadioLabel>`${name}:`</RadioLabel>
              {options.map(option =>
                <div key={option.id}>
                    <RadioError id={option.id} name={name} {...props} errorInfo={errorInfo} message={message} />
                    <RadioLabel htmlFor={option.id}>{option.label}</RadioLabel>
                </div>)}
             </RadioDiv>
            {errorInfo && <ErrorMessage message={message} /> }
        </>

    )

}

export default Checkbox;
