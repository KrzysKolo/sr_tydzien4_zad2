import React from 'react'
import styled from 'styled-components';
import ErrorMessage from './ErrorMessage';

const CheckboxDiv = styled.div`
    display: flex;
    flex-direction: column;
    align-content: center;
    margin: 0 auto;
    padding-top: 5px;

`;
const CheckboxDivLabel = styled.label`
    width: 10%;
    font-size: 1rem;
    padding: 5px 10px;
`;
const checkboxDivStyles = errorInfo => `
    border: 1px solid ${errorInfo ? '#d3170d' : '#ccc'};
    ${!errorInfo && 'margin-bottom: 10px;'}
`;
const CheckboxDivError = styled.input`
    ${props => checkboxDivStyles(props.errorInfo)}
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
