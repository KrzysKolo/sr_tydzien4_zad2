import React from 'react';
import styled from 'styled-components';

const HeaderTitle = styled.header`
    border-bottom: 1px solid rgb(206, 204, 204);
    color: rgb(19, 144, 150);
    font-size: 1.2rem;
    font-wight: 900;
    padding: 10px;
    margin: 10px;
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
