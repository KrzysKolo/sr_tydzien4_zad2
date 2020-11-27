import React from 'react'
import styled from 'styled-components';

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
    return (
        <InputError {...props} errorInfo={errorInfo} />
        {errorInfo && <p>Błąd</p>}
    )
}

export default Input
