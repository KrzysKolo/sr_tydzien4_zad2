import React from 'react'
import styled from 'styled-components';

const BtnSubmit = styled.button`
    display: block;
    margin: 4% auto;
    background: rgb(19, 144, 150);
    font-size: 1.2rem;
`;

const Button = () => {
    return (
        <BtnSubmit>Submit</BtnSubmit>
    )
}

export default Button;
