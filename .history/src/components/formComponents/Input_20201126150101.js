import React from 'react'
import styled from 'styled-components';

const InputError = styled.input`
 width: 200px;
 background: pink;
 font-size: 1.2rem;
`;

const Input = (props) => {
    return (
        <InputError {...props} />
    )
}

export default Input
