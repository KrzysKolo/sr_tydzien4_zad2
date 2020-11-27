import React from 'react';
import styled from 'styled-components';

const HeaderTitle = styled.header`
    color: rgb(19, 144, 150);
    font-size: 1.2rem;
    font-wight: 700;
    padding: 10px;
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
