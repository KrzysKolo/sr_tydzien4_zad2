import React from 'react'
import styled from 'styled-components';

const BtnSubmit = styled.button`
    background: rgb(19, 144, 150);
    border: none;
    border-radius: 4px;
    display: block;
    font-size: 1.1rem;
    margin: 4% auto;
    padding: 10px 0;
    width: 96%;

`;

const Button = () => {
    return (
        <BtnSubmit>Submit</BtnSubmit>
    )
}

export default Button;
