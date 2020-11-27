import React from 'react';
import styled from 'styled-components';

const DivError = styled.div`
color: rgb(219, 18, 18);
font-size: 1.1rem;
margin: 5px 10px;
`;

const ErrorMessage = () => {
    return (
        <DivError>
            Błąd
        </DivError>
    )
}

export default ErrorMessage;
