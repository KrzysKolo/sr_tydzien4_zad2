import React from 'react'
import styled from 'styled-components';

const BtnSubmit = styled.button`
 width: 200px;
 background: red;
 font-size: 1.2rem;
`;

const Button = () => {
    return (
        <BtnSubmit values="Submit"  />
    )
}

export default Button;
