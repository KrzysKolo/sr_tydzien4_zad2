import React from 'react'
import styled from 'styled-components';

const BtnSubmit = styled.button`
    background: rgb(19, 144, 150);
    border: none;
    border-radius: 4px;
    color: rgb(235, 231, 232);
    cursor: pointer;
    display: block;
    font-size: 1.1rem;
    font-weight: 700;
    margin: 4% auto;
    outline: none;
    padding: 8px 0;
    transition: all 0.3s ease-in-out;
    width: 96%;
    &:hover {
        background: transparent;
        border: 1px solid rgba(19, 144, 150, 0.3);
        color: rgb(19, 144, 150);
    }

`;

const Button = () => {
    return (
        <BtnSubmit>Submit</BtnSubmit>
    )
}

export default Button;
