import React from 'react'
import styled from 'styled-components';

const BtnSubmit = styled.button`
    background: rgb(19, 144, 150);
    border: none;
    border-radius: 4px;
    color: rgb(235, 231, 232);
    display: block;
    font-size: 1.1rem;
    font-weight: 700;
    margin: 4% auto;
    padding: 8px 0;
    width: 96%;

`;

const Button = () => {
    return (
        <BtnSubmit>Submit</BtnSubmit>
    )
}

export default Button;
