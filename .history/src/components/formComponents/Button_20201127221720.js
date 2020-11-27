import React from 'react'
import styled from 'styled-components';

const BtnSubmit = styled.button`
    background: rgb(19, 144, 150);
    display: block;
    margin: 4% auto;
    font-size: 1.2rem;
`;

const Button = () => {
    return (
        <BtnSubmit>Submit</BtnSubmit>
    )
}

export default Button;
