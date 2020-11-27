import React from 'react'
import styled from 'styled-components';
import ErrorMessage from './ErrorMessage';

const CheckboxDiv = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    margin: 0 auto;
    padding-top: 5px;

`;
const CheckboxDivLabel = styled.label`
    font-size: 1rem;
    padding: 5px 10px;
`;

const CheckboxDivError = styled.input`
    margin-left: 10px;

`;

const Checkbox = (props) => {
    const { name, message, errorInfo }= props;
    return (
        <>
            <CheckboxDiv>
                <CheckboxDivError id={name} {...props} errorInfo={errorInfo} message={message}/>
                <CheckboxDivLabel htmlFor={name}>Wyraź zgodę </CheckboxDivLabel>
            </CheckboxDiv>
            {errorInfo && <ErrorMessage message={message} /> }
        </>
    )

}

export default Checkbox;
