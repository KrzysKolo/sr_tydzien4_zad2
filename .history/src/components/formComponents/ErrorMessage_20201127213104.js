import React from 'react';
import styled from 'styled-components';

const DivError = styled.div`
color: rgb(219, 18, 18);
font-size: 0.8rem;
margin: 7px 5% 7px 15%;
`;

const ErrorMessage = (props) => {
    return (
        <DivError>
            {props.message}
        </DivError>
    )
}

export default ErrorMessage;
