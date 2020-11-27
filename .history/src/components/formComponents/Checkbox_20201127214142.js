import React from 'react'
import styled from 'styled-components';
import ErrorMessage from './ErrorMessage';

const CheckboxDiv = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-bottom: -10px;

`;
const CheckboxLabel = styled.label`
    font-size: 1rem;
    padding: 5px;
`;

const CheckboxError = styled.input`
    margin-left: 10px;
`;

const Checkbox = (props) => {
    const { name, message, errorInfo }= props;
    return (
        <>
            <CheckboxDiv>
                <CheckboxError id={name} {...props} errorInfo={errorInfo} message={message}/>
                <CheckboxLabel htmlFor={name}> Accept you the statute! </CheckboxLabel>
            </CheckboxDiv>
            {errorInfo && <ErrorMessage message={message} /> }
        </>
    )

}

export default Checkbox;
