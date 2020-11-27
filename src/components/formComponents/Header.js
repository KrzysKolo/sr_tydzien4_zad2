import React from 'react';
import styled from 'styled-components';

const HeaderTitle = styled.header`
    border-bottom: 1px solid rgb(206, 204, 204);
    box-shadow: 0 2px 2px rgba(189, 185, 189, 0.4);
    color: rgb(19, 144, 150);
    font-size: 1.2rem;
    font-weight: 900;
    padding: 10px;
    margin: 10px auto;
    text-align: center;

`;

const Header = () => {
    return (
        <HeaderTitle>
            Please complete the form!
        </HeaderTitle>
    )
}

export default Header;
