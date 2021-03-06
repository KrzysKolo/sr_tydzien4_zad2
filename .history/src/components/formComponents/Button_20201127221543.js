import React from 'react'
import styled from 'styled-components';

const BtnSubmit = styled.button`
    width: 80%;
    max-width: 350px;
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
